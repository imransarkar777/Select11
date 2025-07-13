import React from "react";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ gotSelected, handleRemove }) => {
  return (
    <>
      <div>
        <p>Selected Players</p>
      </div>
      <div>total selected player - {gotSelected.length}</div>

      {gotSelected.map((selectedPlayer) => (
        <SelectedPlayer
          key={selectedPlayer.id}
          selectedPlayer={selectedPlayer}
          handleRemove={handleRemove}
        ></SelectedPlayer>
      ))}
    </>
  );
};

export default SelectedPlayers;
