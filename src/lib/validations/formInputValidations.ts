import {
  useEffect,
  useState,
} from 'react';

import PValidationMessage
  from 'lib/components/primal/PValidationBox/PValidationType';

export enum Validations {
    Mandatory = 'Mandatory',
    Names = 'Names',
    Email = 'Email',
    Number = 'Number',
    Phone = 'Phone',
    NumberRange = 'NumberRange',
    DateRange = 'DateRange',
    LengthRange = 'LengthRange',
}

export type ValidationResult = {
    name: Validations;
    hasHint: boolean;
    method?: (options: ValidationOptions) => boolean;
    isValid?: boolean;
    description: PValidationMessage;
}

export type ValidationOptions = {
    min?: number;
    max?: number;
    start?: string;
    end?: string;
    lengthMin?: number;
    lengthMax?: number;
}

export type ValidationRule = ValidationOptions & {
    validationType: Validations
}

export type ValidationsRule = ValidationOptions & {
    validationTypes: Validations[]
}

export type ValidationCollection = {
    collection: ValidationTopic[]
}





const validationEmptyOrUndefined = (options: ValidationOptions) => (value: string): PValidationMessage => {

    return {
        errorNumber: 1,
        hasHint: true,
        message: `${Validations.Mandatory} field is mandatory`,
        rule: `You must enter a valid value in this field`,
        validMessage: `good`
    };
}

const validateValidName = (options: ValidationOptions): PValidationMessage => {

    return {
        errorNumber: 2,
        hasHint: true,
        message: `${Validations.Names} has an incorrect Name`,
        rule: `Name must be fo like the following format : ${Validations.Names} `,
        validMessage: `good`
    };
}
const validateEmail = (options: ValidationOptions): PValidationMessage => {

    return {
        errorNumber: 3,
        hasHint: true,
        message: `${Validations.Email} has an incorrect E-Mail`,
        rule: `Email must be like the following format : ${Validations.Email}`,
        validMessage: `good`
    };
}

const validateNumber = (options: ValidationOptions): PValidationMessage => {
    return {
        errorNumber: 4,
        hasHint: true,
        message: `${Validations.Number} Incorrect Number`,
        rule: `Number is not in a recognised format`,
        validMessage: `good`
    };
}

const validatePhone = (options: ValidationOptions): PValidationMessage => {
    return {
        errorNumber: 5,
        hasHint: true,
        message: `${Validations.Phone} as an incorrect phone number format`,
        rule: `Phone number must be like: +## ## ### ## ##`,
        validMessage: `good`
    };
}

const validateRangeOverflow = (options: ValidationOptions): PValidationMessage => {
    return {
        errorNumber: 6,
        hasHint: true,
        message: `${Validations.LengthRange} value overflows`,
        rule: `The value cannot be less than ${options.min} or greater than ${options.max}`,
        validMessage: `good`
    };
}


const validateLengthRangeOverflow = (options: ValidationOptions): PValidationMessage => {
    return {
        errorNumber: 7,
        hasHint: true,
        message: `${Validations.LengthRange} length overflows`,
        rule: `The length cannot be less than ${options.lengthMin} or greater than ${options.lengthMax}`,
        validMessage: `good`
    };
}

const validateDateRangeOverflow = (options: ValidationOptions): PValidationMessage => {

    return {
        errorNumber: 8,
        hasHint: true,
        message: `${Validations.LengthRange} date range overflows`,
        rule: `The date cannot be before than ${options.start} or after than ${options.end}`,
        validMessage: `good`
    };
}

export type ValidationTopic = {
    name: Validations;
    validationMethod: (options: ValidationOptions) => boolean;
    validatedDataMethod: (options: ValidationOptions) => PValidationMessage;
}

