import { useTranslation } from "react-i18next";
import { useFormContext } from "../../context/FormContext";
import { IWzStepContentHeaderProps } from "../../interfaces/IWzStepContentHeader";
import HeadingGroup from "../HeadingGroup";
import Typography from "../Typography";

export function WzStepContentHeader({ title, subTitle }: IWzStepContentHeaderProps) {
  const { activeStep } = useFormContext();
  const { t: translation } = useTranslation();

  return (
    <div className="flex flex-col gap-5 md:w-[80vw]">
      <Typography 
        as="span" 
        color="secondary"
        size="xs">{translation("general.Step {{activeStep}}/4", { activeStep })}
      </Typography>

      <HeadingGroup 
        title={{as: "h3", size: "lg", text: title}} 
        subTitle={{as: "h4", text: subTitle}}
      />
      <hr className="border-spacing-px opacity-20 mt-2 mb-8 w-10/12 md:w-[93%]"/>
    </div>
  );
};