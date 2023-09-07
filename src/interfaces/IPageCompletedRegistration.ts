import { Dispatch, SetStateAction } from "react";

export interface IPageCompletedRegistrationProps {
    pageTitle: string;
    setPageTitle: Dispatch<SetStateAction<string>>
};