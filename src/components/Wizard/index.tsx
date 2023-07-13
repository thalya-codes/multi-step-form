import Button from "../Button";
import { IWizardProps } from "../../interfaces/IWizard";

export function Wizard({ steps, activeStep, stepContent, setActiveStep }: IWizardProps) {
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
            {steps}

            <div className="flex flex-col min-h-[35vw] justify-between">
                {stepContent}

                <div>
                    <Button onClickFunc={prevStep} disabled={activeStep === 1}>Voltar</Button>

                    {
                    activeStep === 4 ? 
                        <Button onClickFunc={completeRegister} hasBackground>Concluir cadastro</Button> 
                      : <Button onClickFunc={nextStep} disabled={activeStep === 4} hasBackground>Próximo</Button>
                    }
                </div>
            </div>
        </div>
    )
}