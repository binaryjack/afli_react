import PValidationMessage from 'lib/components/primal/PValidationBox/PValidationType';
import { useEffect, useState } from 'react';


export enum Validations {
    Mandatory = 'Mandatory',
    Email = 'Email',
    Number = 'Number',
    Phone = 'Phone',
    NumberRange = 'NumberRange',
    DateRange = 'DateRange',
    LengthRange = 'LengthRange',
}

export type ValidationResult = {
    name: Validations;
    isValid: boolean;
    description: PValidationMessage;
}



export type ValidationsRuleSpecific = {
    value?: any;
    fieldName?: string;
    min?: number;
    max?: number;
    start?: string;
    end?: string;
    lengthMin?: number;
    lengthMax?: number;
    example?: string; // must be cultural agnostic
}


export type ValidationRule = ValidationsRuleSpecific & {
    validationType: Validations
}

export type ValidationsRule = ValidationsRuleSpecific & {
    validationTypes: Validations[]
}

export type ValidationCollection = {
    collection: ValidationTopic[]
}



const isNotNullEmptyOrUndefined = (specific: ValidationsRuleSpecific): boolean => !(!specific.value || specific.value.length === 0);
const validationDat = (specific: ValidationsRuleSpecific): PValidationMessage => {
    return {
        errorNumber: 1,
        message: `${specific.fieldName} field is mandatory`,
        rule: `You must enter a valid value in this field`
    };
}


const isEmail = (specific: ValidationsRuleSpecific): boolean => new RegExp('/^[^\s@]+@[^\s@]+\.[^\s@]+$/').test(specific.value);
const validateEmail = (specific: ValidationsRuleSpecific): PValidationMessage => {
    return {
        errorNumber: 2,
        message: `${specific.fieldName} has an incorrect E-Mail`,
        rule: `Email must fo like the following format : ${specific?.example} `
    };
}


const isNumber = (specific: ValidationsRuleSpecific): boolean => new RegExp('/^[0-9]+$/').test(specific.value);
const validateNumber = (specific: ValidationsRuleSpecific): PValidationMessage => {
    return {
        errorNumber: 3,
        message: `${specific.fieldName} Incorrect Number`,
        rule: `Number is not in a recognised format`
    };
}


const isPhoneNumber = (specific: ValidationsRuleSpecific): boolean => new RegExp('/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i').test(specific.value);
const validatePhone = (specific: ValidationsRuleSpecific): PValidationMessage => {
    return {
        errorNumber: 4,
        message: `${specific.fieldName} as an incorrect phone number format`,
        rule: `Phone number must be like: +## ## ### ## ##`
    };
}
const isRangeOverflows = (specific: ValidationsRuleSpecific): boolean => (specific.value > !specific.max) || (specific.value < !specific.min)
const validateRangeOverflow = (specific: ValidationsRuleSpecific): PValidationMessage => {
    return {
        errorNumber: 5,
        message: `${specific.fieldName} value overflows`,
        rule: `The value cannot be less than ${specific.min} or greater than ${specific.max}`
    };
}

const isLengthRangeOverflows = (specific: ValidationsRuleSpecific): boolean => ((specific.value && specific.value.length > 0) ||
    ((specific.value > !specific.lengthMax) || (specific.value < !specific.lengthMin)))

const validateLengthRangeOverflow = (specific: ValidationsRuleSpecific): PValidationMessage => {
    return {
        errorNumber: 5,
        message: `${specific.fieldName} length overflows`,
        rule: `The length cannot be less than ${specific.lengthMin} or greater than ${specific.lengthMax}`
    };
}

const idDateOverflows = (specific: ValidationsRuleSpecific): boolean => (specific.value > !specific.end) || (specific.value < !specific.start)
const validateDateRangeOverflow = (specific: ValidationsRuleSpecific): PValidationMessage => {
    return {
        errorNumber: 6,
        message: `${specific.fieldName} date range overflows`,
        rule: `The date cannot be before than ${specific.start} or after than ${specific.end}`
    };
}

export type ValidationTopic = {
    name: Validations;
    validationMethod: (specific: ValidationsRuleSpecific) => boolean;
    validatedDataMethod: (specific: ValidationsRuleSpecific) => PValidationMessage;
}

