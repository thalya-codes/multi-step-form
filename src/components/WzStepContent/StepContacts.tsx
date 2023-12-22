import { useFormContext } from "../../context/FormContext";
import { FormGroup } from "../FormGroup";
import { WzStepContentHeader } from "../WzStepContentHeader";
import { useTranslation } from "react-i18next";

export function StepContacts() {
  const { firstName } = useFormContext();
  const { t: translation } = useTranslation();

   return (
    <div className="w-full">
      <WzStepContentHeader
        title={translation("steps.Cool {{developerFirstName}}, where do we find you?", { developerFirstName: firstName })}
        subTitle={translation("steps.Fill in the fields below with your contacts")}
      />

      <div className="flex flex-col gap-5">
        <FormGroup
          label={translation("steps.What is your email address?")}
          placeholder="email@email.com"
          inputId="form-group--email"
          inputType="email"
          name="email"
        />
        <FormGroup
          label={translation("steps.What is your GitHub?")}
          inputId="form-group--github"
          name="github"
          placeholder={translation("steps.www.github.com/your-username")}
        />
      </div>
    </div>
  );
}