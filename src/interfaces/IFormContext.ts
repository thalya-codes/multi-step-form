import { Dispatch, SetStateAction, ReactNode } from "react";
import { IFormFields } from "./IFormFields";
import { IFormErrors, IValidateFieldParams } from "./IUseValidation";

export interface IFormContext {
    formValues: IFormFields;
    errors: IFormErrors;
    activeStep: number;
    setFormValues: Dispatch<SetStateAction<IFormFields>>;
    setActiveStep: Dispatch<SetStateAction<number>>;
    validateField: ({ name, value }: IValidateFieldParams) => boolean;
}

export interface IFormContextProviderProp {
    children: ReactNode;
}