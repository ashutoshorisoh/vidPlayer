import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 flex justify-center items-center">
      <div className="flex space-x-4">
        <i className="fa-solid fa-backward text-xl cursor-pointer"></i>
        <i className="fa-solid fa-play text-xl cursor-pointer"></i>
        <i className="fa-solid fa-forward text-xl cursor-pointer"></i>
        <i className="fa-solid fa-expand text-xl cursor-pointer"></i>
      </div>
    </footer>
  );
};

export default Footer;
