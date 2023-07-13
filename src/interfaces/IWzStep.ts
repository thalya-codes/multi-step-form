import { Dispatch, SetStateAction } from "react";

export interface WzStep {
    title: string;
    subTitle: string;
    stepNumber: number;
    icon: any;
    isActive: boolean;
};

export interface IWzStepProps extends WzStep {
    setActiveStep: Dispatch<SetStateAction<number>>;
};