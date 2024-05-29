import { useSelector } from "react-redux";
import { Card, CardBody, Heading, VStack, Button } from "@chakra-ui/react";
import { RootState } from "./store";
import { useNavigate } from "react-router-dom";
import { FormField } from "./Component/FormField";

function Results() {
  // to control the state
  const formState = useSelector((state: RootState) => state);
  const nav = useNavigate();

  return (
    <VStack className="w-full h-full px-2 py-4 bg-[#001c4d] items-center">
      <Heading className="text-white pb-4">Form Results</Heading>
      <Card className="max-w-screen-lg w-full " id="form-holder">
        <CardBody className="flex flex-col items-center bg-white ">
          <FormField label="Name" value={formState.name} isReadOnly />

          <FormField
            label="Phone Number"
            value={formState.phoneNumber}
            isReadOnly
          />

          <FormField label="Age" value={formState.age.toString()} isReadOnly />

          <FormField label="Email" value={formState.email} isReadOnly />

          <FormField
            label="Date of Birth"
            type="date"
            value={
              typeof formState.dateOfBirth === "string"
                ? ""
                : formState.dateOfBirth.toISOString().split("T")[0]
            }
            isReadOnly
          />

          <FormField
            label="Portofolio Link"
            value={formState.portofolio}
            isReadOnly
          />
          <Button
            colorScheme="blue"
            className="mt-4 w-full max-w-sm"
            onClick={() => nav("/")}
          >
            Back
          </Button>
        </CardBody>
      </Card>
    </VStack>
  );
}

export default Results;
