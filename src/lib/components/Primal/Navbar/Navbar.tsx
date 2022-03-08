import './navbar.scss';

import {
  FC,
  useEffect,
  useState,
} from 'react';

import Version from 'lib/compositions/Version/Version';
import { NavLink } from 'react-router-dom';

const Navbar: FC = (): JSX.Element => {
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
    <>
      <nav>
        {(toggleMenu || screenWidth > 500) && (
          <ul className="nav-list">

            <li className="nav-list-item">
              <NavLink to="/Home" className="">
                Home
              </NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink to="/Contact" className="">
                Contacts
              </NavLink></li>
            <li className="nav-list-item">
              <NavLink to="/Persons" className="">
                Persons
              </NavLink></li>
            <li className="nav-list-item">
              <NavLink to="/ValidationVitrine" className="">
                ValidationVitrine
              </NavLink>
            </li>
          </ul>
        )}
        <div className="nav-version">
          <Version />

        </div>

        <button onClick={onToggleManu} className="btn btn-secondary">
          BTN
        </button>
      </nav>


    </>
  );
};

export default Navbar;
