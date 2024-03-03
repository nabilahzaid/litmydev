import React from "react";
import { SiYoutube } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="justify-center">
        <p className="font-semibold text-xl font-poppins">Ladies in Tech</p>
      </div>
      <div className="bg-primary-800 px-20 py-3 flex justify-between items-center">
        <div className="font-poppins text-white">
          &copy; Ladies in Tech 2024. All rights reserved.
        </div>
        <div>
          <ul>
            <li>
              <a href="https://www.youtube.com/@coderbelle5858">
                <SiYoutube className="text-2xl text-white hover:text-primary-100" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
