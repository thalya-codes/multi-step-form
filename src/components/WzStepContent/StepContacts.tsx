import { useFormContext } from "../../context/FormContext";
import { FormGroup } from "../FormGroup";
import { WzStepContentHeader } from "../WzStepContentHeader";

export function StepContacts() {
  const { formValues: { fullname } } = useFormContext();

   return (
    <div className="w-full">
      <WzStepContentHeader
        title={`Legal ${fullname}, onde te achamos?`}
        subTitle="Preencha com seus contados para conseguirmos entrar em contato"
      />

      <div className="flex flex-col gap-5">
        <FormGroup
          label="Qual é seu e-mail?"
          placeholder="email@email.com"
          inputId="form-group--email"
          inputType="email"
          name="email"
        />
        <FormGroup
          label="Qual seu GitHub?"
          inputId="form-group--github"
          name="github"
        />
      </div>
    </div>
  );
}