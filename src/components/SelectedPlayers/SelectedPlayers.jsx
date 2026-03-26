import React from 'react';
import PlayerSelectInfo from '../PlayerSelectInfo';

const SelectedPlayers = ({choosePlayers}) => {
    console.log(choosePlayers);
    return (
        <div>
            {
                choosePlayers.map((player, idx) => <PlayerSelectInfo key={idx} player={player} />)
            }
        </div>
    );
};

export default SelectedPlayers;