import React, { use } from "react";
import userImg from "./../../assets/user1.png";
import userFlag from "./../../assets/flag1.png";

const AvailablePlayers = ({ playersPromise }) => {
  // console.log(playersPromise);
  const playersData = use(playersPromise);
  console.log(playersData);

// {
// "id": 1,
// "player-image": "./../src/assets/Shakib.jpg",
// "player-name": "Shakib Al Hasan",
// "player-country": "Bangladesh",
// "playing-role": "All-rounder",
// "rating": 9.8,
// "bating-style": "Left-hand bat",
// "bowling-style": "Slow left-arm orthodox",
// "price": "$200,000"
// }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {playersData.map((player) => (
        <div key={player.id} className="card bg-base-100 shadow-sm p-4">
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
                <button className="bg-none py-2 cursor-pointer px-3 border text-sm border-gray-300 text-[#131313] rounded-md">
                  Choose Player
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;
