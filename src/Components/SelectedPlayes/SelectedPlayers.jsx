import React from "react";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ gotSelected }) => {
  return (
    <>
      <div>
        <p>Selected Players</p>
      </div>
      <div>total selected player - {gotSelected.length}</div>

      {gotSelected.map((selectedPlayer, idx) => (
        <SelectedPlayer
          key={idx}
          selectedPlayer={selectedPlayer}
        ></SelectedPlayer>
      ))}
    </>
  );
};

export default SelectedPlayers;
