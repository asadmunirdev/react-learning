import NetflixSeries from "./components/NetflixSeries";
import styles from "./components/Netflix.module.css";
import { DericedState } from "./components/hooks/DericedState";
import { State } from "./components/hooks/State";

export const App = () => {
  return (
    <>
      <State />
      <DericedState />
      {/* <section className="container">
        <h1 className={styles["card-heading"]}>List of Netflix Cards</h1>
        <NetflixSeries />
      </section> */}
    </>
  );
};
