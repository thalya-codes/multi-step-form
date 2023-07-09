import { THeadingTags } from "./IHeadingGroup";

export type TTypographySizes = "xs" | "sm" | "md" | "lg";

export default interface ITypographyProps {    
    as: THeadingTags | "p" | "span" | "label";
    color?: "secondary" | "danger";
    weight?: "extralight" | "bold";
    size?: TTypographySizes;
    htmlFor?: string;
    className?: string;
}