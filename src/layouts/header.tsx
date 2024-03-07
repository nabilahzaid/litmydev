import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../assets";

const Header = () => {
  return (
    <div className="py-4 px-20 flex justify-between items-center bg-transparent absolute top-0 z-10 w-full">
      <img src={IMAGES.litmyLogo} alt="Ladies in Tech MY" className="w-16" />
      <ul className="flex gap-x-4">
        <li className="px-2 font-poppins">
          <Link to="/home">Home</Link>
        </li>
        <li className="px-2 font-poppins">
          <Link to="/about">About</Link>
        </li>
        <li className="px-2 font-poppins">
          <Link to="/directories">Directories</Link>
        </li>
        <li className="px-2 font-poppins">
          <Link to="/resources">Resources</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
