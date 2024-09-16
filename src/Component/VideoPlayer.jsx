import React from "react";

const VideoPlayer = ({ videoFile, videoRef }) => {
  return (
    <main className="flex-grow flex justify-center items-center bg-black">
      <div className="w-full max-w-4xl h-[500px] bg-gray-900 rounded-lg flex justify-center items-center">
        {videoFile ? (
          <video 
            src={videoFile} 
            controls 
            className="w-full h-full object-contain rounded-lg"
            ref={videoRef}
          />
        ) : (
          <p className="text-white text-2xl">Select a video to play</p>
        )}
      </div>
    </main>
  );
};

export default VideoPlayer;
