import { createContext, useContext, useState, ReactNode } from 'react';

interface CartContextProps {
  cartCount: number;
  addToCart: () => void;
}

const CartContext = createContext<CartContextProps>({
  cartCount: 0,
  addToCart: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => setCartCount((prev) => prev + 1);

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
