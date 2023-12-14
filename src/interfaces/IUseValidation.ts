export type TFieldNamesToValidate = "fullname" | "email" | "github";

export interface IValidateFieldParams {
    name: TFieldNamesToValidate;
    value: string;
};