export const ValidationElement: ValidationTopic[] = [
    // { name: Validations.Names, validationMethod: isValidName, validatedDataMethod: validateValidName },
    // { name: Validations.Mandatory, validationMethod: isNotNullEmptyOrUndefined, validatedDataMethod: validationEmptyOrUndefined },
    // { name: Validations.Email, validationMethod: isEmail, validatedDataMethod: validateEmail },
    // { name: Validations.Number, validationMethod: isNumber, validatedDataMethod: validateNumber },
    // { name: Validations.Phone, validationMethod: isPhoneNumber, validatedDataMethod: validatePhone },
    // { name: Validations.NumberRange, validationMethod: isRangeOverflows, validatedDataMethod: validateRangeOverflow },
    // { name: Validations.DateRange, validationMethod: idDateOverflows, validatedDataMethod: validateDateRangeOverflow },
    // { name: Validations.LengthRange, validationMethod: isLengthRangeOverflows, validatedDataMethod: validateLengthRangeOverflow },
];

export enum ValidationsPreset {
    Mandatory,
    Names,
    Emails,
    Phones,
    Number,
    NumericRanges,
    DateRanges,
    LengthRanges,
}

export type ValidationPresetTopic = {
    name: ValidationsPreset;
    rules: ValidationsRule;
}

export const validationPresets: ValidationPresetTopic[] = [
    { name: ValidationsPreset.Mandatory, rules: { validationTypes: [Validations.Mandatory] } },
    { name: ValidationsPreset.Emails, rules: { validationTypes: [Validations.Email] } },
    { name: ValidationsPreset.Names, rules: { validationTypes: [Validations.Names] } },
    { name: ValidationsPreset.Phones, rules: { validationTypes: [Validations.Phone] } },
    { name: ValidationsPreset.Number, rules: { validationTypes: [Validations.Number] } },
    { name: ValidationsPreset.NumericRanges, rules: { validationTypes: [Validations.NumberRange] } },
    { name: ValidationsPreset.DateRanges, rules: { validationTypes: [Validations.DateRange] } },
    { name: ValidationsPreset.LengthRanges, rules: { validationTypes: [Validations.LengthRange] } },
];

// validation rule Hook 
// this hook prepare the rules regarding the field type.
export const useValidationRule = (presets: ValidationsPreset[], optionss?: ValidationOptions): ValidationsRule | null => {
    const [result, setResult] = useState<ValidationsRule | null>(null);
    useEffect(() => {
        setResult(prepareRules(presets, optionss));
    }, [])

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

export const prepareRules = (presets: ValidationsPreset[], optionss?: ValidationOptions) => {

    const outputPreset: ValidationsRule = { validationTypes: [], ...optionss };

    presets.forEach(preset => {

        const selectedPreset = validationPresets.filter(o => o.name === preset)[0].rules;
        outputPreset.validationTypes.push(...selectedPreset.validationTypes);
    })

    return outputPreset;
}

export const validateRules = (value: any, currentState: ValidationResult[], rules?: ValidationsRule): ValidationResult[] | null => {
    if (!rules || !rules.validationTypes) return [];


    console.log(`rules.validationTypes`, rules.validationTypes, currentState);

    let validationCollection: ValidationResult[] = [...currentState];

    rules.validationTypes.forEach(rule => {
        // remove current item
        validationCollection = validationCollection.filter(l => l.name !== rule);

        // get corresponding validation element 
        const validationMessage = ValidationElement.filter(o => o.name === rule)[0];

        const ruleSet = validationMessage.validatedDataMethod(rules);

        // Build validation instance
        const unitResult: ValidationResult = {
            hasHint: ruleSet.hasHint,
            name: validationMessage.name,
            isValid: validationMessage.validationMethod(rules),
            description: ruleSet,

        };
        // append to collection
        validationCollection.push(unitResult);
    });
    return validationCollection;
}






const ValidatorType = (input: any) => input;

const Name: typeof ValidatorType = (input: string): string => input
const Mandatory: typeof ValidatorType = (input: boolean): boolean => input
const MaxLength: typeof ValidatorType = (input: number): number => input
const MinLength: typeof ValidatorType = (input: number): number => input


type Schema = {
    sequence: typeof ValidatorType[];
}

const validateSchema = (schema: Schema): boolean => {

    Object.keys(schema.sequence).forEach(key => {
        console.log(schema.sequence[Number.parseInt(key)])
    });

    return true;

}

const FormValues = {
    name: "thisIsMyName"
}

const formSchema: Schema = {
    sequence: [Name("name"), Mandatory(true), MinLength(3), MaxLength(5)]
}

validateSchema(formSchema)

