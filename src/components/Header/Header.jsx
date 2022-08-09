import React from 'react';
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className="header__logo">
        <h4>Where in the World?</h4>
      </div>

      <div className="logo__mode">
          <i class="fa-solid fa-moon"></i> Dark Mode
      </div>
    </div>
  )
}

export default Header