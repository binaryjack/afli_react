import { IContextProps, ThemeContext } from 'lib/context/theme/ThemeContext';
import { FC, useContext } from 'react';
import '../../../style/a-style.css';
import './pValidationBox.css';
import PValidation from './PValidationType';

type Props = {
  data: PValidation;
};

const PValidationBox: FC<Props> = ({
  data
}) => {
  const { theme } = useContext<IContextProps>(ThemeContext);
  return (
    <span className={`p-validation-root ${theme ? 'darky-validation-3' : ''}`}>
      <span className={"p-validation-error-number"} >{data.errorNumber && data.errorNumber}</span>
      <span className={"p-validation-error-text"} >{data.message && data.message}</span>
      <span className={"p-validation-error-rule"}  >{data.rule && data.rule}</span>

    </span>

  );
};

export default PValidationBox;
