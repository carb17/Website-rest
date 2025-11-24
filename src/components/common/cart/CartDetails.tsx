// CartDetails.tsx
import { useCart } from '../../../context/CountContext';

import './styles/cartDetails.css';

export default function CartDetails() {
  const { cartItems } = useCart();

  if (cartItems.length === 0) return null;

  return (
    <div className='cart__details'>
      {cartItems.map((item) => (
        <div key={item.id} className='cart__item'>
          <p className='cart__name'>{item.name} </p>
          <p className='cart__price'>${item.price} </p>
          <p className='cart__quantity'> x {item.quantity}</p>
        </div>
      ))}
    </div>
  );
}
