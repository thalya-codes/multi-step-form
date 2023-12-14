import { Dispatch, SetStateAction, ReactNode } from "react";
import { IFormFields } from "./IFormFields";
import { IValidateFieldParams, TFieldNamesToValidate } from "./IUseValidation";

export interface IFormContext {
    formValues: IFormFields;
    firstName: string;
    errors: Set<TFieldNamesToValidate>;
    activeStep: number;
    setFormValues: Dispatch<SetStateAction<IFormFields>>;
    setActiveStep: Dispatch<SetStateAction<number>>;
    validateField: ({ name, value }: IValidateFieldParams) => boolean;
}

export interface IFormContextProviderProp {
    children: ReactNode;
}