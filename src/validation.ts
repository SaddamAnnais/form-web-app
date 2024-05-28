import { ChangeEvent } from "react";

  // to validate the form 
  export const validateName = (e: ChangeEvent<HTMLInputElement>) => {
    return /^[a-zA-Z]+$/.test(e.target.value);
  };

  export  const validatePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
    return /^[0-9]+$/.test(e.target.value);
  };
