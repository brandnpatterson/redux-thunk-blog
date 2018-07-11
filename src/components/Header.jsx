import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Posts
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/posts/new">
              New
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
