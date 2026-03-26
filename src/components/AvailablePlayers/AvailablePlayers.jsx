import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({ playersPromise, setAvailableBalance, availableBalance, choosePlayers, setChoosePlayers }) => {
  // console.log(playersPromise);
  const playersData = use(playersPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {playersData.map((player) => <PlayerCard setAvailableBalance={setAvailableBalance} availableBalance={availableBalance} choosePlayers={choosePlayers} setChoosePlayers={setChoosePlayers} key={player.id} player={player} />)}
    </div>
  );
};

export default AvailablePlayers;
