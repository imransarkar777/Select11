import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import PropTypes from "prop-types";
import AvailablePlayers from "../AvailablePLayers/AvailablePlayers";

const Player = ({ player, handleChoose}) => {
  const {
    name,
    country,
    role,
    bat_hand,
    market_price_usd,
    flag,
    profile_image,
    action_image,
  } = player;

  


  // console.log("handle clicked");
  // console.log("inside player");
  //   console.log(id);
  return (
    <div className="playerCards bg-amber-200 p-6 sora-f">
      <div className="">
        <img
          src={action_image}
          className="aspect-3/2 rounded-2xl w-[376px]"
          alt=""
        />
      </div>
      <div>
        <div>
          <div className="flex gap-4 text-[20px] items-center mb-4 mt-6">
            <div>
              {/* <BiSolidUserCircle /> */}
              <img src={profile_image} className="w-7 h-7" alt="PP" />
            </div>
            <div>{name}</div>
          </div>
          <div className="">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="flex items-center-safe">
                  <img src={flag} className="w-5" alt="" />
                </div>
                <p className="text-[16px] text-left opacity-70">{country}</p>
              </div>
              <div>
                <p className="text-[14px]">{role}</p>
              </div>
            </div>
            <div className="text-[16px]">
              <p className="mt-4 text-left">Rating</p>
              <div className="flex justify-between">
                <p>Category</p>
                <p>{bat_hand}</p>
              </div>
              <div className="flex items-center justify-between ">
                <p>Price : ${market_price_usd}</p>
                <button onClick={()=>handleChoose(player)}>
                  Choose Player
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Player.propTypes = {
  player: PropTypes.object.isRequired,
};

export default Player;
