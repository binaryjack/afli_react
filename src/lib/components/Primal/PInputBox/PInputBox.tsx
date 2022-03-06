import '../../../style/a-style.scss';
import './pInputBox.scss';

import {
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  IContextProps,
  ThemeContext,
} from 'lib/context/theme/ThemeContext';
import {
  useValidations,
  ValidationsRule,
} from 'lib/validations/formInputValidations';
import {
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';

import PValidationBox from '../PValidationBox/PValidationBox';

type Props = {
  register: UseFormRegister<FieldValues>;
  name: string;
  value: any;
  validationsRule?: ValidationsRule;
  type: 'text';
  label: string;
};

const PInputBox: FC<Props> = (
  {
    register,
    validationsRule,
    name,
    value,
    type,
    label
  }) => {
  const { theme } = useContext<IContextProps>(ThemeContext);
  const [focus, setFocus] = useState(false);
  const validationResults = useValidations(value, validationsRule);

  const isValueOrFocus = focus || value;

  const onGotFocus = useCallback((active: boolean) => {
    if (isValueOrFocus) return;
    setFocus(active)
  }, []);

  useEffect(() => {
    console.log(isValueOrFocus);
  }, [focus, value])


  return (
    <div className={`p-input-root`}>
      <label htmlFor={label} className={`p-label ${(isValueOrFocus) ? 'p-label-focus' : ''}`}>{label}</label>
      <input
        {...register(name)}
        autoComplete={'off'}
        onFocus={() => onGotFocus(true)}
        onBlur={() => onGotFocus(false)}
        type={type}
        className={` base-components base-components-border ${theme ? 'darky-3 base-components-border-daky' : ''}`} />
      {
        validationResults &&
        <PValidationBox validationResults={validationResults} />}
    </div>
  );
};

export default PInputBox;
