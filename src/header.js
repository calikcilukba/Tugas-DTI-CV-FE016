import React from 'react';
// import { Link } from 'react-router-dom';
import routes from './config/routes';

const Header = () => {
  const listMenu = routes;
  return (
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper white">
          <a href="/" class="brand-logo">
            <h5 class="heading weight-400">PORTOFOLIO</h5>
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            {listMenu.reverse().map((name) => {
              if (name.isPublic) {
                return (
                  <li key={name.path}>
                    <a href={`${name.path}`}>
                      <div class="weight-400" style={{ color: 'black' }}>
                        {name.name}
                      </div>
                    </a>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Header;
