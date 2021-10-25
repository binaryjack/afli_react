import { IContextProps, ThemeContext } from 'lib/context/theme/ThemeContext';
import { FC, useContext, useEffect, useRef, useState } from 'react';
import '../../../style/a-style.css';
import PValidationBox from '../PValidationBox/PValidationBox';
import PValidationMessage from '../PValidationBox/PValidationType';
import './pInputBox.css';

type Props = {
  value: string;
  setValue: (value: string) => void;
  validationData?: PValidationMessage;
  validate?: (value: string) => boolean;
  type: 'text';
  label: string;
};

const PInputBox: FC<Props> = (
  {
    setValue,
    value,
    validate,
    validationData,
    type,
    label }) => {
  const { theme } = useContext<IContextProps>(ThemeContext);
  const [hasValidationErrors, setHasValidationErrors] = useState<boolean>(false)

  const [pristine, setPristine] = useState(false);
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);


  const onFocus = () => {
    setPristine(true);
    setFocus(true);
  }

  const onBlur = () => {
    setPristine(true);
    setFocus(false);
  }

  const onValidate = () => {
    if (!validate) return;
    setHasValidationErrors(validate(value));
  }

  useEffect(() => {
    onValidate();
  }, [value])

  return (
    <div className={`p-input-root`}>
      <label htmlFor={label} className={`p-label ${(focus || value) ? 'p-label-focus' : ''}`}>{label}</label>
      <input
        id={label}
        ref={inputRef}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        type={type}
        onInput={(e) => setValue(e.currentTarget.value)}
        className={` base-components base-components-border ${theme ? 'darky-3 base-components-border-daky' : ''}`} />
      {pristine &&
        validationData &&
        hasValidationErrors &&
        <PValidationBox data={validationData} />}
    </div>
  );
};

export default PInputBox;
