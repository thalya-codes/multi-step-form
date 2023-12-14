import { createContext, useContext, useState } from "react";
import { IFormFields } from "../interfaces/IFormFields";
import { IFormContext, IFormContextProviderProp } from "../interfaces/IFormContext";
import { initialValues } from "./initialValues";
import { useValidation } from "../hook/useValidation";

const FormContext = createContext({} as IFormContext);

export function FormProvider({ children }: IFormContextProviderProp) {
    const [formValues, setFormValues] = useState<IFormFields>(initialValues.values);
    const [activeStep, setActiveStep] = useState(initialValues.activeStep);
    const { errors, validateField } = useValidation();    
    const firstName = formValues.fullname.split(' ')[0];

    return (
        <FormContext.Provider value={{ formValues, setFormValues, activeStep, setActiveStep, validateField, errors, firstName }}>
            {children}
        </FormContext.Provider>
    )
};

export function useFormContext() {
    return useContext(FormContext);
};