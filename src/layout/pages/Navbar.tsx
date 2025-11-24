import { useCart } from '../../context/CountContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export function Navbar() {
  const { cartCount } = useCart();

  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <p className='navbar__shop'>Shop</p>
        <p className='navbar__cart'>
          <span className='navbar__cart-count'>{cartCount}</span>
          Cart{' '}
          <FontAwesomeIcon icon={faCartShopping} className='product__icon' />
        </p>
      </div>
    </div>
  );
}