export const ValidationElement: ValidationTopic[] = [
    { name: Validations.Mandatory, validationMethod: isNotNullEmptyOrUndefined, validatedDataMethod: validationDat },
    { name: Validations.Email, validationMethod: isEmail, validatedDataMethod: validateEmail },
    { name: Validations.Number, validationMethod: isNumber, validatedDataMethod: validateNumber },
    { name: Validations.Phone, validationMethod: isPhoneNumber, validatedDataMethod: validatePhone },
    { name: Validations.NumberRange, validationMethod: isRangeOverflows, validatedDataMethod: validateRangeOverflow },
    { name: Validations.DateRange, validationMethod: idDateOverflows, validatedDataMethod: validateDateRangeOverflow },
    { name: Validations.LengthRange, validationMethod: isLengthRangeOverflows, validatedDataMethod: validateLengthRangeOverflow },
];

export enum ValidationsPreset {
    MandatoryNames,
    MandatoryEmails,
    Names,
    Emails,
    Phones,
    MandatoryPhones,
    Number,
    MandatoryNumber,
    NumericRanges,
    DateRanges,
    LengthRanges,
}


export type ValidationPresetTopic = {
    name: ValidationsPreset;
    rules: ValidationsRule;
}


export const validationPresets: ValidationPresetTopic[] = [
    { name: ValidationsPreset.MandatoryNames, rules: { validationTypes: [Validations.Mandatory] } },
    { name: ValidationsPreset.MandatoryEmails, rules: { validationTypes: [Validations.Mandatory, Validations.Email] } },
    { name: ValidationsPreset.Emails, rules: { validationTypes: [Validations.Email] } },
    { name: ValidationsPreset.Names, rules: { validationTypes: [] } },
    { name: ValidationsPreset.Phones, rules: { validationTypes: [Validations.Phone] } },
    { name: ValidationsPreset.MandatoryPhones, rules: { validationTypes: [Validations.Mandatory, Validations.Phone] } },
    { name: ValidationsPreset.Number, rules: { validationTypes: [Validations.Number] } },
    { name: ValidationsPreset.MandatoryNumber, rules: { validationTypes: [Validations.Mandatory, Validations.Number] } },
    { name: ValidationsPreset.NumericRanges, rules: { validationTypes: [Validations.NumberRange] } },
    { name: ValidationsPreset.DateRanges, rules: { validationTypes: [Validations.DateRange] } },
    { name: ValidationsPreset.LengthRanges, rules: { validationTypes: [Validations.LengthRange] } },
];


// validation rule Hook 
// this hook prepare the rules regarding the field type.
export const useValidationRule = (preset: ValidationsPreset, specifics?: ValidationsRuleSpecific): ValidationsRule | null => {
    const [result, setResult] = useState<ValidationsRule | null>(null);
    useEffect(() => {
        setResult(prepareRules(preset, specifics));
    }, [preset]);
    return result;
}

// custom Hook
// This hook validate the value
export const useValidations = (value: any, rules?: ValidationsRule): ValidationResult[] | null => {

    const [results, setResults] = useState<ValidationResult[]>([]);

    useEffect(() => {
        const validationCollection = validateRules(value, results, rules);
        if (!validationCollection) return;
        setResults(validationCollection);
    }, [value]);

    return results;
}

export const prepareRules = (preset: ValidationsPreset, specifics?: ValidationsRuleSpecific) => {
    const selectedPreset = validationPresets.filter(o => o.name === preset)[0].rules;

    const outputPreset: ValidationsRule = { ...selectedPreset, ...specifics };

    if (specifics?.end || specifics?.start) {
        const selectedPreset = validationPresets.filter(o => o.name === ValidationsPreset.DateRanges)[0].rules;
        outputPreset.validationTypes = [...selectedPreset.validationTypes, ...outputPreset.validationTypes];
    }
    if (specifics?.min || specifics?.max) {
        const selectedPreset = validationPresets.filter(o => o.name === ValidationsPreset.NumericRanges)[0].rules;
        outputPreset.validationTypes = [...selectedPreset.validationTypes, ...outputPreset.validationTypes];
    }
    return outputPreset;
}

export const validateRules = (value: any, currentState: ValidationResult[], rules?: ValidationsRule): ValidationResult[] | null => {
    if (!rules || !rules.validationTypes) return [];
    rules.value = value;

    console.log(`rules.validationTypes`, rules.validationTypes, currentState);

    let validationCollection: ValidationResult[] = [...currentState];

    rules.validationTypes.forEach(rule => {
        // remove current item
        validationCollection = validationCollection.filter(l => l.name !== rule);

        // get corresponding validation element 
        const validationMessage = ValidationElement.filter(o => o.name === rule)[0];

        // Build validation instance
        const unitResult: ValidationResult = {
            name: validationMessage.name,
            isValid: validationMessage.validationMethod(rules),
            description: validationMessage.validatedDataMethod(rules)
        };
        // append to collection
        validationCollection.push(unitResult);
    });
    return validationCollection;

}