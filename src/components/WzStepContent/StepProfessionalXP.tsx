import { useFormContext } from "../../context/FormContext";
import HeadingGroup from "../HeadingGroup";
import Typography from "../Typography";
import  { WzStepContentHeader } from "../WzStepContentHeader";

export function StepProfessionalXP() {
  const { formValues, setFormValues }  = useFormContext();
  
  return (
    <div className="w-full">
      <WzStepContentHeader
        title={`${formValues.fullname}, o que melhor descreve você?`}
        subTitle=" Escolha a opção que melhor condiz com seu estado atual, profissionalmente"
      />

      <div  
        className={`flex gap-5 w-10/12 border-2 ${formValues.xp === "beginner" ? "border-emerald-500" : "border-zinc-500" } bg-main-blue rounded-md p-5 mb-5 md:w-full`}
        onClick={() => setFormValues({...formValues, xp: "beginner"})}
      >
        <Typography 
          as="span" 
          className="flex justify-center items-center rounded-full bg-secondary-blue p-2 text-xl h-14 w-14"
        >🥳</Typography>
        
        <HeadingGroup title={{as: "h5", size: "sm", text: "Sou iniciante"}} subTitle={{as: "h6", text: "Comecei a programar há menos de 2 anos"}} />
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
          title={{as: "h5", text: "Sou programador", size:"sm"}}
          subTitle={{as: "h6", text: "Já programo há 2 anos ou mais"}}
        />
      </div>
    </div>
  );
}