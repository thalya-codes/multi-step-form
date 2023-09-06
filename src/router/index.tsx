import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CompletedRegistration from "../pages/CompletedRegistration";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/completed-registration" element={<CompletedRegistration />}/>
            </Routes>
        </BrowserRouter>
    )
}