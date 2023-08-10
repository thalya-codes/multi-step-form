export type TFieldNamesToValidate = "fullname" | "email" | "github";

export interface IValidateFieldParams {
    name: TFieldNamesToValidate;
    value: string;
};

export interface IFormErrors {
    fullname: string | null;
    email: string | null;
    github: string | null;
}