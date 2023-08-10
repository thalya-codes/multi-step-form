import { FormGroup } from "../FormGroup";
import  {WzStepContentHeader}  from "../WzStepContentHeader";

export function StepPersonalInfos() {
  return (
    <div className="w-[70vw]">
      <WzStepContentHeader
        title="Vamos começar com seu nome"
        subTitle="Preecha o campo abaixo com seu nome completo"
      />
      
      <FormGroup
        label="Seu nome completo"
        placeholder="Digite aqui o seu nome completo"
        inputId="form-group--fullname"
        name="fullname"
      />
    </div>
  );
}
