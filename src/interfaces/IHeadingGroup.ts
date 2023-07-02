import { TTypographySizes } from "./ITypography";

export type THeadingTags =  "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export default interface IHeadingGroupProps {
    title: { text: string, as: THeadingTags, size: TTypographySizes };
    subTitle: { text: string, as: THeadingTags };
    gapSize?: "sm" | "md";    
}