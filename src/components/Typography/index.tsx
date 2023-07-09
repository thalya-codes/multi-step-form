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
    const sizes = {
        xs: "text-sm",
        sm: "text-lg",
        md: "text-3xl",
        lg: "text-4xl"
    };
    const colors = {
        secondary: "opacity-80",
        danger: "text-red-500",
    };

    return (
        <TagName 
        {...htmlFor && {htmlFor: htmlFor}}
        className={`
            tracking-wide     
            ${color !== undefined ? colors[color] : ""}
            ${weight === "bold" ? "font-bold" : "font-extralight"}
            ${sizes[size]}
            ${className}
        `}
        >
            {children}
        </TagName>
    )
}