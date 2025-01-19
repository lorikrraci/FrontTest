import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header style={{ backgroundColor: '#d31010', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Left Section: Logo and Title */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img 
                    src="./images/KB-Vellaznimi-logo.png" 
                    alt="KB Vëllaznimi" 
                    style={{ height: '50px', marginRight: '10px' }}
                />
                <h1 style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold', margin: '0' }}>KB VËLLAZNIMI</h1>
            </div>

            {/* Right Section: Navigation Links */}
            <nav style={{ display: 'flex', gap: '20px' }}>
                <Link 
                    to="/" 
                    style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none' }}
                >
                    Kryefaqja
                </Link>
                <Link 
                    to="/store" 
                    style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none' }}
                >
                    Klubi
                </Link>
                <Link 
                    to="/store" 
                    style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none' }}
                >
                    Dyqani
                </Link>
                <Link 
                    to="/tickets" 
                    style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none' }}
                >
                    Rezultatet
                </Link>
                <Link 
                    to="/tickets" 
                    style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none' }}
                >
                    Lajmet
                </Link>
                <Link 
                    to="/login" 
                    style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none' }}
                >
                    Login
                </Link>
            </nav>
        </header>
    );
};

export default Header;
