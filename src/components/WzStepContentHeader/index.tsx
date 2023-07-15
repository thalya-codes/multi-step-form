import { IWzStepContentHeaderProps } from "../../interfaces/IWzStepContentHeader";
import HeadingGroup from "../HeadingGroup";
import Typography from "../Typography";

export function WzStepContentHeader({ title, subTitle, activeStep }: IWzStepContentHeaderProps) {
  return (
    <div className="flex flex-col gap-5">
      <Typography as="span" color="secondary" size="xs">Passo {activeStep}/4</Typography>

      <HeadingGroup 
        title={{as: "h3", size: "md", text: title}} 
        subTitle={{as: "h4", text: subTitle}}
      />
      <hr className="border-spacing-px opacity-20 mt-2 mb-8"/>
    </div>
  );
};