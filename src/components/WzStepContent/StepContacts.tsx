import { FormGroup } from "../FormGroup";
import { WzStepContentHeader } from "../WzStepContentHeader";

export function StepContacts({ activeStep }: { activeStep: number }) {
  const fullname = "Thalya";

  return (
    <div className="w-[70vw]">
      <WzStepContentHeader
        title={`Legal ${fullname}, onde te achamos?`}
        subTitle="Preencha com seus contados para conseguirmos entrar em contato"
        activeStep={activeStep}
      />

      <div className="flex flex-col gap-5">
        <FormGroup
          label="Qual é seu e-mail?"
          placeholder="email@email.com"
          inputId="form-group--email"
          inputType="email"
        />
        <FormGroup
          label="Qual seu GitHub?"
          inputId="form-group--github"
        />
      </div>
    </div>
  );
}