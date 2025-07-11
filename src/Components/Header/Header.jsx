import { FaBitcoin } from "react-icons/fa6";
import React from "react";
import logo from "../../assets/logo.png";

const Header = ({ balance }) => {
  return (
    <nav className="flex justify-between">
      <img src={logo} alt="Logo" />
      <ul className="flex gap-12 items-center py-4 px-5">
        <li>Home</li>
        <li>Fixture</li>
        <li>Teams</li>
        <li>Schedule</li>

        <button
          className="flex text-bold gap-2.5 items-center"
          onClick={() => console.log("Click")}
        >
          {balance} Coin
          <span>
            <FaBitcoin />
          </span>
        </button>
      </ul>
    </nav>
  );
};

export default Header;
