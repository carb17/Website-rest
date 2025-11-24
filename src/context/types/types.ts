export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}
