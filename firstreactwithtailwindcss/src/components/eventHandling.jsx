import React, { useEffect, useState } from "react";
import { locations } from "./data";

const LocationImageFetcher = () => {
  const [country, setCountry] = useState("Canada");
  const [state, setState] = useState("Ontario");
  const [district, setDistrict] = useState("Ottawa");

  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Update States based on selected Country
  useEffect(() => {
    const selectedCountry = locations.find((obj) => obj.country === country);
    setStates(selectedCountry ? selectedCountry.states : []);
    setState(selectedCountry?.states?.[0]?.state || ""); // Set default state
  }, [country]);

  // Update Districts based on selected State
  useEffect(() => {
    const selectedState = states.find((obj) => obj.state === state);
    setDistricts(selectedState ? selectedState.districts : []);
    setDistrict(selectedState?.districts?.[0] || ""); // Set default district
  }, [states ,state]);

  // Fetch Images from Pixabay API
  useEffect(() => {
    if (!district) return; // Prevent unnecessary API calls

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=42526528-08de02f5b75495628f4bb99d2&q=${district}&per_page=10`
        );
        const data = await response.json();
        setImages(data.hits || []);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [district]);

  return (
    <div className="p-4">
      {/* Country Dropdown */}
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        {locations.map((obj) => (
          <option key={obj.country} value={obj.country}>
            {obj.country}
          </option>
        ))}
      </select>

      {/* State Dropdown */}
      <select value={state} onChange={(e) => setState(e.target.value)}>
        {states.map((obj) => (
          <option key={obj.state} value={obj.state}>
            {obj.state}
          </option>
        ))}
      </select>

      {/* District Dropdown */}
      <select value={district} onChange={(e) => setDistrict(e.target.value)}>
        {districts.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>

      {/* Image Gallery */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {images.map((item) => (
          <img
            key={item.id}
            src={item.largeImageURL}
            alt={item.tags}
            className="max-w-[300px] rounded shadow"
          />
        ))}
      </div>

      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md">
          <h1 className="text-4xl font-bold">Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default LocationImageFetcher;
