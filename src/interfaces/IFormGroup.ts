import { TFormFields } from "./IFormFields";

export interface IFormGroupProps {
    label: string;
    inputType?: "text" | "email" | "radio";
    inputId: string;
    placeholder?: string;
    fieldName: TFormFields;
}