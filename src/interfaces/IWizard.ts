import { Dispatch, SetStateAction, ReactElement } from "react";
import { IWzStepData } from "./IWzStep";

export interface IWizardProps {
    steps: IWzStepData[];
}