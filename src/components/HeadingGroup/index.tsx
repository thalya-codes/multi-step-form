import Typography from "../Typography";
import IHeadingGroupProps from "../../interfaces/IHeadingGroup";

export default function HeadingGroup({title, subTitle, gapSize = "sm"}: IHeadingGroupProps) {
    return (
        <div className={`flex flex-col ${gapSize === "sm" ? "gap-2" : "gap-5"}`}>
            <Typography as={title.as} weight="bold" size={title.size}>{title.text}</Typography>
            <Typography as={subTitle.as} color="secondary">{subTitle.text}</Typography>
        </div>
    )
}