import Typography from "../components/Typography";
import { useEffect } from "react"; 
import { useTranslation } from "react-i18next";
import { ContentTransition } from "../components/ContentTransition";

export default function CompletedRegistration() {
    const { t: translation, i18n: { language } } = useTranslation();
    
    useEffect(() => { 
        document.title = translation(
            "general.{{developerRegistration}} - Registration successfully concluded", 
            { developerRegistration: translation("general.Developer Registration")}
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