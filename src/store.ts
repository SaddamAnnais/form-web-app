import { createStore } from "redux";

export interface RootState {
  name: string;
  phoneNumber: string;
}

// Define the initial state

const initialState: RootState = {
  name: "",
  phoneNumber: "",
};

// Define action types
const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_PHONE_NUMBER = "UPDATE_PHONE_NUMBER";

// Define action
export const updateName = (name: string) => ({
  type: UPDATE_NAME,
  payload: name,
});

export const updatePhoneNumber = (phoneNumber: string) => ({
  type: UPDATE_PHONE_NUMBER,
  payload: phoneNumber,
});

// Define the reducer
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, name: action.payload };
    case UPDATE_PHONE_NUMBER:
      return { ...state, phoneNumber: action.payload };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

export default store;
