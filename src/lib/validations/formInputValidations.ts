import PValidationMessage from 'lib/components/primal/PValidationBox/PValidationType';

const isMandatory = (value: string): boolean =>
    !value || value.length === 0;

const validationData: PValidationMessage = {
    errorNumber: 1,
    message: "Validation Error",
    rule: "Mandatory"
}


const isEmail = (value: string): boolean => {
    return new RegExp('/^[^\s@]+@[^\s@]+\.[^\s@]+$/').test(value);
}
const validateEmail: PValidationMessage = {
    errorNumber: 2,
    message: "Validation Error",
    rule: "Mandatory"
}


const isNumber = (value: string): boolean => {
    return new RegExp('/^[0-9]+$/').test(value);
}
const validateNumber: PValidationMessage = {
    errorNumber: 152,
    message: "Validation Error",
    rule: "Mandatory"
}


const isPhoneNumber = (value: string): boolean => {
    return new RegExp('/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i').test(value);
}
const validatePhone: PValidationMessage = {
    errorNumber: 152,
    message: "Validation Error",
    rule: "Mandatory"
}


type ValidationTopic = {
    method: (value: any) => boolean;
    message: PValidationMessage
}



export type ValidationElement = {

}


