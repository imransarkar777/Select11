import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import PropTypes from "prop-types";

const Player = ({ player }) => {
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

  console.log("inside player");
  //   console.log(id);
  return (
    <>
      <div>
        <img src={action_image} alt="" />
      </div>
      <div>
        <div>
          <div>
            <div>
              {/* <BiSolidUserCircle /> */}
              <img src={profile_image} alt="PP" />
            </div>
            <div>{name}</div>
          </div>
          <div>
            <div>
              <div>{flag}</div>
              <p>{country}</p>
            </div>
            <div>
              <p>{role}</p>
            </div>
            <div>
              <p>Rating</p>
              <div>
                <p>Category</p>
                <p>{bat_hand}</p>
              </div>
              <div>
                <p>Price : ${market_price_usd}</p>
                <button>Choose Player</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Player.propTypes = {
  player: PropTypes.object.isRequired,
};

export default Player;
