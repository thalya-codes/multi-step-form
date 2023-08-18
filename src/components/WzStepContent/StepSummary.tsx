import { useFormContext } from "../../context/FormContext"
import Typography from "../Typography";
import { WzStepContentHeader } from "../WzStepContentHeader";

export function StepSummary() {
  const { formValues: { fullname, email, github, xp } } = useFormContext();

  return (
    <div className="w-full flex flex-col">
      <WzStepContentHeader
        title="Falta pouco para terminarnos seu cadastro  🤩" 
        subTitle="Revise os dados abaixo e se tiver tudo okay clique em 'concluir cadastro'"
      />

      <div className="mb-6">
        <Typography as="p" weight="bold" size="md">Nome completo</Typography>
        <Typography as="p" size="sm">{fullname}</Typography>
      </div>

      <div className="mb-6">
        <Typography as="p" weight="bold" size="md">Nível de experiência</Typography>
        <Typography as="p" size="sm">{xp === 'beginner' ? 'Iniciante (menos de 2 anos)' : 'Programador (2 anos ou mais)'}</Typography>
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