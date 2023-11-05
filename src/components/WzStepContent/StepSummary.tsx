import { useTranslation } from "react-i18next";
import { useFormContext } from "../../context/FormContext"
import Typography from "../Typography";
import { WzStepContentHeader } from "../WzStepContentHeader";

export function StepSummary() {
  const { formValues: { fullname, email, github, xp } } = useFormContext();
  const { t: translation } = useTranslation();

  return (
    <div className="w-full flex flex-col">
      <WzStepContentHeader
        title={translation("steps.We're almost done completing your registration 🤩")} 
        subTitle={translation("steps.Review the information below and, if everything is correct, click on 'Complete registration'.")}
      />

      <div className="mb-6">
        <Typography as="p" weight="bold" size="md">{translation("steps.Full name")}</Typography>
        <Typography as="p" size="sm">{fullname}</Typography>
      </div>

      <div className="mb-6">
        <Typography as="p" weight="bold" size="md">{translation("steps.Experience level")}</Typography>
        <Typography
          as="p" 
          size="sm">
            {xp === 'beginner' 
              ? translation("steps.Beginner (less than 2 years)") 
              : translation("steps.Programmer (2 years or more)")
            }
        </Typography>
      </div>

      <div className="mb-6">
        <Typography as="p" weight="bold" size="md">Email</Typography>
        <Typography as="p" size="sm">{email}</Typography>
      </div>
      
      <div>
        <Typography as="p" weight="bold" size="md">GitHub</Typography>
        <Typography as="p" size="sm">{github}</Typography>
      </div>      
    </div>
  );
};