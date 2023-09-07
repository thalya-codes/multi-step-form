import Typography from "../components/Typography";
import { useEffect } from "react"; 
import { IPageCompletedRegistrationProps } from "../interfaces/IPageCompletedRegistration";

export default function CompletedRegistration({ pageTitle, setPageTitle }: IPageCompletedRegistrationProps) {
    useEffect(() => { setPageTitle(`${pageTitle} - Cadastro concluído`) }, []);

    return (
        <div className="flex flex-col justify-center items-center h-screen gap-4">             
            <Typography as="h1" size="xl">Seu cadastro foi realizado com sucesso!</Typography>
            <Typography as="h3" size="md">Em breve você começará a receber vagas incríveis no seu e-mail.</Typography>
        </div>
    );
};