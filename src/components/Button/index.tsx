import {PropsWithChildren} from "react";
import IPropsButton from "../../interfaces/IPropsButton";

export default function Button({ children, onClickFunc, hasBackground = false }: PropsWithChildren<IPropsButton>) {

    return (
        <button 
         className={`
            font-poppins font-medium text-neutral-50 
            tracking-wider transition-all p-3 min-w-[13rem]
            focus:ring-2 outline-none rounded-full focus:ring-emerald-100
            focus:shadow-xl focus:shadow-emerald-500            
            ${hasBackground ? `transition-all hover:bg-emerald-600 bg-emerald-500`: "text-lg hover:opacity-80 text-center"    
            }
         `}
         onClick={() => onClickFunc()}
        >
            {children}
        </button>
    )
}