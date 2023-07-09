import { useState } from "react";
import Typography from "../Typography";
import { IFormGroupProps } from "../../interfaces/IFormGroup";

export function FormGroup({ label, inputType = "text", inputId, placeholder }: IFormGroupProps) {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-2 w-full">
      <Typography as="label" htmlFor={inputId}>{label}</Typography>
     
     <input
        type={inputType}
        className="pl-3 h-12 border-2 border-emerald-500 outline-none bg-main-blue rounded-md"
        placeholder={placeholder}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
    </div>
  );
}
