import { ChangeEvent } from "react";

// to validate the form
export const validateName = (e: ChangeEvent<HTMLInputElement>) => {
  return /^[a-zA-Z]+$/.test(e.target.value);
};

export const validatePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
  return /^[0-9]+$/.test(e.target.value);
};

export const validateAge = (e: ChangeEvent<HTMLInputElement>) => {
  return /^[0-9]+$/.test(e.target.value);
};

export const validateEmail = (e: ChangeEvent<HTMLInputElement>) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
};

export const validateDate = (e: ChangeEvent<HTMLInputElement>) => {
  return /^\d{4}-\d{2}-\d{2}$/.test(e.target.value);
};

export const validateLink = (e: ChangeEvent<HTMLInputElement>) => {
  return /^(https?:\/\/)?((?:[a-z0-9-]+\.)+[a-z]{2,}|localhost)(?::\d+)?(\/.*)?$/i.test(e.target.value);
};
