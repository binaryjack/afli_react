import { IContextProps, ThemeContext } from 'lib/context/theme/ThemeContext';
import { ValidationResult } from 'lib/validations/formInputValidations';
import { FC, useContext } from 'react';
import '../../../style/a-style.scss';
import check from './../../../assets/check.svg';
import cross from './../../../assets/cross.svg';
import './pValidationBox.scss';


type Props = {
  validationResults: ValidationResult[] | null;
};

const PValidationBox: FC<Props> = ({
  validationResults
}) => {
  const { theme } = useContext<IContextProps>(ThemeContext);
  return (
    <div className={`p-validation-root ${theme ? 'darky-validation-3' : ''}`}>
      {validationResults &&
        validationResults.length > 0 &&
        validationResults.map((vr, index) =>
          <div key={index} className={`p-validation-check ${vr.isValid ? 'ok' : 'ko'}`}>
            <div className={'p-validation-img'}>
              <img src={vr.isValid ? check : cross} className={vr.isValid ? 'ok' : 'ko'} />
            </div>
            <div className={'p-validation-text'}>
              {!vr.isValid && <span className={'p-validation-error-number'} >
                {vr.description.rule}
                {vr.description.errorNumber}</span>}
              <span className={'p-validation-error-text'} >
                {vr.isValid ? vr.description.validMessage : vr.description.message}</span>
            </div>
          </div>
        )}
    </div>

  );
};

export default PValidationBox;
