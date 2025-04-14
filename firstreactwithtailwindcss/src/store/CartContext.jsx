import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([{
    _id: "67af83a1b43cf46ffae0fe26",
    name: "Slim Fit Casual Shirt",
    main_category: "Men's Wear",
    subcategory: "Shirts",
    type: "upper",
    image: "https://m.media-amazon.com/images/I/81FPwnSfn0L._AC_UL480_FMwebp_QL65_.jpg",
    rating: 4,
    price: 29.99,
    quantity:3,
    description: "A stylish slim-fit casual shirt, perfect for both office and weekend wear. Made with breathable cotton fabric.",
    __v: 0,
    productId: 1
    },]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
