import { IFormFields } from "./IFormFields";
import { IFormErrors } from "./IUseValidation";

export interface IInitialValues {
    values: IFormFields;
    activeStep: number;
    errors: IFormErrors;
};