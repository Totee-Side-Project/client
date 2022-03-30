import { ChangeEvent, useCallback, useState } from "react";

function useInput(
  initValue = ""
): [
  string,
  (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  React.Dispatch<React.SetStateAction<string>>
] {
  const [value, setValue] = useState<string>(initValue);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValue(e.target.value),
    []
  );

  return [value, handleChange, setValue];
}

export default useInput;
