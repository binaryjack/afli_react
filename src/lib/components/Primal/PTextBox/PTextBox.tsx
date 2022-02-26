import { IContextProps, ThemeContext } from 'lib/context/theme/ThemeContext';
import { FC, useContext } from 'react';
import '../../../style/a-style.scss';
import './pTextBox.scss';

type Props = {
  text: string;
};

const PTextBox: FC<Props> = ({ children, text }) => {
  const { theme } = useContext<IContextProps>(ThemeContext);
  return (
    <span className={`p-textbox-root ${theme ? 'darky-3' : ''}`}>{text && children}</span>
  );
};

export default PTextBox;
