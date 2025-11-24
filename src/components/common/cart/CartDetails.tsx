// CartDetails.tsx
import { useCart } from '../../../context/CountContext';

import './styles/cartDetails.css';
import { Button } from '../buttons/Buttons';

export default function CartDetails() {
  const { cartItems } = useCart();

  if (cartItems.length === 0) return null;

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className='cart__details'>
      <div className='cart__items-container'>
        {cartItems.map((item) => (
          <div key={item.id} className='cart__item'>
            <p className='cart__name'>{item.name} </p>
            <p className='cart__price'>${item.price} </p>
            <p className='cart__quantity'> x {item.quantity}</p>
          </div>
        ))}
      </div>

      <div className='cart__total'>Total: ${total.toFixed(2)}</div>

      <Button text='Buy' className='cart__btn' />
    </div>
  );
}
