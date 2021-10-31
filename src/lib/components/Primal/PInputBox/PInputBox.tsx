import { IContextProps, ThemeContext } from 'lib/context/theme/ThemeContext';
import { useValidations, ValidationsRule } from 'lib/validations/formInputValidations';
import { FC, useContext, useRef, useState } from 'react';
import '../../../style/a-style.css';
import PValidationBox from '../PValidationBox/PValidationBox';
import './pInputBox.css';

type Props = {
  value: string;
  setValue: (value: string) => void;
  validationsRule?: ValidationsRule;

  type: 'text';
  label: string;
};

const PInputBox: FC<Props> = (
  {
    setValue,
    value,
    validationsRule,
    type,
    label }) => {
  const { theme } = useContext<IContextProps>(ThemeContext);
  const [pristine, setPristine] = useState(false);
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const validationResults = useValidations(value, validationsRule);



  const onFocus = () => {
    setPristine(true);
    setFocus(true);
  }

  const onBlur = () => {
    setPristine(true);
    setFocus(false);
  }

  return (
    <div className={`p-input-root`}>
      <label htmlFor={label} className={`p-label ${(focus || value) ? 'p-label-focus' : ''}`}>{label}</label>
      <input
        autoComplete={'off'}
        spellCheck={false}
        id={label}
        ref={inputRef}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        type={type}
        onInput={(e) => setValue(e.currentTarget.value)}
        className={` base-components base-components-border ${theme ? 'darky-3 base-components-border-daky' : ''}`} />
      {pristine &&
        validationResults &&
        <PValidationBox validationResults={validationResults} />}
    </div>
  );
};

export default PInputBox;
