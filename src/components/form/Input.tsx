import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";

function Input() {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return <StyledInput value={value} onChange={handleChange} />;
}

export default Input;

const StyledInput = styled.input``;
