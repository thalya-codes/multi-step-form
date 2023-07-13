import { Dispatch, SetStateAction, ReactElement } from "react";

export interface IWizardProps {
    steps: any;
    activeStep: number;
    stepContent: ReactElement<HTMLHeadingElement | HTMLElement>
    setActiveStep: Dispatch<SetStateAction<number>>;
}