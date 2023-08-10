import Button from "../Button";
import { WzStep } from "../WzStep";
import { IWizardProps } from "../../interfaces/IWizard";
import { IWzStepData } from "../../interfaces/IWzStep";
import { useFormContext } from "../../context/FormContext";
import { TFieldNamesToValidate } from "../../interfaces/IUseValidation";
import { IFieldNamesByStep } from "../../interfaces/IFieldNamesByStep";

export function Wizard({ steps }: IWizardProps) {
    const { formValues, activeStep, setActiveStep, validateField } = useFormContext();
    const StepContent = steps[activeStep - 1].content;
    
    const fieldNamesByStep: IFieldNamesByStep = {
        1: 'fullname',
        3: ['email', 'github']  
    };

    const handleNextStep = (stepNumber?: number): void => {
        const names: TFieldNamesToValidate | TFieldNamesToValidate[] = fieldNamesByStep[activeStep];
        let fieldIsValid: boolean | null = null;

        if (Array.isArray(names)) {
            fieldIsValid = names.map(name => validateField({ name, value: formValues[name]})).every((isValid: boolean) => isValid);
        }

        else fieldIsValid = validateField({ name: names, value: formValues[names] });

        if (fieldIsValid && activeStep <= 3) setActiveStep(stepNumber || activeStep + 1);
    }

    const handlePrevStep = (): void => {
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
                                icon={icon} 
                                stepNumber={stepNumber} 
                                handleNextStep={handleNextStep}
                            />
                        </li>                    
                    ))}
                </ul>
            </aside>

            <div className="flex flex-col min-h-[35vw] justify-between">
                {<StepContent activeStep={activeStep}/>}

                <div>
                    <Button onClickFunc={handlePrevStep} disabled={activeStep === 1}>Voltar</Button>

                    {
                        activeStep === 4 ? 
                          <Button onClickFunc={completeRegister} hasBackground>Concluir cadastro</Button> //submit form
                        : <Button onClickFunc={handleNextStep} disabled={activeStep === 4} hasBackground>Próximo</Button>
                    }
                </div>
            </div>
        </div>
    );
}