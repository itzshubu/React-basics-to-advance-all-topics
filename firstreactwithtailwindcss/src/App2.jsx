import React from "react";
import Navbar from "./componetsforroutes/Navbar";
import Home from "./componetsforroutes/Home";
import About from "./componetsforroutes/About";
import Footer from "./componetsforroutes/Footer";
import Contactus from "./componetsforroutes/Contactus";
import Products from "./componetsforroutes/Products";
import All from "./productscompo/All";
import Electronics from "./productscompo/electronics";
import { BrowserRouter, Routes, Route , Navigate } from "react-router";
const App2 = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/" element={<Products />}>
          <Route path="" element={<Navigate to="all"/>} />
          <Route path="all" element={<All />} />
          <Route path="electronics" element={<Electronics />} />
          {/* <Route path="electronics" element={<Electronics />} /> */}
        </Route>
        <Route path="/contact" element={<Contactus />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App2;
