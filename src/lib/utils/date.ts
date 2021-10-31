export const ParseDateFromDDMMYYYY = (date: string): Date =>
    new Date(date.replace(/(?<day>[0-9]{2})\/?\.?\s?\-?(?<month>[0-9]{2})\/?\.?\s?\-?(?<year>[0-9]{4})/, '$3-$2-$1'));

export const ParseFromISO = (date: string): string =>
    new Date(date.replace(/(?<year>[0-9]{4})\/?\.?\s?\-?(?<month>[0-9]{2})\/?\.?\s?\-?(?<day>[0-9]{2})/, '$1-$2-$3')).toISOString();

export const ParseDate = (date: string): string => {
    if (date.match(/(?<day>[0-9]{2})\/?\.?\s?\-?(?<month>[0-9]{2})\/?\.?\s?\-?(?<year>[0-9]{4}))/)) {
        return ParseDateFromDDMMYYYY(date).toISOString();
    }
    if (date.match(/(?<year>[0-9]{4})\/?\.?\s?\-?(?<month>[0-9]{2})\/?\.?\s?\-?(?<day>[0-9]{2})/)) {
        return ParseFromISO(date);
    }

    return date;
}