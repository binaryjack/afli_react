import { IContextProps, ThemeContext } from 'lib/context/theme/ThemeContext';
import { FC, useContext, useEffect, useRef, useState } from 'react';
import '../../../style/a-style.css';
import PValidationBox from '../PValidationBox/PValidationBox';
import PValidation from '../PValidationBox/PValidationType';
import './pInputBox.css';

type Props = {
  value: string;
  setValue: (value: string) => void;
  validationData?: PValidation;
  validate?: (value: string) => boolean;
};

const PInputBox: FC<Props> = ({ setValue, value, validate, validationData }) => {
  const { theme } = useContext<IContextProps>(ThemeContext);
  const [hasValidationErrors, setHasValidationErrors] = useState<boolean>(false)

  const [pristine, setPristine] = useState(false);
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onFocus = () => {
    console.log("onFocus")
    setPristine(true);
    setFocus(true);
  }

  const onBlur = () => {
    console.log("onBlur")
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
    <div>
      {pristine ? 'pristine' : ''}
      <br />
      {focus ? 'focus' : ''}
      <input ref={inputRef} onFocus={onFocus} onBlur={onBlur} value={value} onInput={(e) => setValue(e.currentTarget.value)}
        className={`p-input-root base-components-border ${theme ? 'darky-3' : ''}`} />
      {pristine && validationData && hasValidationErrors && <PValidationBox data={validationData} />}
    </div>
  );
};

export default PInputBox;
