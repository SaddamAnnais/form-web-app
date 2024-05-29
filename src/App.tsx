import { useSelector, useDispatch } from "react-redux";
import { Card, CardBody, Heading, VStack, Button } from "@chakra-ui/react";
import {
  RootState,
  updateAge,
  updateCanSubmit,
  updateDateOfBirth,
  updateEmail,
  updateName,
  updatePhoneNumber,
  updatePortofolio,
} from "./store";
import { FormField } from "./Component/FormField";
import {
  validateAge,
  validateDate,
  validateEmail,
  validateLink,
  validateName,
  validatePhoneNumber,
} from "./validation";
import { useNavigate } from "react-router-dom";

function App() {
  // to control the state
  const formState = useSelector((state: RootState) => state);
  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log("Form submitted successfully!");
    nav("/results");
  };
  // console.log(formState);

  return (
    <VStack className="w-full h-full px-2 py-4 bg-[#001c4d] items-center">
      <Heading className="text-white pb-4">Request Form</Heading>
      <Card className="max-w-screen-lg w-full " id="form-holder">
        <CardBody className="flex flex-col items-center bg-white ">
          <FormField
            label="Name"
            setError={(e) => dispatch(updateCanSubmit(e))}
            value={formState.name}
            onChange={(e) => dispatch(updateName(e.target.value))}
            onValidate={validateName}
            errorMessage={"Name should only contain alphabets and not empty."}
          />

          <FormField
            label="Phone Number"
            setError={(e) => dispatch(updateCanSubmit(e))}
            value={formState.phoneNumber}
            onChange={(e) => dispatch(updatePhoneNumber(e.target.value))}
            onValidate={validatePhoneNumber}
            errorMessage={
              "Phone number should only contain numbers and not empty."
            }
          />

          <FormField
            label="Age"
            setError={(e) => dispatch(updateCanSubmit(e))}
            value={formState.age.toString()}
            onChange={(e) => dispatch(updateAge(e.target.value))}
            onValidate={validateAge}
            errorMessage={"Invalid age, should contain numbers and not empty."}
          />

          <FormField
            label="Email"
            setError={(e) => dispatch(updateCanSubmit(e))}
            value={formState.email}
            onChange={(e) => dispatch(updateEmail(e.target.value))}
            onValidate={validateEmail}
            errorMessage={"Invalid email address."}
          />

          <FormField
            label="Date of Birth"
            setError={(e) => dispatch(updateCanSubmit(e))}
            onChange={(e) => dispatch(updateDateOfBirth(e.target.value))}
            value={
              typeof formState.dateOfBirth === "string"
                ? ""
                : formState.dateOfBirth.toISOString().split("T")[0]
            }
            onValidate={validateDate}
            errorMessage={"Invalid date format."}
            type="date"
          />

          <FormField
            label="Portofolio Link"
            setError={(e) => dispatch(updateCanSubmit(e))}
            value={formState.portofolio}
            onChange={(e) => dispatch(updatePortofolio(e.target.value))}
            onValidate={validateLink}
            errorMessage={"Invalid link format."}
          />

          <Button
            colorScheme="blue"
            className="mt-4 w-full max-w-sm"
            isDisabled={
              !formState.canSubmit ||
              formState.name === "" ||
              formState.phoneNumber === "" ||
              formState.email === "" ||
              formState.age === "" ||
              formState.dateOfBirth === "" ||
              formState.portofolio === ""
            }
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </CardBody>
      </Card>
    </VStack>
  );
}

export default App;
