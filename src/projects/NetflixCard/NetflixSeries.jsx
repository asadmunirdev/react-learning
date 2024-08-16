import seriesData from "../../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";
import styled from "styled-components";

const NetflixSeries = () => {
  return (
    <Section>
      <Heading>List of Netflix Cards</Heading>
      <Grid>
        {seriesData.map((curElem) => (
          <SeriesCard key={curElem.id} data={curElem} />
        ))}
      </Grid>
    </Section>
  );
};

// Styled Components

const Section = styled.section`
  max-width: 142rem;
  margin: 0 auto;
  padding: 3.6rem 7rem;
  background-color: #eaeaea; /* Soft Gray */
`;

const Heading = styled.h1`
  margin-bottom: 3.2rem;
  text-align: center;
  font-style: oblique;
  font-size: 4rem;
`;

const Grid = styled.ul`
  display: grid;
  gap: 9.6rem;
  grid-template-columns: repeat(3, 1fr);
`;

export default NetflixSeries;
