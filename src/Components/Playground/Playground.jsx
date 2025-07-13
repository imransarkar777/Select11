// import { useState } from "react";
import { useState, useEffect } from "react";
import AvailablePlayers from "../AvailablePLayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayes/SelectedPlayers";

const Playground = ({ btnState, setBtnState }) => {
  // const [playerStatus, setPlayerStatus] = useState("availableNow");
  const [availablePlayers, setAvailablePlayers] = useState([]);
  const [gotSelected, setGotSelected] = useState([]);

  useEffect(() => {
    fetch("cricket_players_data.json")
      .then((res) => res.json())
      .then((data) => setAvailablePlayers(data));
  }, []);

  const handleChoose = (player) => {
    // Function to add a player to the selected list
    if (!gotSelected.some((p) => p.id === player.id)) {
      setGotSelected((prevSelected) => [...prevSelected, player]);
    }
  };

  const handleRemove = (playerID) => {
    setGotSelected((prevSelected) =>
      prevSelected.filter((player) => player.id !== playerID)
    );
  };

  const selectedPlayersIDS = gotSelected.map((player) => player.id);

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
            <AvailablePlayers
              handleChoose={handleChoose}
              availablePlayers={availablePlayers}
              selectedPlayersIDS={selectedPlayersIDS}
            />
          ) : (
            <SelectedPlayers
              gotSelected={gotSelected}
              handleRemove={handleRemove}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Playground;
