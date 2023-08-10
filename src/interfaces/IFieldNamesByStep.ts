import { TFieldNamesToValidate } from "./IUseValidation";

export interface IFieldNamesByStep {
    [key: number]: TFieldNamesToValidate | TFieldNamesToValidate[];
}