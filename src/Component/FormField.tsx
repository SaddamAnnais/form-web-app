import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onValidate: (e: ChangeEvent<HTMLInputElement>) => boolean;
  errorMessage: string
}

export function FormField({
  label,
  value,
  onChange,
  onValidate,
  errorMessage
}: FormFieldProps) {
  const [isError, setIsError] = useState<boolean>(false);
  return (
    <FormControl isInvalid={isError}>
      <FormLabel>{label}</FormLabel>
      <Input
        type="text"
        value={value}
        onChange={(e) => {
          if (!onValidate(e)) {
            setIsError(true);
          } else {
            setIsError(false);
          }
          onChange(e);
        }}
      />
      <FormErrorMessage>{isError && errorMessage}</FormErrorMessage>
    </FormControl>
  );
}
