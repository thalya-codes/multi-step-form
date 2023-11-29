import { useTranslation } from "react-i18next";

export function useErrorMessage(): typeof ErrorsMgs {
    const { t: translation } = useTranslation();

    const ErrorsMgs ={  
        fullname: translation("steps.Please, enter your full name"),
        email:  translation("steps.Email format is invalid!"),
        github:  translation("steps.The given address is incomplete or not from GitHub!"),
        emptyField:  translation("general.The field cannot be empty!"),
    };

    return ErrorsMgs;
}