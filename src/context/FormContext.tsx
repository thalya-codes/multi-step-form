import {  ReactNode, createContext, useContext, useState } from "react";
import { IFormFields } from "../interfaces/IFormFields";
import { IFormContext } from "../interfaces/IFormContext";

const FormContext = createContext({} as IFormContext);

export function FormProvider({children}:{children: ReactNode}) {
    const [formValues, setFormValues] = useState<IFormFields>({
        fullname: "",
        email: "",
        xp: "beginner",
        github: ""
    });
  
    return (
        <FormContext.Provider value={{formValues, setFormValues}}>
            {children}
        </FormContext.Provider>
    )
}

export function useFormContext() {
    return useContext(FormContext);
};