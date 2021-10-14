import { IContextProps, ThemeContext } from 'lib/Context/Theme/ThemeContext';
import { FC, useContext } from 'react';
import '../../../Style/a-style.css';
import './PTextBox.css';

type Props = {
  text: string;
};

const PTextBox: FC<Props> = ({ text }) => {
  const { theme } = useContext<IContextProps>(ThemeContext);
  return (
    <span className={`p-textbox-root ${theme ? 'darky-3' : ''}`}>{text}</span>
  );
};

export default PTextBox;
