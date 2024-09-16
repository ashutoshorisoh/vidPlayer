import React, { useState } from "react";

const Header = ({ onVideoInput, handleSpeedChange, handleVolumeChange, currentSpeed, currentVolume }) => {
  
  const [showSpeedMessage, setShowSpeedMessage] = useState(false);
  const [showVolumeMessage, setShowVolumeMessage] = useState(false);

 
  const showSpeedChange = () => {
    setShowSpeedMessage(true);
    setTimeout(() => setShowSpeedMessage(false), 2000); 
  };


  const showVolumeChange = () => {
    setShowVolumeMessage(true);
    setTimeout(() => setShowVolumeMessage(false), 2000); 
  };

  return (
    <header className="bg-gray-800 text-white py-4 flex flex-col items-center">
      <div className="flex items-center space-x-3">
        <img src="src\Component\media.png" alt="logo" className="h-12" />
        <h1 className="text-xl font-bold">MediaPlayer</h1>
      </div>

      <div className="mt-4 flex space-x-4">
        <button 
          className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
          onClick={() => document.getElementById("videoInput").click()}
        >
          Open
        </button>
        <input 
          type="file" 
          id="videoInput" 
          className="hidden" 
          onChange={onVideoInput} 
        />

      
        <div className="relative group">
          <button className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">
            Playback
          </button>
          <ul className="absolute left-0 mt-[-13px] w-28 bg-gray-800 text-white rounded hidden group-hover:block">
            <li
              className="py-1 px-3 hover:bg-gray-700 cursor-pointer"
              onClick={() => {
                handleSpeedChange("up");
                showSpeedChange();
              }}
            >
              Speed up
            </li>
            <li
              className="py-1 px-3 hover:bg-gray-700 cursor-pointer"
              onClick={() => {
                handleSpeedChange("down");
                showSpeedChange();
              }}
            >
              Speed down
            </li>
          </ul>
        </div>

      
        <div className="relative group">
          <button className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">
            Audio
          </button>
          <ul className="absolute left-0 mt-[-13px] w-28 bg-gray-800 text-white rounded hidden group-hover:block">
            <li
              className="py-1 px-3 hover:bg-gray-700 cursor-pointer"
              onClick={() => {
                handleVolumeChange("up");
                showVolumeChange();
              }}
            >
              Volume up
            </li>
            <li
              className="py-1 px-3 hover:bg-gray-700 cursor-pointer"
              onClick={() => {
                handleVolumeChange("down");
                showVolumeChange();
              }}
            >
              Volume down
            </li>
          </ul>
        </div>
      </div>

      
      {showSpeedMessage && (
        <div className="absolute top-16 right-4 bg-green-600 text-white p-2 rounded">
          Playback speed: {currentSpeed.toFixed(2)}x
        </div>
      )}

      {showVolumeMessage && (
        <div className="absolute top-16 right-4 bg-blue-600 text-white p-2 rounded">
          Volume: {currentVolume.toFixed(2)}x
        </div>
      )}
    </header>
  );
};

export default Header;
