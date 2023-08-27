import HeadingGroup from "../HeadingGroup";
import { IWzStepProps } from "../../interfaces/IWzStep";
import { useFormContext } from "../../context/FormContext";

export function WzStep({
  title,
  subTitle,
  stepNumber,
  icon,
  fieldNamesByStep
}: IWzStepProps) {
  const { activeStep, setActiveStep, formValues, validatePrevSteps } = useFormContext();
  const isActive = activeStep === stepNumber;

  const handleStepClick = (): void => {
    const prevFieldsAreValid: boolean | null = validatePrevSteps({ stepNumber, fieldNamesByStep, formValues });
    const jumpToPrevStep: boolean = stepNumber < activeStep;

    if (jumpToPrevStep) setActiveStep(stepNumber);

    else if (!prevFieldsAreValid) return;

    setActiveStep(stepNumber);
  };

  return (
    <div
      className="flex items-center gap-8 justify-end text-end md:text-center md:flex-col-reverse md:gap-4 md:w-[80vw]"
      onClick={handleStepClick}
    >
      <HeadingGroup 
        title={{as: "h3", size: "sm", text: title}}
        subTitle={{as: "h4", text: subTitle}}            
      />     

      <div className={`flex justify-center items-center ${isActive ? "bg-emerald-400" : "bg-slate-600"} rounded-full w-16 h-16`}>
        <i className="w-8 fill-white">{icon}</i>
      </div>
    </div>
  );
}