import React, { useEffect, useState } from "react";
import Player from "../Player/Player";

const AvailablePlayers = () => {
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
          <Player key={player.id} player={player}></Player>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
