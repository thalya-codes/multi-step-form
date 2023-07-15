import HeadingGroup from "../HeadingGroup";
import Typography from "../Typography";
import { WzStepContentHeader } from "../WzStepContentHeader";

export function StepProfessionalXP({ activeStep }: { activeStep: number }) {
  const developerInfos = {
    name: "Thalya",
    xp: "beginner",
    updateDevelopeInfos(newValue: object) {}
  }

  return (
    <div className="w-[70vw]">
      <WzStepContentHeader
        title={`${developerInfos.name}, o que melhor descreve você?`}
        subTitle=" Escolha a opção que melhor condiz com seu estado atual, profissionalmente"
        activeStep={activeStep}
      />

      <div  
        className={`flex gap-5 border-2 ${developerInfos.xp === "beginner" ? "border-emerald-500" : "border-zinc-500" } bg-main-blue rounded-md p-5 mb-5`}
        onClick={() => developerInfos.updateDevelopeInfos({...developerInfos, xp: "beginner"})}
      >
        <Typography 
          as="span" 
          className="flex justify-center items-center rounded-full bg-secondary-blue p-2 text-xl h-14 w-14"
        >🥳</Typography>
        
        <HeadingGroup title={{as: "h5", size: "sm", text: "Sou iniciante"}} subTitle={{as: "h6", text: "Comecei a programar há menos de 2 anos"}} />
      </div>

      <div
        className={`flex gap-5 border-2 border-emerald-500 bg-main-blue rounded-md p-5 ${developerInfos.xp === "programmer" ? "border-emerald-500" : "border-zinc-500" }`}
        onClick={() => developerInfos.updateDevelopeInfos({...developerInfos, xp: "programmer"})}
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