import { ThemeContext } from 'lib/context/theme/ThemeContext';
import { FC, useContext } from 'react';
import './BtnToggle.scss';

const BtnToggle: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="btn btn-info btn-toggle">
      {theme ? 'Light' : 'Dark'}
    </button>
  );
};

export default BtnToggle;
