import { Wizard } from "./components/Wizard";
import { IWzStepData } from "./interfaces/IWzStep";
import { StepPersonalInfos } from "./components/WzStepContent/StepPersonalInfos";
import { StepProfessionalXP } from "./components/WzStepContent/StepProfessionalXP";
import { StepContacts } from "./components/WzStepContent/StepContacts";
import { ReactSVG } from "react-svg"
import ProfileIcon from "./assets/profile.svg";
import BookIcon from "./assets/book.svg";
import EmailIcon from "./assets/mail.svg";

function App() {
  const steps: IWzStepData[] = [
    {title: "Pessoal", subTitle: "Se identifique" , stepNumber: 1,  icon: <ReactSVG src={ProfileIcon}/>, content: StepPersonalInfos},
    {title: "Profissional", subTitle: "Seu nível" , stepNumber: 2,  icon: <ReactSVG src={BookIcon}/>, content: StepProfessionalXP},
    {title: "Contatos", subTitle: "Como te achar" , stepNumber: 3,  icon: <ReactSVG src={EmailIcon}/>, content: StepContacts}
  ];

  return (
    <form className="w-screen h-screen justify-center items-center flex gap-10 mt-14">
      <Wizard steps={steps} />
    </form>
  );
}

export default App;