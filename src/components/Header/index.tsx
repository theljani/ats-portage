import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

import './Header.css';

export function Header(props: any) {
  const [burgerMenuOpened, setBurgerMenuState] = useState(false);

  const handleOnClose = () => {
    setBurgerMenuState(true);
  };

  useEffect(() => {
    if(burgerMenuOpened === true) {
        setBurgerMenuState(false);
    }
  });

  return (
    <React.Fragment>
      <div className="Header-mobile">
        <div className="Header-companyName-mobile">
          <Link to="/">
            <span className="Header-companyName-title-mobile">ATS CONSULTING</span>
          </Link>
        </div>
        <Menu
          isOpen={burgerMenuOpened}
          right
          className="Header-burger-menu"
          pageWrapId={"Header-burger-menu"}
          outerContainerId={"Header"}
        >
          <div className="Header-menu-item">
            <NavLink onClick={() => handleOnClose()} to="/accueil">
              Accueil
            </NavLink>
          </div>
          <div className="Header-menu-item">
            <NavLink onClick={() => handleOnClose()} to="/simulateur">
              Simulateur
            </NavLink>
          </div>
        </Menu>
      </div>
      <div className="Header">
        <div className="Header-companyName">
          <Link to="/">
            <span className="Header-companyName-title">ATS CONSULTING</span>
          </Link>
        </div>

        <div className="Header-menu">
          <div className="Header-menu-item">
            <NavLink to="/accueil">Accueil</NavLink>
          </div>
          <div className="Header-menu-item">
            <NavLink to="/simulateur">Simulateur</NavLink>
          </div>
          {/* <div className='Header-menu-item'>
                    <Link to="/contact">Contact</Link>
                </div> */}
        </div>
      </div>
    </React.Fragment>
  );
}


export default Header;