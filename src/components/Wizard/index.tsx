import { useState } from "react";
import { WzStep } from "../WzStep";
import { IWizardProps } from "../../interfaces/IWizard";
import { IWzStepData } from "../../interfaces/IWzStep";
import Button from "../Button";

export function Wizard({ steps }: IWizardProps) {
    const [activeStep, setActiveStep] = useState(1); 
    const StepContent = steps[activeStep - 1].content;

    const nextStep = (): void =>  setActiveStep(activeStep + 1);

    const prevStep = (): void => {
        if (activeStep === 1) return;
        setActiveStep(activeStep - 1);
    };

    const completeRegister = (): void => {
        console.log('completeRegister')
    };

    return (
        <div className="flex gap-12">
            <aside>
                <ul className="flex flex-col gap-8">
                    {steps.map(({ icon, stepNumber, subTitle, title }: IWzStepData) => (
                        <li key={title}>
                            <WzStep 
                                title={title} 
                                subTitle={subTitle} 
                                stepNumber={stepNumber} 
                                icon={icon} 
                                isActive={activeStep === stepNumber} 
                                setActiveStep={setActiveStep}
                            />
                        </li>                    
                    ))}
                </ul>
            </aside>

            <div className="flex flex-col min-h-[35vw] justify-between">
                {<StepContent activeStep={activeStep}/>}

                <div>
                    <Button onClickFunc={prevStep} disabled={activeStep === 1}>Voltar</Button>

                    {
                        activeStep === 4 ? 
                          <Button onClickFunc={completeRegister} hasBackground>Concluir cadastro</Button> //submit form
                        : <Button onClickFunc={nextStep} disabled={activeStep === 4} hasBackground>Próximo</Button>
                    }
                </div>
            </div>
        </div>
    );
}