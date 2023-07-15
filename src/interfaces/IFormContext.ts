import { Dispatch, SetStateAction } from "react";
import { IFormFields } from "./IFormFields";

export interface IFormContext {
    formValues: IFormFields;
    setFormValues: Dispatch<SetStateAction<IFormFields>>;
}