import Version from 'lib/compositions/Version/Version';
import { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar: FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const onToggleManu = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="nav-list">
          <NavLink to="/" exact activeClassName="current">
            <li className="nav-list-item">Home</li>
          </NavLink>
          <NavLink to="/Projects" exact activeClassName="current">
            <li className="nav-list-item">Projects</li>
          </NavLink>
          <NavLink to="/Contact" exact activeClassName="current">
            <li className="nav-list-item">Contacts</li>
          </NavLink>
          <NavLink to="/Persons" exact activeClassName="current">
            <li className="nav-list-item">Persons</li>
          </NavLink>
          <NavLink to="/ValidationVitrine" exact activeClassName="current">
            <li className="nav-list-item">ValidationVitrine</li>
          </NavLink>
        </ul>
      )}
      <div className="nav-version">
        <Version />
      </div>

      <button onClick={onToggleManu} className="btn btn-secondary">
        BTN
      </button>
    </nav>
  );
};

export default Navbar;
