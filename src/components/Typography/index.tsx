import {PropsWithChildren} from "react";
import ITypographyProps from "../../interfaces/ITypography";

export default function Typography({
    htmlFor,
    as: TagName = "p", 
    color, 
    weight = "extralight",
    size = "sm", 
    children,
    className = ""
}: PropsWithChildren<ITypographyProps>) {
    enum Sizes {
        xs = "text-sm",
        sm = "text-lg",
        md = "text-3xl",
        lg = "text-4xl"
    };
    
    enum Colors {
        secondary = "opacity-80",
        danger = "text-red-500",
    };

    return (
        <TagName 
        {...htmlFor && {htmlFor: htmlFor}}
        className={`
            tracking-wide     
            ${color ? Colors[color] : ""}
            ${weight === "bold" ? "font-bold" : "font-extralight"}
            ${Sizes[size]}
            ${className}
        `}
        >
            {children}
        </TagName>
    )
}