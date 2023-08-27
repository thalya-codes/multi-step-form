import { Dispatch, SetStateAction, ReactNode } from "react";
import { IFormFields } from "./IFormFields";
import { IFormErrors, IValidateFieldParams, IValidatePrevStepsParams } from "./IUseValidation";

export interface IFormContext {
    formValues: IFormFields;
    errors: IFormErrors;
    activeStep: number;
    setFormValues: Dispatch<SetStateAction<IFormFields>>;
    setActiveStep: Dispatch<SetStateAction<number>>;
    validateField: ({ name, value }: IValidateFieldParams) => boolean;
    validatePrevSteps: ({ stepNumber, fieldNamesByStep, formValues }: IValidatePrevStepsParams) => boolean | null;
}

export interface IFormContextProviderProp {
    children: ReactNode;
}