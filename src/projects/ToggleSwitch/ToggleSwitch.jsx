import { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";
import { FaSun, FaMoon } from "react-icons/fa"; // Import the correct icons

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const switchStyle = {
    transform: isOn ? "translateX(50px)" : "translateX(0)",
    backgroundColor: isOn ? "#4caf50" : "#f44336",
  };

  return (
    <>
      <h1 style={{ display: "flex", marginTop: "30px" }}>
        Switch <IoIosSwitch style={{ color: isOn ? "#4caf50" : "#f44336" }} />
      </h1>
      <div
        className="toggle-switch"
        style={{ backgroundColor: isOn ? "#4caf50" : "#ccc" }}
        onClick={handleToggleSwitch}
      >
        <div className="switch" style={switchStyle}>
          {isOn ? <FaSun size={24} /> : <FaMoon size={24} />}
        </div>
      </div>
    </>
  );
};
