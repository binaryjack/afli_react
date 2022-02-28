import '../../../style/a-style.scss';
import './pValidationBox.scss';

import {
  FC,
  Fragment,
  useContext,
} from 'react';

import {
  IContextProps,
  ThemeContext,
} from 'lib/context/theme/ThemeContext';
import { ValidationResult } from 'lib/validations/formInputValidations';

import check from '../../../assets/check.svg';
import cross from '../../../assets/cross.svg';

type Props = {
  validationResults: ValidationResult[] | null;
};

const checkIco = () => <> {check}</>

const PValidationBox: FC<Props> = ({
  validationResults
}) => {
  const { theme } = useContext<IContextProps>(ThemeContext);



  const hint = (vr: ValidationResult) =>
    <div className={'p-validation-error-rule'}>
      {vr.description}
    </div>


  const errorLoop = (vr: ValidationResult) => {
    <>
      <div className={'p-validation-img'}>
        <img src={cross} className={'ko'} />
      </div>
      <div className={'p-validation-text'}>
        <span className={'p-validation-error-number'} >
          {vr.description.errorNumber}
        </span>
        <span className={'p-validation-error-text'} >
          {vr.description.message}
        </span>
      </div>
    </>
  }

  return (

    <div className={`p-validation-root ${theme ? 'darky-validation-3' : ''}`}>
      {validationResults &&
        validationResults.map((vr, index) =>
          <Fragment key={index}>

            {vr.hasHint && vr.isValid === undefined &&
              <div key={index} className={`p-validation-check ok`}>
                <div className='p-validation-text'>
                  {vr.description.rule}
                </div>

              </div>
            }

            <div key={index} className={`p-validation-check ${vr.isValid ? 'ok' : 'ko'}`}>

            </div>
          </Fragment>
        )
      }
    </div >
  )
}

export default PValidationBox;



