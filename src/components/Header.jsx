import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CustomIcon } from 'icon-sphere';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            IconSphere
          </Link>
          <nav className="nav">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Showcase
            </Link>
            <Link 
              to="/docs" 
              className={`nav-link ${location.pathname === '/docs' ? 'active' : ''}`}
            >
              Documentation
            </Link>
            <a 
              href="https://www.npmjs.com/package/icon-sphere" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-button"
            >
              Install Package
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;