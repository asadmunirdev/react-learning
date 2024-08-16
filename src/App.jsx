import NetflixSeries from "./components/NetflixSeries";
import styles from "./components/Netflix.module.css";
import { LiftingState } from "./components/LiftStateUp";
import { State } from "./components/hooks/State";
import { DericedState } from "./components/hooks/DericedState";


export const App = () => {
  return (
    <>
      <LiftingState />
      <State/>
      <DericedState/>
      <section className="container">
        <h1 className={styles["card-heading"]}>List of Netflix Cards</h1>
        <NetflixSeries />
      </section>
    </>
  );
};
