import { createStore } from "redux";

export interface RootState {
  name: string;
  phoneNumber: string;
  email: string;
  age: number | "";
  dateOfBirth: Date | "";
  portofolio: string;
  canSubmit: boolean;
}

// Define the initial state

const initialState: RootState = {
  name: "",
  phoneNumber: "",
  email: "",
  age: "",
  dateOfBirth: "",
  portofolio: "",
  canSubmit: false,
};

// Define action types
const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_PHONE_NUMBER = "UPDATE_PHONE_NUMBER";
const UPDATE_AGE = "UPDATE_AGE";
const UPDATE_EMAIL = "UPDATE_EMAIL";
const UPDATE_DATE_OF_BIRTH = "UPDATE_DATE_OF_BIRTH";
const UPDATE_PORTOFOLIO = "UPDATE_PORTOFOLIO";
const UPDATE_CANSUBMIT = "UPDATE_CANSUBMIT";

// Define action
export const updateName = (name: string) => ({
  type: UPDATE_NAME,
  payload: name,
});

export const updatePhoneNumber = (phoneNumber: string) => ({
  type: UPDATE_PHONE_NUMBER,
  payload: phoneNumber,
});

export const updateAge = (age: string) => {
  const ageInt = parseInt(age);
  if (ageInt)
    return {
      type: UPDATE_AGE,
      payload: age,
    };
  else
    return {
      type: UPDATE_AGE,
      payload: "",
    };
};

export const updateEmail = (email: string) => ({
  type: UPDATE_EMAIL,
  payload: email,
});

export const updateDateOfBirth = (dob: string) => ({
  type: UPDATE_DATE_OF_BIRTH,
  payload: new Date(dob),
});

export const updatePortofolio = (portofolio: string) => ({
  type: UPDATE_PORTOFOLIO,
  payload: portofolio,
});

export const updateCanSubmit = (canSubmit: boolean) => ({
  type: UPDATE_CANSUBMIT,
  payload: canSubmit,
});

// Define the reducer
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state = initialState, action: any): RootState => {
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, name: action.payload };
    case UPDATE_PHONE_NUMBER:
      return { ...state, phoneNumber: action.payload };
    case UPDATE_AGE:
      return { ...state, age: action.payload };
    case UPDATE_EMAIL:
      return { ...state, email: action.payload };
    case UPDATE_DATE_OF_BIRTH:
      return { ...state, dateOfBirth: action.payload };
    case UPDATE_PORTOFOLIO:
      return { ...state, portofolio: action.payload };
    case UPDATE_CANSUBMIT:
      return { ...state, canSubmit: action.payload };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

export default store;
