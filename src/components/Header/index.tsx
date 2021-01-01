import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export function Header() {
    return (
        <div className = 'Header'>
            <div className='Header-companyName'>
                <Link to="/">
                    <span className='Header-companyName-title'>ATS PORTAGE</span>
                </Link>
            </div>

            <div className='Header-menu'>
                <div className='Header-menu-item'>
                    <Link to="/">Accueil</Link>
                </div>
                <div className='Header-menu-item'>
                    <Link to="/simulateur">Simulateur</Link>
                </div>
                <div className='Header-menu-item'>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </div>
    );
}


export default Header;