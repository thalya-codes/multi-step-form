import { useState } from "react";
import { IFormErrors, IValidateFieldParams, IValidatePrevStepsParams, TFieldNamesToValidate } from "../interfaces/IUseValidation";
import { initialValues } from "../context/initialValues";

enum ErrorsMgs {  
  fullname =  "Por favor, insira o seu nome completo",
  email =  "Formato de email inválido!",
  github =  "O endereço informado está incompleto ou não é do GitHub!",
  emptyField =  "O campo não pode ficar vazio!"
};

export function useValidation() {
  const [errors, setErrors] = useState<IFormErrors>(initialValues.errors);

  const validateField = ({ name, value }: IValidateFieldParams): boolean => {      
    const isEmpty: boolean = value === "";
    let isValid: boolean = !isEmpty;
    const errorMessage: string = isEmpty ? ErrorsMgs['emptyField'] : ErrorsMgs[name];
      
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

    setErrors((prevErrors) => ({ ...prevErrors, [name]: !isValid ? errorMessage : "" }));

    return isValid;     
  }; 

  const validatePrevSteps = ({ stepNumber, fieldNamesByStep, formValues }: IValidatePrevStepsParams): boolean | null => {
    let isValid = validateField({ name: 'fullname', value: formValues['fullname'] });
    const step3FieldNames = fieldNamesByStep[3] as TFieldNamesToValidate[];

    if (stepNumber === 4) isValid = step3FieldNames.map(name => validateField({ name, value: formValues[name] })).every(isValid => isValid);
      
    return isValid || null;
  };

  return { validateField, errors, validatePrevSteps };
};