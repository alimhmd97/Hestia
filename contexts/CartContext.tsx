"use client";
// import { createContext, useContext, useEffect, useState } from "react";

// export interface CartItem {
//   id: string | number;
//   name: string;
//   price: number;
//   img: string;
//   quantity?: number;
//   description: string;
//   shortDesc: string;
//   scents: string[];
// }

// interface CartContextType {
//   cart: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (id: string) => void;
//   increaseQuantity: (id: string) => void;
//   decreaseQuantity: (id: string) => void;
//   clearCart: () => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [cart, setCart] = useState<CartItem[]>(() => {
//     if (typeof window !== "undefined") {
//       const savedCart = localStorage.getItem("cart");
//       return savedCart ? JSON.parse(savedCart) : [];
//     }
//     return [];
//   });

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (item: CartItem) => {
//     setCart((prev) => {
//       const existingItem = prev.find((i) => i.id === item.id);
//       if (existingItem) {
//         return prev.map((i) => (i.id === item.id ? { ...i, quantity: +1 } : i));
//       }
//       return [...prev, { ...item, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id: string) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   const increaseQuantity = (id: string) => {
//     setCart((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity || 0 + 1 } : item
//       )
//     );
//   };

//   const decreaseQuantity = (id: string) => {
//     setCart((prev) =>
//       prev.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               quantity: item.quantity || 0 > 1 ? item.quantity || 0 - 1 : 1,
//             }
//           : item
//       )
//     );
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         increaseQuantity,
//         decreaseQuantity,
//         clearCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };

import { createContext, useContext, useEffect, useState } from "react";

// Define the CartItem type
export interface CartItem {
  id: number;
  name: string;
  type: "jar" | "mold"; // Candle type
  size: number; // Size in grams
  price: number;
  quantity: number;
  imgs: string[];
  description: string;
  shortDesc: string;
  color?: string;
  scent?: string;
}

// Define the CartContext type
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (
    id: number | string,
    size: number,
    type: string,
    amount: number,
    scent: string
  ) => void;
  removeFromCart: (
    id: number,
    size: number,
    type: string,
    scent: string
  ) => void;
  clearCart: () => void;
}

// Create Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook to access CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

const increaseQuantity = (candle: CartItem) => {};
const decreaseQuantity = (candle: CartItem) => {};
// CartProvider Component
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to cart function
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) =>
          cartItem.id == item.id &&
          cartItem.scent == item.scent &&
          cartItem.size == item.size &&
          cartItem.type == item.type
      );

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id &&
          cartItem.size === item.size &&
          cartItem.type === item.type
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: item?.quantity || 1 }];
      }
    });
  };

  // Update quantity (increase or decrease)
  const updateQuantity = (
    id: number | string,
    size: number,
    type: string,
    amount: number,
    scent: string
  ) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((cartItem) =>
            cartItem.id === id &&
            cartItem.size === size &&
            cartItem.type === type
              ? { ...cartItem, quantity: cartItem.quantity + amount }
              : cartItem
          )
          .filter((cartItem) => cartItem.quantity > 0) // Remove if quantity is 0
    );
  };

  // Remove a specific item from the cart
  const removeFromCart = (
    id: number,
    size: number,
    type: string,
    scent: string
  ) => {
    setCart((prevCart) =>
      prevCart.filter(
        (cartItem) =>
          !(
            cartItem.id === id &&
            cartItem.scent === scent &&
            cartItem.size === size &&
            cartItem.type === type
          )
      )
    );
  };

  // Clear the entire cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
