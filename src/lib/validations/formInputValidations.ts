import PValidationMessage from 'lib/components/primal/PValidationBox/PValidationType';
import { useEffect, useState } from 'react';

const isMandatory = (value: string): boolean => !value || value.length === 0;
const validationData: PValidationMessage = {
    errorNumber: 1,
    message: "Validation Error",
    rule: "Mandatory"
}


const isEmail = (value: string): boolean => new RegExp('/^[^\s@]+@[^\s@]+\.[^\s@]+$/').test(value);
const validateEmail: PValidationMessage = {
    errorNumber: 2,
    message: "Validation Error",
    rule: "Mandatory"
}


const isNumber = (value: string): boolean => new RegExp('/^[0-9]+$/').test(value);
const validateNumber: PValidationMessage = {
    errorNumber: 152,
    message: "Validation Error",
    rule: "Mandatory"
}


const isPhoneNumber = (value: string): boolean => new RegExp('/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i').test(value);
const validatePhone: PValidationMessage = {
    errorNumber: 152,
    message: "Validation Error",
    rule: "Mandatory"
}




export enum Validations {
    Mandatory,
    Email,
    Number,
    Phone
}

export type ValidationResult = {
    isValid: boolean;
    description: PValidationMessage;
}



export type ValidationsRuleSpecific = {
    min?: number;
    max?: number;
    start?: string;
    end?: string;
}


export type ValidationRule = ValidationsRuleSpecific & {
    validationTypes: Validations
}

export type ValidationsRule = ValidationsRuleSpecific & {
    validationTypes: Validations[]
}

export type ValidationCollection = {
    collection: ValidationTopic[]
}

export type ValidationTopic = {
    name: Validations;
    method: (value: any) => boolean;
    description: PValidationMessage
}

export const validationElement: ValidationTopic[] = [
    { name: Validations.Mandatory, method: isMandatory, description: validationData },
    { name: Validations.Email, method: isEmail, description: validateEmail },
    { name: Validations.Number, method: isNumber, description: validateNumber },
    { name: Validations.Phone, method: isPhoneNumber, description: validatePhone },
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
];

export const useValidationRule = (preset: ValidationsPreset, specifics?: ValidationsRuleSpecific): ValidationsRule | null => {
    const [result, setResult] = useState<ValidationsRule | null>(null);

    useEffect(() => {
        const selectedPreset = validationPresets.filter(o => o.name === preset)[0].rules;
        const outputPreset: ValidationsRule = { ...selectedPreset, ...specifics };
        setResult(outputPreset);
    }, [preset]);

    return result;
}

export const useValidation = (value: any, rules?: ValidationRule): ValidationResult | null => {
    const [isValid, setIsValid] = useState<boolean>(true);
    const validationMessage = validationElement.filter(o => o.name === rules?.validationTypes)[0];
    const [result, setResult] = useState<ValidationResult | null>(null);

    useEffect(() => {
        if (!rules) return;
        setIsValid(validationMessage.method(value));
        setResult({ isValid, description: validationMessage.description });
    }, [value]);

    return result;
}


export const useValidations = (value: any, rules?: ValidationsRule): ValidationResult[] | null => {

    const [results, setResults] = useState<ValidationResult[] | null>(null);

    useEffect(() => {
        if (!rules || !rules.validationTypes) return;

        rules.validationTypes.forEach(rule => {
            const validationMessage = validationElement.filter(o => o.name === rule)[0];
            const result: ValidationResult = {
                isValid: validationMessage.method(value),
                description: validationMessage.description
            };
            const newResults: ValidationResult[] = [...results, result];
            setResults(newResults);
        });

    }, [value]);

    return results;
}
