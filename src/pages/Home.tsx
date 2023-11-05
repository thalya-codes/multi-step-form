import { Wizard } from "../components/Wizard";
import { IWzStepData } from "../interfaces/IWzStep";
import { StepPersonalInfos } from "../components/WzStepContent/StepPersonalInfos";
import { StepProfessionalXP } from "../components/WzStepContent/StepProfessionalXP";
import { StepContacts } from "../components/WzStepContent/StepContacts";
import { ReactSVG } from "react-svg"
import ProfileIcon from "../assets/profile.svg";
import BookIcon from "../assets/book.svg";
import EmailIcon from "../assets/mail.svg";
import CheckMark from "../assets/check-mark.svg";
import HeadingGroup from "../components/HeadingGroup";
import { StepSummary } from "../components/WzStepContent/StepSummary";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t: translation } = useTranslation();

  const steps: IWzStepData[] = [
    {title: translation('general.Personal'), subTitle: translation('general.Identify yourself') , stepNumber: 1,  icon: <ReactSVG src={ProfileIcon}/>, content: StepPersonalInfos},
    {title: translation("general.Professional"), subTitle: translation("general.Your level"), stepNumber: 2,  icon: <ReactSVG src={BookIcon}/>, content: StepProfessionalXP},
    {title: translation("general.Contacts"), subTitle: translation("general.How to find you") , stepNumber: 3,  icon: <ReactSVG src={EmailIcon}/>, content: StepContacts},
    {title: translation("general.Summary"), subTitle: translation("general.Confirm your data") , stepNumber: 4,  icon: <ReactSVG src={CheckMark}/>, content: StepSummary}
  ];

  return (
    <div className="flex flex-col gap-24 w-11/12 mt-5">
      <header>
        <HeadingGroup 
          title={{as: "h1", size: "xl", text: translation("general.Developer Registration")}}
          subTitle={{as: "h2", text: translation("general.Register on the list and receive a job instantly")}}
        />    
      </header>
      
      <form className="w-[90vw] justify-center items-center flex gap-10 md:w-[80vw] mb-10">
        <Wizard steps={steps} />
      </form>
    </div>
  );
};