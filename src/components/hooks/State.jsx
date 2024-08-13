import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

// Define global styles
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`;

// Define other styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f3f4f6;
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 5.5rem; /* Font size for Heading */
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 2.5rem;
  color: white;
  background-color: #4f46e5;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #4338ca;
  }

  &:active {
    transform: scale(0.95);
  }
`;

// Define Child Component styles
const ChildHeading = styled.h2`
  font-size: 5.5rem; /* Match font size with Heading */
  font-weight: bold;
  color: #333;
  margin-top: 20px;
`;

export const State = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(prevCount => prevCount + 1);
  };


  
  return (
    <>
      <GlobalStyles />
      <Container>
        <Heading>{count}</Heading>
        <Button onClick={handleButtonClick}>Increment</Button>
        <ChildComponent count={count} />
      </Container>
    </>
  );
};

function ChildComponent({ count }) {
  return (
    <div>
      <ChildHeading>Child Component - {count}</ChildHeading>
    </div>
  );
}
