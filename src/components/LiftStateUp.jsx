import { useState } from "react";
import styled from "styled-components";

// Main component
export const LiftingState = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <Container>
      <StyledInputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <StyledDisplayComponent inputValue={inputValue} />
    </Container>
  );
};

// Styled InputComponent
const StyledInputComponent = ({ inputValue, setInputValue }) => {
  return (
    <InputWrapper>
      <StyledInput
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </InputWrapper>
  );
};

// Styled DisplayComponent
const StyledDisplayComponent = ({ inputValue }) => {
  return <StyledParagraph>The current input value is: {inputValue}</StyledParagraph>;
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; // Full viewport height
  padding: 20px;
  box-sizing: border-box;
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px; // To prevent it from becoming too wide on large screens
  box-sizing: border-box;
`;

const StyledParagraph = styled.p`
  font-size: 18px;
  color: #333;
  text-align: center; // Center-align the text
`;
