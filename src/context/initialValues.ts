import { IInitialValues } from "../interfaces/IInitialValues";

export const initialValues: IInitialValues = {
    values: {
      fullname: "",
      github: "",
      email: "",
      xp: "beginner"
    },  
    errors: {
      fullname: "",
      github: "",
      email: ""
    },
    activeStep: 1
};