import React from 'react';
import styled from 'styled-components';


// Component
export const EventPropagation = () => {
  const handleGrandParent = () => {
    console.log("GrandParent clicked");
  };

  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  const handleChildClick = (event) => {
    console.log(event);
    event.stopPropagation();
    console.log("Child clicked");
  };

  return (
    <MainDiv>
      <GrandParentDiv onClickCapture={handleGrandParent}>
        <ParentDiv onClickCapture={handleParentClick}>
          <ChildButton onClickCapture={handleChildClick}>
            Child Div
          </ChildButton>
        </ParentDiv>
      </GrandParentDiv>
    </MainDiv>
  );
};


// Styled Components
const MainDiv = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  background-color: #f0f0f0; /* Light grey background */
`;

const GrandParentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: #4CAF50; /* Green background */
  color: white;
  border-radius: 15px;
  text-align: center;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049; /* Darker green on hover */
  }
`;

const ParentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: #2196F3; /* Blue background */
  color: white;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e88e5; /* Darker blue on hover */
  }
`;

const ChildButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: #f44336; /* Red background */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d32f2f; /* Darker red on hover */
  }
`;
