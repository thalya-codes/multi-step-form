import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CompletedRegistration from "../pages/CompletedRegistration";
import { Layout } from "../layout";

export function Router() {   
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route 
                        path="/completed-registration" 
                        element={<CompletedRegistration />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};