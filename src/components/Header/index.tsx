import React from 'react';

import './Header.css';

export function Header() {
    return (
        <div className = 'Header'>
            <div className='Header-companyName'>
                <span className='Header-companyName-title'>ATS PORTAGE</span>
            </div>

            <div className='Header-menu'>
                <div className='Header-menu-item'>
                    Accueil
                </div>
                <div className='Header-menu-item'>
                    Nos services
                </div>
                <div className='Header-menu-item'>
                    Simulateur
                </div>

                <div className='Header-menu-item'>
                    Contact
                </div>
            </div>
        </div>
    );
}


export default Header;