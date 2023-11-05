import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CompletedRegistration from "../pages/CompletedRegistration";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export function Router() {
    const { t: translation } = useTranslation();
    const [pageTitle, setPageTitle] = useState<string>(translation("general.Developer Registration"));
    
    useEffect(() => { 
        document.title = pageTitle;
    }, [pageTitle]);
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route 
                    path="/completed-registration" 
                    element={<CompletedRegistration pageTitle={pageTitle} setPageTitle={setPageTitle} />}
                />
            </Routes>
        </BrowserRouter>
    )
}