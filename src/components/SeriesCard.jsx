import React from "react";
import styled from "styled-components";

// Component
export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } = data;

  return (
    <Card>
      <div>
        <StyledImage src={img_url} alt={name} />
      </div>
      <div className="flex flex-col gap-5 py-[3.2rem] px-[2.2rem]">
        <Name>Name: {name}</Name>
        <Rating>
          Rating:
          <RatingSpan rating={rating}>{rating}</RatingSpan>
        </Rating>
        <p className="text-3xl font-bold">Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          <ButtonCard rating={rating}>Watch Now</ButtonCard>
        </a>
      </div>
    </Card>
  );
};

// Styled Components
const Card = styled.li`
  box-shadow: rgba(0, 0, 0, 0.3) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  background-color: #fafafa; /* Off-White */
  border-radius: 8px; /* Adding border-radius for better aesthetics */
`;

const ButtonCard = styled.button`
  padding: 1.2rem 2.4rem;
  border: none;
  border-radius: 20px;
  font-size: 1.6rem;
  background-color: ${(props) => (props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f")};
  color: var(--text);
  font-weight: bold;
  cursor: pointer;
`;

const Name = styled.h2`
  font-size: 2.4rem;
  margin: 0;
`;

const Rating = styled.h3`
  font-size: 2rem;
  color: red;
  text-transform: capitalize;
  margin: 0;
`;

const RatingSpan = styled.span`
  padding: 0.3rem 1.8rem;
  color: #000;
  margin-left: 1.2rem;
  border-radius: 100rem;
  background-color: ${(props) => (props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f")};
  display: inline-block;
`;

const StyledImage = styled.img`
  width: 100%;
`;
