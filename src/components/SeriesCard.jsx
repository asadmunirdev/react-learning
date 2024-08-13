import styles from "./Netflix.module.css";
import styled from "styled-components";

// Define styled components outside of the component
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
`;

const Rating = styled.h3`
  font-size: 2rem;
  color: red;
  text-transform: capitalize;
`;

export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } = data;
  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} alt={name} width="40%" height="40%" />
      </div>
      <div className="flex flex-col gap-5 py-[3.2rem] px-[2.2rem]">
        <Name>Name: {name}</Name>
        <Rating>
          Rating:
          <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
        </Rating>
        <p className="text-3xl font-bold">Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          <ButtonCard rating={rating}>Watch Now</ButtonCard>
        </a>
      </div>
    </li>
  );
};
