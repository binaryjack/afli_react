type PValidationMessage = {
    errorNumber: number;
    message: string;
    validMessage: string;
    hasHint: boolean;
    // set is value or undefined
    isValid?: boolean;
    rule: string;
}

export default PValidationMessage;

