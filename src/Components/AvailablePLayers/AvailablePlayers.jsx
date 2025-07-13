// import React, { useEffect, useState } from "react";
import Player from "../Player/Player";

const AvailablePlayers = ({ handleChoose, availablePlayers, selectedPlayersIDS }) => {


  

  return (
    <div>
      <p className="title">
        Available Players total - {availablePlayers.length}
      </p>
      <div className="grid grid-cols-3 gap-6">
        {availablePlayers.map((player) => (
          <Player
            key={player.id}
            player={player}
            handleChoose = {handleChoose}
            isSelected={selectedPlayersIDS.includes(player.id)}
          ></Player>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
