// import { useState } from "react";
import AvailablePlayers from "../AvailablePLayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayes/SelectedPlayers";

const Playground = ({ state, setState }) => {
  return (
    <>
      <div className="renderingDiv ">
        <div className="buttonsDiv flex justify-between">
          <div>
            <p>{state} Players</p>
          </div>
          <div className="buttons_container flex gap-3">
            <button
              className="bg-yellow-400 hover:bg-yellow-300 text-white font-bold py-2 px-4 border-b-4 border-yellow-600 hover:border-yellow-400 rounded"
              onClick={() => setState("available")}
            >
              Available
            </button>
            <button
              className="bg-yellow-400 hover:bg-yellow-300 text-white font-bold py-2 px-4 border-b-4 border-yellow-600 hover:border-yellow-400 rounded"
              onClick={() => setState("selected")}
            >
              Selected
            </button>
          </div>
        </div>
        <div className="playersDashboard">
          {state === "available" ? <AvailablePlayers /> : <SelectedPlayers />}
        </div>
      </div>
    </>
  );
};

export default Playground;
