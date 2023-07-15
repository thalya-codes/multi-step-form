import { FormGroup } from "../FormGroup";
import { WzStepContentHeader } from "../WzStepContentHeader";

export function StepPersonalInfos({ activeStep }: { activeStep: number }) {
   return (
    <div className="w-[70vw]">
      <WzStepContentHeader
        title="Vamos começar com seu nome"
        subTitle="Preecha o campo abaixo com seu nome completo"
        activeStep={activeStep}
      />
      <FormGroup
        label="Seu nome completo"
        placeholder="Digite aqui o seu nome completo"
        inputId="form-group--fullname"
        fieldName="fullname"
      />
    </div>
  );
}
