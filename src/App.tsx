import { Wizard } from "./components/Wizard";
import { IWzStepData } from "./interfaces/IWzStep";
import { StepPersonalInfos } from "./components/WzStepContent/StepPersonalInfos";
import { StepProfessionalXP } from "./components/WzStepContent/StepProfessionalXP";
import { StepContacts } from "./components/WzStepContent/StepContacts";
import { ReactSVG } from "react-svg"
import ProfileIcon from "./assets/profile.svg";
import BookIcon from "./assets/book.svg";
import EmailIcon from "./assets/mail.svg";
import HeadingGroup from "./components/HeadingGroup";

function App() {
  const steps: IWzStepData[] = [
    {title: "Pessoal", subTitle: "Se identifique" , stepNumber: 1,  icon: <ReactSVG src={ProfileIcon}/>, content: StepPersonalInfos},
    {title: "Profissional", subTitle: "Seu nível" , stepNumber: 2,  icon: <ReactSVG src={BookIcon}/>, content: StepProfessionalXP},
    {title: "Contatos", subTitle: "Como te achar" , stepNumber: 3,  icon: <ReactSVG src={EmailIcon}/>, content: StepContacts}
  ];

  return (
    <div className="flex flex-col gap-24 w-11/12 mt-5">
      <header>
        <HeadingGroup 
          title={{as: "h1", size: "xl", text: "Cadastro de Desenvolvedor"}}
          subTitle={{as: "h2", text: "Faça seu cadastro na lista e receba um emprego instantaneamente"}}
        />    
      </header>
      
      <form className="w-[90vw] justify-center items-center flex gap-10 md:w-[80vw]">
        <Wizard steps={steps} />
      </form>
    </div>
  );
}

export default App;