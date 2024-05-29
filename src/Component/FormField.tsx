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
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onValidate?: (e: ChangeEvent<HTMLInputElement>) => boolean;
  setError?: (error: boolean) => void;
  errorMessage?: string;
  type?: string;
  isReadOnly?: boolean;
}

export function FormField({
  label,
  value,
  onChange,
  onValidate,
  setError,
  errorMessage,
  type,
  isReadOnly,
}: FormFieldProps) {
  const [isError, setIsError] = useState<boolean>(false);
  return (
    <FormControl isInvalid={isError} className="mt-2">
      <FormLabel>{label}</FormLabel>
      <Input
        // className={isReadOnly ? "border-none border-0" : ""}
        type={type ? type : "text"}
        value={value}
        isReadOnly={isReadOnly} 
        border={isReadOnly ? "none" : "1px solid gray"}
        // isDisabled={isReadOnly}
        max={type === "date" ? new Date().toISOString().split("T")[0] : ""}
        onChange={(e) => {
          if (onValidate && setError && onChange) {
            if (!onValidate(e)) {
              setIsError(true);
              setError(!true);
            } else {
              setIsError(false);
              setError(!false);
            }
            onChange(e);
          }
        }}
      />
      <FormErrorMessage>{isError && errorMessage}</FormErrorMessage>
    </FormControl>
  );
}
