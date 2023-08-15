import { useState, useEffect } from "react";
import { useFormContext } from "../../context/FormContext";
import { IFormGroupProps } from "../../interfaces/IFormGroup";
import { IFormFields } from "../../interfaces/IFormFields";
import Typography from "../Typography";

export function FormGroup({ label, inputType = "text", inputId, placeholder, name = "fullname" }: IFormGroupProps) {
  const { formValues, setFormValues, errors, validateField } = useFormContext();
  const fieldNameIsXp = name === "xp";
  const [hadBlur, setHadBlur] = useState(false);
  
  const handleOnChange = (value: string): void => {
    setFormValues((formValues: IFormFields) => ({
      ...formValues,
      [name]: value
    }));    
  };  

  const handleOnBlur = (): void => {
    if (fieldNameIsXp) return;

    validateField({ value: formValues[name], name });
    setHadBlur(true);
  };

  useEffect(() => {
    const fieldIsEmpty: boolean = formValues[name] === '';

    if (fieldIsEmpty || fieldNameIsXp ) return;
    
    if (hadBlur || (!hadBlur && errors[name] !== '')) validateField({ value: formValues[name], name });

  }, [hadBlur, formValues]);

  return (
    <div className="flex flex-col gap-2 w-10/12 md:w-full">
      <Typography as="label" htmlFor={inputId}>{label}</Typography>
     
      <input
          type={inputType}
          name={name}
          className="pl-3 h-12 border-2 border-emerald-500 outline-none bg-main-blue rounded-md"
          placeholder={placeholder}
          value={formValues[name]}
          onChange={({ target }) => handleOnChange(target.value)}
          onBlur={handleOnBlur}
        />
      { (!fieldNameIsXp && errors[name]) && <span className="text-red-300 font-semibold">{ errors[name] }</span> }      
    </div>
  );
};