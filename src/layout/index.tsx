import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Layout() {
    const { i18n: { changeLanguage, language } } = useTranslation();

    const handleOnChange = (): void => {
        changeLanguage(language === 'pt' ? 'en' : 'pt');
    };

    return (
        <div className="w-screen h-screen flex flex-col items-center mr-3">
            <div 
                className={`mt-5 self-end bg-white shadow-xl shadow-emerald-500  rounded-full justify-between w-40 flex gap-3 relative py-2 px-4 before:left-0 before:rounded-full transition-left before:duration-[1s] before:bg-emerald-500 ${language === 'pt' ? 'before:left-0' : 'before:left-1/2'} before:w-1/2 before:h-full before:absolute before:top-0`}
            >
                <label 
                    htmlFor="language-swicther" 
                    className={`${language !== 'pt' ? 'text-slate-500': ''} transition-color duration-[800ms] font-bold relative z-1 cursor-pointer`}
                >
                    pt-BR
                </label>

                <label 
                    htmlFor="language-swicther" 
                    className={`${language !== 'en' ? 'text-slate-500': ''} transition-color duration-[800ms] font-bold relative z-1 cursor-pointer`}
                >
                    en-US
                </label>

                <input 
                    id="language-swicther" 
                    type="checkbox" 
                    className="absolute z-2 top-0 left-0 w-full h-full hidden py-2 px-4" 
                    value={language} 
                    onChange={handleOnChange} 
                />
            </div>
            
            <Outlet />
        </div>
    );
}