import { useState } from "react";
import { IValidateFieldParams, TFieldNamesToValidate } from "../interfaces/IUseValidation";

export function useValidation() {
  const [errors, setErrors] = useState<Set<TFieldNamesToValidate>>(new Set());

  const validateField = ({ name, value }: IValidateFieldParams): boolean => {      
    const isEmpty: boolean = value === "";
    let isValid: boolean = !isEmpty;
      
    switch(name) {
      case "email": 
        isValid = /^(?=[a-zA-Z0-9._-]{3,}@)[a-zA-Z0-9._-]*[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/.test(value);
        break;

      case "fullname": 
        isValid = /^[A-Z][a-z]+\s[A-Z][a-z]/.test(value);
        break;
      
      case "github":
        isValid = /^(https:\/\/(?!www\.)|http:\/\/(?!www\.))?(www\.)?github\.com\/.*[a-zA-Z0-9].*$/.test(value);
        break;
    };

    setErrors((prevErrors: Set<TFieldNamesToValidate>) => {
      const newErrorSet: Set<TFieldNamesToValidate> = new Set(prevErrors);

      if (!isValid) newErrorSet.add(name);
      else newErrorSet.delete(name);
      
      return newErrorSet;
    });
    
    return isValid;     
  }; 


  return { validateField, errors };
};