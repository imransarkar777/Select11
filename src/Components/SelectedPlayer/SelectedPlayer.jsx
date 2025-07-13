import React from "react";

const SelectedPlayer = ({ selectedPlayer, handleRemove }) => {
  const { name, role, profile_image, id, market_price_usd } = selectedPlayer;

  return (
    <div className="flex justify-between ">
      <div className="left flex items-center gap-10">
        <div className="imageDiv">
          <img src={profile_image} className="w-20 h-auto" alt="" />
        </div>
        <div>
          <p className="text-2xl">{name}</p>
          <p className="text-[16px]">{role}</p>
        </div>
        <div>
          <p className="text-2xl">{market_price_usd}</p>
          <p className="text-[16px]">Value</p>
        </div>
      </div>
      <button onClick={() => handleRemove(id)}>delete</button>
    </div>
  );
};

export default SelectedPlayer;
