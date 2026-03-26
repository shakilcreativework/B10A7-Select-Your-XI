import React from 'react';
import PlayerSelectInfo from '../PlayerSelectInfo';

const SelectedPlayers = ({choosePlayers, removePlayer}) => {
    // console.log(choosePlayers);
    return (
        <div>
            {
                choosePlayers.map((player, idx) => <PlayerSelectInfo removePlayer={removePlayer} key={idx} player={player} />)
            }
        </div>
    );
};

export default SelectedPlayers;