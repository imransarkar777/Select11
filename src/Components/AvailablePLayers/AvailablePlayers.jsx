import React, { useEffect, useState } from "react";
import Player from "../Player/Player";

const AvailablePlayers = ({ handleChoose }) => {
  const [availablePlayers, setAvailablePlayers] = useState([]);

  useEffect(() => {
    fetch("cricket_players_data.json")
      .then((res) => res.json())
      .then((data) => setAvailablePlayers(data));
  }, []);

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
          ></Player>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
