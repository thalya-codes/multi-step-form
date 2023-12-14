import { IFieldNamesByStep } from "./IFieldNamesByStep";

export interface IWzStep {
    title: string;
    subTitle: string;
    stepNumber: number;
    icon: any;
}

export interface IWzStepData extends IWzStep {
    content: any;
};