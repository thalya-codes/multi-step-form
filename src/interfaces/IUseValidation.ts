import { IFieldNamesByStep } from "./IFieldNamesByStep";
import { IFormFields } from "./IFormFields";

export type TFieldNamesToValidate = "fullname" | "email" | "github";

export interface IValidateFieldParams {
    name: TFieldNamesToValidate;
    value: string;
};

export interface IValidatePrevStepsParams {
    stepNumber: number;
    fieldNamesByStep: IFieldNamesByStep;
    formValues: IFormFields
}