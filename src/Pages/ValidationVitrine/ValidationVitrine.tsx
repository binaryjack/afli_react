import PValidationBox from 'lib/components/primal/PValidationBox/PValidationBox';
import { prepareRules, validateRules, ValidationsPreset, ValidationsRuleSpecific } from 'lib/validations/formInputValidations';
import { FC } from 'react';
import "./validationVitrine.css";

const ValidationVitrine: FC = () => {

    const mandatorySpecific: ValidationsRuleSpecific = {}
    const mandatoryRule = prepareRules(ValidationsPreset.MandatoryNames, mandatorySpecific);


    const eMailSpecific: ValidationsRuleSpecific = {}
    const eMailSRule = prepareRules(ValidationsPreset.Emails, eMailSpecific);

    return (
        <>
            <h1 className="validation-vitrine-h1">Validation Vitrine</h1>
            <div className="validation-vitrine-group">
                <h2 className="validation-vitrine-topic">is Mandatory</h2>

                <div className="validation-vitrine-explain">
                    <span>Mandatory Value is Empty</span>
                    <span><PValidationBox validationResults={validateRules("", [], mandatoryRule)} /></span>
                </div>

                <div className="validation-vitrine-explain">
                    <span>Mandatory Has Value</span>
                    <span><PValidationBox validationResults={validateRules("Value", [], mandatoryRule)} /></span>
                </div>
            </div>
            <div className="validation-vitrine-group">
                <h2 className="validation-vitrine-topic"></h2>

                <div className="validation-vitrine-explain">
                    <span>EMail is not valid</span>
                    <span><PValidationBox validationResults={validateRules("test.fit@libr a@v", [], eMailSRule)} /></span>
                </div>

                <div className="validation-vitrine-explain">
                    <span>EMail is valid</span>
                    <span><PValidationBox validationResults={validateRules("testfit@libra.ch", [], eMailSRule)} /></span>
                </div>
            </div>
        </>
    );
}

export default ValidationVitrine;

