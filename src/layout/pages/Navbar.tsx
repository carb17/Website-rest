import { useCart } from '../../context/CountContext';

import CartDetails from '../../components/common/cart/CartDetails';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export function Navbar() {
  const { cartItems } = useCart();
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <p className='navbar__shop'>Shop</p>
        <div className='navbar__cart'>
          Cart{' '}
          <FontAwesomeIcon icon={faCartShopping} className='product__icon' />
          {totalCount > 0 && (
            <span className='navbar__cart-count'>{totalCount}</span>
          )}
          <CartDetails />
        </div>
      </div>
    </div>
  );
}
