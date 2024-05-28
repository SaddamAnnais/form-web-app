import { useSelector, useDispatch } from "react-redux";
import { Card, CardBody, Heading, VStack, Button } from "@chakra-ui/react";
import { RootState, updateName, updatePhoneNumber } from "./store";
import { FormField } from "./Component/FormField";
import { validateName, validatePhoneNumber } from "./validation";

function App() {
  // to control the state
  const formState = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log("Form submitted successfully!");
  };

  return (
    <VStack className="w-full h-full px-2 py-4 bg-[#001c4d]">
      <Heading className="text-white pb-4">Request Form</Heading>
      <Card>
        <CardBody>
          <FormField
            label="Name"
            value={formState.name}
            onChange={(e) => dispatch(updateName(e.target.value))}
            onValidate={validateName}
            errorMessage={"Name should only contain alphabets and not empty."}
          />

          <FormField
            label="Phone Number"
            value={formState.phoneNumber}
            onChange={(e) => dispatch(updatePhoneNumber(e.target.value))}
            onValidate={validatePhoneNumber}
            errorMessage={
              "Phone number should only contain numbers and not empty."
            }
          />

          {/* Add more form fields using the FormField component */}

          <Button colorScheme="blue" onClick={handleSubmit}>
            Submit
          </Button>
        </CardBody>
      </Card>
    </VStack>
  );
}

export default App;
