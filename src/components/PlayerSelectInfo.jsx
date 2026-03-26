import React from "react";
import { Trash2 } from 'lucide-react';

const PlayerSelectInfo = ({ player, removePlayer }) => {
  // console.log(player);

  // handle delete player
  const deletePlayer = (player) => {
    removePlayer(player);
  };

  return (
    <div className="flex justify-between items-center border border-gray-200 rounded-2xl p-4">
      <div className="flex gap-4 items-center">
        <img
          className="w-20 h-20 object-cover object-center rounded-2xl"
          src={player["player-image"]}
          alt="Player"
        />
        <div className="space-y-2">
            <h2 className="card-title">{player["player-name"]}</h2>
            <p className="font-semibold text-gray-400">{player["bating-style"]}</p>
        </div>
      </div>
      <button onClick={() => deletePlayer(player)}>
        <Trash2 className="text-red-600" />
      </button>
    </div>
  );
};

export default PlayerSelectInfo;
