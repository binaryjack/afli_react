import { IContextProps, ThemeContext } from 'lib/context/theme/ThemeContext';
import { FC, useContext, useEffect, useState } from 'react';
import '../../../style/a-style.css';
import PValidationBox from '../PValidationBox/PValidationBox';
import PValidation from '../PValidationBox/PValidationType';
import './pInputBox.css';

type Props = {
  value?: string | number;
  setValue: (value: string | number) => void;
  validationData?: PValidation;
  validate?: (value: string | number) => boolean;
};

const PInputBox: FC<Props> = ({ setValue, value, validate, validationData }) => {
  const { theme } = useContext<IContextProps>(ThemeContext);
  const [hasValidationErrors, setHasValidationErrors] = useState<boolean>(false)

  useEffect(() => {
    if (!validate || !value) return;
    setHasValidationErrors(validate(value));
  }, [value])

  return (
    <div>
      <input value={value} onInput={(e) => setValue(e.currentTarget.value)}
        className={`p-input-root ${theme ? 'darky-3' : ''}`} />
      {validationData && hasValidationErrors && <PValidationBox data={validationData} />}
    </div>
  );
};

export default PInputBox;
