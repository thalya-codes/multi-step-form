import { useTranslation } from "react-i18next";
import { FormGroup } from "../FormGroup";
import  {WzStepContentHeader}  from "../WzStepContentHeader";

export function StepPersonalInfos() {
  const { t: translation } = useTranslation();

  return (
    <div className="w-full">
      <WzStepContentHeader
        title={translation("steps.Let’s start with your name")}
        subTitle={translation("steps.Fill in the field below with your full name")}
      />
      
      <FormGroup
        label={translation("steps.Your full name")}
        placeholder={translation("steps.Your full name")}
        inputId="form-group--fullname"
        name="fullname"
      />
    </div>
  );
}
