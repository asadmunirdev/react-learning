import NetflixSeries from "./components/NetflixSeries";
import { LiftingState } from "./components/LiftStateUp";
import { State } from "./components/hooks/State";
import { DericedState } from "./components/hooks/DericedState";
import { ToggleSwitch } from "./projects/ToggleSwitch/ToggleSwitch";
import { EventPropagation } from "./components/EventPropagation";
import { EventPorps } from "./components/EventsProp";

export const App = () => {
  return (
    <>
      <NetflixSeries />
      <ToggleSwitch />
      <LiftingState />
      <State />
      <DericedState />
      <EventPropagation/>
      <EventPorps/>
    </>
  );
};
