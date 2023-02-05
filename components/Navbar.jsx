import React from 'react';
import Link from 'next/link';

// import { Cart } from './';
// import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  // const { showCart } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        +7 (927) 216-12-81
      </p>

      <Link href="/">
        <a className='my-link'>Главная</a>
      </Link>

      {/* {showCart && <Cart />} */}
    </div>
  )
}

export default Navbar;