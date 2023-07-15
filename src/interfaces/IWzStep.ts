import { Dispatch, SetStateAction } from "react";

export interface IWzStep {
    title: string;
    subTitle: string;
    stepNumber: number;
    icon: any;
};

export interface IWzStepProps extends IWzStep {
    isActive: boolean;
    setActiveStep: Dispatch<SetStateAction<number>>;
};

export interface IWzStepData extends IWzStep {
    content: any;
}