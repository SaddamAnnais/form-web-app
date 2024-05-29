import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

interface FormFieldProps {
  label: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onValidate: (e: ChangeEvent<HTMLInputElement>) => boolean;
  errorMessage: string;
  type?: string;
}

export function FormField({
  label,
  value,
  onChange,
  onValidate,
  errorMessage,
  type,
}: FormFieldProps) {
  const [isError, setIsError] = useState<boolean>(false);
  return (
    <FormControl isInvalid={isError} className="mt-2">
      <FormLabel>{label}</FormLabel>
      <Input
        type={type ? type : "text"}
        value={value}
        max={type === "date" ? new Date().toISOString().split("T")[0] : ""}
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
