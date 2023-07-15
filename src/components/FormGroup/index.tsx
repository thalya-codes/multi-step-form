import { useEffect, useState } from "react";
import { useFormContext } from "../../context/FormContext";
import { IFormGroupProps } from "../../interfaces/IFormGroup";
import { IFormFields } from "../../interfaces/IFormFields";
import Typography from "../Typography";

export function FormGroup({ label, inputType = "text", inputId, placeholder, fieldName }: IFormGroupProps) {
  const [value, setValue] = useState("");
  const { setFormValues } = useFormContext();

  useEffect(() => {
    setFormValues((values: IFormFields) => {
      return { ...values, [fieldName]: value }
    });
  }, [value, fieldName, setFormValues]);

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
};