import React, { use } from "react";
import userImg from "./../../assets/user1.png";
import userFlag from "./../../assets/flag1.png";

const AvailablePlayers = ({ playersPromise }) => {
  // console.log(playersPromise);
  const playersData = use(playersPromise);
  console.log(playersData);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="card bg-base-100 shadow-sm p-4">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="pt-4">
          <div className="flex gap-2 items-center">
            <img src={userImg} alt="" />
            <h2 className="card-title">Viral Kohli</h2>
          </div>
          <div className="flex justify-between mt-4 border-b border-gray-200 pb-4">
            <div className="flex gap-2 items-center">
              <img className="w-4 h-4" src={userFlag} alt="" />
              <p className="text-gray-400">India</p>
            </div>
            <span className="bg-gray-300 py-2 px-4 rounded-sm">
              All-Rounder
            </span>
          </div>
          <div className="space-y-2 mt-4">
            <div className=" flex justify-between items-center">
              <p className="font-bold">Rating</p>
              <span>5</span>
            </div>
            <div className=" flex justify-between items-center">
              <p className="font-semibold">Left-Hand-Bat</p>
              <span className="text-gray-400">Left-Hand-Bat</span>
            </div>
            <div className=" flex justify-between items-center">
              <p className="font-semibold">Price: $<span>1500000</span></p>
              <button className="bg-none py-2 cursor-pointer px-3 border text-sm border-gray-300 text-[#131313] rounded-md">Choose Player</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-sm p-4">
        <figure>
          <img 
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="pt-4">
          <div className="flex gap-2 items-center">
            <img src={userImg} alt="" />
            <h2 className="card-title">Viral Kohli</h2>
          </div>
          <div className="flex justify-between mt-4 border-b border-gray-200 pb-4">
            <div className="flex gap-2 items-center">
              <img className="w-4 h-4" src={userFlag} alt="" />
              <p className="text-gray-400">India</p>
            </div>
            <span className="bg-gray-300 py-2 px-4 rounded-sm">
              All-Rounder
            </span>
          </div>
          <div className="space-y-2 mt-4">
            <div className=" flex justify-between items-center">
              <p className="font-bold">Rating</p>
              <span>5</span>
            </div>
            <div className=" flex justify-between items-center">
              <p className="font-semibold">Left-Hand-Bat</p>
              <span className="text-gray-400">Left-Hand-Bat</span>
            </div>
            <div className=" flex justify-between items-center">
              <p className="font-semibold">Price: $<span>1500000</span></p>
              <button className="bg-none py-2 cursor-pointer px-3 border text-sm border-gray-300 text-[#131313] rounded-md">Choose Player</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-sm p-4">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="pt-4">
          <div className="flex gap-2 items-center">
            <img src={userImg} alt="" />
            <h2 className="card-title">Viral Kohli</h2>
          </div>
          <div className="flex justify-between mt-4 border-b border-gray-200 pb-4">
            <div className="flex gap-2 items-center">
              <img className="w-4 h-4" src={userFlag} alt="" />
              <p className="text-gray-400">India</p>
            </div>
            <span className="bg-gray-300 py-2 px-4 rounded-sm">
              All-Rounder
            </span>
          </div>
          <div className="space-y-2 mt-4">
            <div className=" flex justify-between items-center">
              <p className="font-bold">Rating</p>
              <span>5</span>
            </div>
            <div className=" flex justify-between items-center">
              <p className="font-semibold">Left-Hand-Bat</p>
              <span className="text-gray-400">Left-Hand-Bat</span>
            </div>
            <div className=" flex justify-between items-center">
              <p className="font-semibold">Price: $<span>1500000</span></p>
              <button className="bg-none py-2 cursor-pointer px-3 border text-sm border-gray-300 text-[#131313] rounded-md">Choose Player</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayers;
