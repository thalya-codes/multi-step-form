export interface IWzStep {
    title: string;
    subTitle: string;
    stepNumber: number;
    icon: any;
};

export interface IWzStepProps extends IWzStep {
    handleNextStep: (stepNumber: number) => void;
};

export interface IWzStepData extends IWzStep {
    content: any;
}