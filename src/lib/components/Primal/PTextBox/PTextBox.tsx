import { IContextProps, ThemeContext } from 'lib/context/theme/ThemeContext';
import { FC, useContext } from 'react';
import '../../../style/a-style.css';
import './pTextBox.css';

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
