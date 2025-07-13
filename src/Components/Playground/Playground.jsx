// import { useState } from "react";
import { useState } from "react";
import AvailablePlayers from "../AvailablePLayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayes/SelectedPlayers";

const Playground = ({ btnState, setBtnState }) => {
  // const [playerStatus, setPlayerStatus] = useState("availableNow");
  const [gotSelected, setGotSelected] = useState([]);

  const handleChoose = (player) => {
    
    if (  player.id ===  )
    
    const newList = [...gotSelected, player];
    setGotSelected(newList);




  };
  

  return (
    <>
      <div className="renderingDiv ">
        <div className="buttonsDiv flex justify-between">
          <div>
            <p>{btnState} Players</p>
          </div>
          <div className="buttons_container flex gap-3">
            <button
              className="bg-yellow-400 hover:bg-yellow-300 text-white font-bold py-2 px-4 border-b-4 border-yellow-600 hover:border-yellow-400 rounded"
              onClick={() => setBtnState("available")}
            >
              Available
            </button>
            <button
              className="bg-yellow-400 hover:bg-yellow-300 text-white font-bold py-2 px-4 border-b-4 border-yellow-600 hover:border-yellow-400 rounded"
              onClick={() => setBtnState("selected")}
            >
              Selected
            </button>
          </div>
        </div>
        <div className="playersDashboard">
          {btnState === "available" ? (
            <AvailablePlayers handleChoose={handleChoose} />
          ) : (
            <SelectedPlayers gotSelected={gotSelected} />
          )}
        </div>
      </div>
    </>
  );
};

export default Playground;





