import React from "react";

const SelectedPlayer = ({ selectedPlayer }) => {
  const { name, role, profile_image } = selectedPlayer;

  return (
    <div className="flex justify-between">
      <div className="left flex items-center">
        <div className="imageDiv">
          <img src={profile_image} className="w-20 h-auto" alt="" />
        </div>
        <div>
          <p className="text-2xl">{name}</p>
          <p className="text-[16px]">{role}</p>
        </div>
      </div>
      <button>delete</button>
    </div>
  );
};

export default SelectedPlayer;
