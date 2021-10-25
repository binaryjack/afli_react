import { IContextProps, ThemeContext } from 'lib/context/theme/ThemeContext';
import { FC, useContext } from 'react';
import '../../../style/a-style.css';
import './pValidationBox.css';
import PValidationMessage from './PValidationType';

type Props = {
  data: PValidationMessage;
};

const PValidationBox: FC<Props> = ({
  data
}) => {
  const { theme } = useContext<IContextProps>(ThemeContext);
  return (
    <div className={`p-validation-root ${theme ? 'darky-validation-3' : ''}`}>
      <div className={"p-validation-group-1"}>
        <span className={"p-validation-error-number"} >{data.errorNumber && data.errorNumber}</span>
        <span className={"p-validation-error-text"} >{data.message && data.message}</span>
      </div>
      <span className={"p-validation-error-rule"}  >{data.rule && data.rule}</span>
    </div>

  );
};

export default PValidationBox;
