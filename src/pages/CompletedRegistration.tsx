import Typography from "../components/Typography";
import { useEffect } from "react"; 
import { IPageCompletedRegistrationProps } from "../interfaces/IPageCompletedRegistration";
import { useTranslation } from "react-i18next";
import { ContentTransition } from "../components/ContentTransition";

export default function CompletedRegistration({ pageTitle ,setPageTitle }: IPageCompletedRegistrationProps) {
    const { t: translation, i18n: { language } } = useTranslation();
    
    useEffect(() => { 
        setPageTitle(
            translation(
                "general.{{developerRegistration}} - Registration successfully concluded", 
                { developerRegistration: pageTitle }
            )
        );
    }, [language]);

    return (
        <ContentTransition className="flex flex-col justify-center items-center h-screen gap-4">             
            <Typography as="h1" size="xl">
                {translation("general.Your registration was successful!")}
            </Typography>

            <Typography as="h3" size="md">
                {translation("general.Soon you will start receiving amazing vacancies in your email.")}
            </Typography>
        </ContentTransition>
    );
};