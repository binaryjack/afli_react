import { IContextProps, ThemeContext } from 'lib/Context/Theme/ThemeContext';
import { FC, useContext } from 'react';
import './BtnToggle.css';

const BtnToggle: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="btn btn-info btn-toggle">
      {theme ? 'Light' : 'Dark'}
    </button>
  );
};

export default BtnToggle;
