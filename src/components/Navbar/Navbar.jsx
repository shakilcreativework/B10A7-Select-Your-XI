import React from "react";
import navImg from "./../../assets/logo.png";
import dollarImg from "./../../assets/dollar1.png";

const Navbar = ({availableBalance}) => {
  // console.log(availableBalance);

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="text-xl">
            <img className="w-18" src={navImg} alt="" />
          </a>
        </div>
        <div className="flex gap-2 items-center font-semibold">
          <span>{availableBalance}</span>
          <span> Coin</span>
          <div>
            <img src={dollarImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
