import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../assets";


const Header = () => {
  return (
    <div className="p-3 flex justify-between items-center">
      <img src={IMAGES.litmyLogo} alt="Ladies in Tech MY" className="w-16" />
      <ul className="flex">
        <li className="px-2"><Link to="/home" >Home</Link></li>
        <li className="px-2"><Link to="/about" >About</Link></li>
        <li className="px-2"><Link to="/directories" >Directories</Link></li>
        <li className="px-2"><Link to="/resources" >Resources</Link></li>
      </ul>
    </div>
  );
};

export default Header;
