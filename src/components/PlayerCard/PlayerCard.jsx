
import userImg from "./../../assets/user1.png";
import userFlag from "./../../assets/flag1.png";
import React, { useState } from 'react';

const PlayerCard = ({player}) => {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div className="card bg-base-100 shadow-sm p-4">
          <figure>
            <img className="w-full h-50 bg-cover"
              src={player["player-image"]}
              alt="Player"
            />
          </figure>
          <div className="pt-4">
            <div className="flex gap-2 items-center">
              <img src={userImg} alt="" />
              <h2 className="card-title">{player["player-name"]}</h2>
            </div>
            <div className="flex justify-between mt-4 border-b border-gray-200 pb-4">
              <div className="flex gap-2 items-center">
                <img className="w-4 h-4" src={userFlag} alt="" />
                <p className="text-gray-400">{player["player-country"]}</p>
              </div>
              <span className="bg-gray-100 py-2 px-4 rounded-sm">
                All-Rounder
              </span>
            </div>
            <div className="space-y-2 mt-4">
              <div className=" flex justify-between items-center">
                <p className="font-bold">Rating</p>
                <span>{player.rating}</span>
              </div>
              <div className=" flex justify-between items-center">
                <p className="font-semibold">{player["bating-style"]}</p>
                <span className="text-gray-400">{player["bowling-style"]}</span>
              </div>
              <div className=" flex justify-between items-center">
                <p className="font-semibold">
                  Price: <span>{player.price}</span>
                </p>
                <button disabled={isSelected} onClick={() => setIsSelected(true)} className={`btn bg-none py-2 cursor-pointer px-3 border text-sm border-gray-300 ${isSelected ? 'text-[#131313]' : 'text-gray-500'}  rounded-md font-medium`}>
                  {
                    isSelected ?
                    'Selected'
                    :
                    'Choose Player'
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default PlayerCard;