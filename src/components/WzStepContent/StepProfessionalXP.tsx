import { useTranslation } from "react-i18next";
import { useFormContext } from "../../context/FormContext";
import HeadingGroup from "../HeadingGroup";
import Typography from "../Typography";
import  { WzStepContentHeader } from "../WzStepContentHeader";

export function StepProfessionalXP() {
  const { t: translation } = useTranslation();
  const { firstName, formValues, setFormValues }  = useFormContext();

  return (
    <div className="w-full">
      <WzStepContentHeader
        title={translation("steps.{{developerFirstName}}, what best describes you?", { developerFirstName: firstName })}
        subTitle={translation("steps.Choose the option that best matches your current professional status")}
      />

      <div  
        className={`flex gap-5 w-10/12 border-2 ${formValues.xp === "beginner" ? "border-emerald-500" : "border-zinc-500" } bg-main-blue rounded-md p-5 mb-5 md:w-full`}
        onClick={() => setFormValues({...formValues, xp: "beginner"})}
      >
        <Typography 
          as="span" 
          className="flex justify-center items-center rounded-full bg-secondary-blue p-2 text-xl h-14 w-14"
        >🥳</Typography>
        
        <HeadingGroup 
          title={{as: "h5", size: "sm", text: translation("steps.I'm a beginner")}} 
          subTitle={{as: "h6", text: translation("steps.I started programming less than 2 years ago")}} 
        />
      </div>

      <div
        className={`flex gap-5 w-10/12 border-2 border-emerald-500 bg-main-blue rounded-md p-5 ${formValues.xp === "programmer" ? "border-emerald-500" : "border-zinc-500" } md:w-full`}
        onClick={() => setFormValues({...formValues, xp: "programmer"})}
      >
        <Typography 
          as="span" 
          className="flex justify-center items-center rounded-full bg-secondary-blue p-2 text-xl h-14 w-14"
        >😎</Typography>
        
        <HeadingGroup 
          title={{as: "h5", text: translation("steps.I'm a programmer"), size:"sm"}}
          subTitle={{as: "h6", text: translation("steps.I’ve been programming for 2 years or more")}}
        />
      </div>
    </div>
  );
}