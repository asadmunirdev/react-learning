import { useState } from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Heading = styled.h1`
  font-size: 5rem;
`;

const Data = styled.li`
  font-size: 3rem;
  padding: 1rem;
`;

export const DericedState = () => {
  const [users, setUser] = useState([
    { name: "Alice", age: "25" },
    { name: "Bob", age: "30" },
    { name: "Charlie", age: "35" },
    { name: "Angel", age: "45" },
  ]);

  // Derived state: count of users
  console.log(users);
  const userCount = users.length;

  // Convert ages to numbers and calculate average age
  const totalAge = users.reduce((accum, curElem) => accum + Number(curElem.age), 0);
  const averageAge = userCount > 0 ? totalAge / userCount : 0; // Check for division by zero

  return (
    <Main>
      <Heading>User Lists</Heading>
      <ul>
        {users.map((currElem, index) => {
          const { name, age } = currElem;
          return (
            <Data key={index}>
              {name} - {age} years old.
            </Data>
          );
        })}
      </ul>
      <Data>Total Users: {userCount}</Data>
      <Data>Average Age: {averageAge.toFixed(2)}</Data> {/* Formatting the average age to 2 decimal places */}
    </Main>
  );
};
