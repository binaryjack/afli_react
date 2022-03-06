import { ValidationOptions } from './formInputValidations';

export const isNotNullEmptyOrUndefined = (value: string): boolean => !(!value || value.length === 0);
export const isValidName = (value: string): boolean => new RegExp(/^[a-zA-Z\\s-]+$/).test(value);
export const isEmail = (value: string): boolean => new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(value);
export const isNumber = (value: string): boolean => new RegExp(/^[0-9]+$/).test(value);
export const isPhoneNumber = (value: string): boolean => new RegExp(/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i).test(value);
export const idDateOverflows = (options: ValidationOptions) => (value: string): boolean => (value > options.end!) || (value < options.start!)
export const isLengthRangeOverflows = (options: ValidationOptions) => (value: string): boolean => {
    if (!options.lengthMin && !options.lengthMax && !value || value.length < 1) return false
    const min = options.lengthMin!
    const max = options.lengthMax!
    const valueParsed = Number.parseInt(value)
    return valueParsed > max || valueParsed < min
}

export const isRangeOverflows = (options: ValidationOptions) => (value: string): boolean => {
    if (!options.min && !options.max) return false
    const min = options.min!
    const max = options.max!
    const valueParsed = Number.parseInt(value)
    return valueParsed > max || valueParsed < min
}

export const formatDate = (date: string | Date, formatToUse?: string): string => {
    return format(new Date(date), formatToUse ?? 'dd/MM/yy')
}

export const formatDateFullYear = (date: string | Date): string => {
    return format(new Date(date), 'dd/MM/yyyy')
}

const dateParsingPattern = /(?<day>[0-9]{2})\/?-?\.?\s?(?<month>[0-9]{2})\/?-?\.?\s?(?<year>[0-9]{4})/
const expectedDateFormat = /(?<year>[0-9]{4})\/?-?\.?\s?(?<month>[0-9]{2})\/?-?\.?\s?(?<day>[0-9]{2})/

export const getDateFromDayMonthYear = (date: string): Date =>
    new Date(getDateStringFromDayMonthYear(date))

export const getDateStringFromDayMonthYear = (date: string): string =>
    date.replace(dateParsingPattern, '$3-$2-$1')

export const isDateFormatValid = (date: string): boolean => {
    const result = date.match(expectedDateFormat)
    return result ? result.length > 0 : false
}


export const format = (date: Date, format: string): string => {
    return date.toISOString()
}