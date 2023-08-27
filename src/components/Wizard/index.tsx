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

    const handleNextStep = (): void => {
        const names: TFieldNamesToValidate | TFieldNamesToValidate[] = fieldNamesByStep[activeStep];
        let fieldIsValid: boolean | null = null;
        
        if (Array.isArray(names)) {
            fieldIsValid = names.map(name => validateField({ name, value: formValues[name] })).every((isValid: boolean) => isValid);
        }

        else fieldIsValid = validateField({ name: names, value: formValues[names] });

        if (fieldIsValid && activeStep <= 3) setActiveStep(activeStep + 1);
    }

    const handlePrevStep = (): void => {
        if (activeStep === 1) return;
        setActiveStep(activeStep - 1);
    };

    const completeRegister = (): void => {
        console.log('completeRegister')
    };

    return (
        <div className="flex gap-12 w-11/12 min-h-[75vh] md:flex-col md:gap-6 md:mb-7">
            <aside>
                <ul className="flex flex-col gap-8">
                    {steps.map(({ icon, stepNumber, subTitle, title }: IWzStepData) => (
                        <li key={title} className={`${activeStep !== stepNumber ? "md:hidden" : ""}`}>
                            <WzStep 
                                title={title} 
                                subTitle={subTitle} 
                                icon={icon} 
                                stepNumber={stepNumber} 
                                fieldNamesByStep={fieldNamesByStep}
                            />
                        </li>                    
                    ))}
                </ul>
            </aside>

            <div className="flex flex-col gap-12 md:mb-7 w-9/12 md:w-[75vw]">
                {<StepContent activeStep={activeStep}/>}

                <div className="flex gap-4 md:flex-col">
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