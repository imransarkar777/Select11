import { useState } from "react";
import AvailablePlayers from "../AvailablePLayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayes/SelectedPlayers";

const Playground = () => {
  const [state, setState] = useState("available");

  function handleAvailable() {
    setState("available");
    console.log("Available");
  }
  function handleSelected() {
    setState("selected");
    console.log("selected");
  }

  return (
    <div className="flex justify-between">
      <div>
        <p>{state} Players</p>{" "}
      </div>
      <div>
        <button onClick={() => handleAvailable()}> Available </button>
        <button onClick={() => handleSelected()}> Selected </button>
      </div>
      <div>{()=> handleAvailable}</div>
    </div>
  );
};

export default Playground;
