import HeadingGroup from "../HeadingGroup";
import { IWzStepProps } from "../../interfaces/IWzStep";

export function WzStep({
  title,
  subTitle,
  stepNumber,
  icon,
  isActive,
  setActiveStep,
}: IWzStepProps) {
  return (
    <div
      className="flex gap-8 justify-end text-end"
      onClick={() => setActiveStep(stepNumber)}
    >
      <HeadingGroup 
        title={{as: "h3", size: "sm", text: title}}
        subTitle={{as: "h4", text: subTitle}}            
      />     

      <div className={`flex justify-center items-center ${isActive ? "bg-emerald-400" : "bg-slate-600"} rounded-full w-16 h-16`}>
        <i className="w-8 fill-white">{icon}</i>
      </div>
    </div>
  );
}
