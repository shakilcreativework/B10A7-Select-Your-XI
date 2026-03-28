import React from "react";
import PlayerSelectInfo from "../PlayerSelectInfo";

const SelectedPlayers = ({ choosePlayers, removePlayer, setToggle }) => {
  // console.log(choosePlayers);
  return (
    <div>
      <div className="flex flex-col gap-4">
        {choosePlayers.map((player, idx) => (
        <PlayerSelectInfo
          removePlayer={removePlayer}
          key={idx}
          player={player}
        />
      ))}
      </div>
      {
        choosePlayers.length === 6 ? "" : <div className={`border border-[#E7FE29] size-fit p-2 rounded-xl ${choosePlayers.length < 6 ? 'mt-6' : ''}`}>
        <button
        onClick={() => setToggle(true)}
          className={`py-2 px-5 rounded-xl transition-all bg-[#E7FE29] font-semibold `}
        >
          Add More Player
        </button>
      </div>
      }
    </div>
  );
};

export default SelectedPlayers;
