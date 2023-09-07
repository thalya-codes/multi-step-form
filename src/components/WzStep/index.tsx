import HeadingGroup from "../HeadingGroup";
import { IWzStepProps } from "../../interfaces/IWzStep";
import { useFormContext } from "../../context/FormContext";
import { useEffect, useState } from 'react';
import { TFieldNamesToValidate } from "../../interfaces/IUseValidation";

enum StepStatusClasses {
  active = "bg-emerald-400",
  invalid = "bg-red-400",
  default = "bg-slate-600"
};

export function WzStep({
  title,
  subTitle,
  stepNumber,
  icon,
  fieldNamesByStep
}: IWzStepProps) {
  const { activeStep, setActiveStep, formValues, validatePrevSteps, errors } = useFormContext();
  const [stepStatus, setStepStatus] = useState<'active' | 'default' | 'invalid'>('default');
  const [fieldsNameWithError, setFieldsNameWithError] = useState([] as TFieldNamesToValidate[]);

  const handleStepClick = (): void => {
    const prevFieldsAreValid: boolean | null = validatePrevSteps({ stepNumber, fieldNamesByStep, formValues });
    const jumpToPrevStep: boolean = stepNumber < activeStep;

    if (jumpToPrevStep) setActiveStep(stepNumber);

    else if (!prevFieldsAreValid) return;

    setActiveStep(stepNumber);
  };

  const defineStepStatus = (): void => {
    const hasError: boolean = ((stepNumber === 1 &&  fieldsNameWithError.some(field => field === "fullname"))) || (stepNumber === 3 &&  fieldsNameWithError.some(field => (field === "github" || field === "email")));
    const isActive: boolean = activeStep === stepNumber && !hasError;

    if (hasError) { setStepStatus("invalid"); return };

    if (isActive) { setStepStatus("active"); return };
   
    setStepStatus("default");
  };

  useEffect(() => {
    const fieldsWithError: TFieldNamesToValidate[] = Object.entries(errors).flatMap(([key, value]) => {
      if (value !== '' && value !== null) return key;
      else return null
    }).filter(key => key !== null) as TFieldNamesToValidate[];

    setFieldsNameWithError(fieldsWithError);
  }, [errors])

  useEffect(() => {
    defineStepStatus();
  }, [activeStep, errors, fieldsNameWithError]);

  return (
    <div
      className="flex items-center gap-8 justify-end text-end md:text-center md:flex-col-reverse md:gap-4 md:w-[80vw]"
      onClick={handleStepClick}
    >
      <HeadingGroup 
        title={{as: "h3", size: "sm", text: title}}
        subTitle={{as: "h4", text: subTitle}}            
      />     

      <div className={`flex justify-center items-center ${StepStatusClasses[stepStatus]} rounded-full w-16 h-16 p-4`}>
        <i className="w-8 fill-white">{icon}</i>
      </div>
    </div>
  );
}