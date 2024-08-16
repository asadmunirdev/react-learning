import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const checkIsOn = isOn ? "on" : "off";
  const bgColor = { backgroundColor: isOn ? "#4caf50" : "" };
  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <div
        className="toggle-switch"
        style={bgColor}
        onClick={handleToggleSwitch}
      >
        <div className={`switch ${checkIsOn}`}>
          <div className="switch-state">{checkIsOn}</div>
        </div>
      </div>
    </>
  );
};
