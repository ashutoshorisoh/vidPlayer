import React, { useState, useRef } from 'react';
import Header from './Component/Header';
import VideoPlayer from './Component/VideoPlayer';
import Footer from './Component/Footer';
import Message from './Component/Message';

const App = () => {
  const [videoFile, setVideoFile] = useState(null);
  const videoRef = useRef(null);

  const [currentSpeed, setCurrentSpeed] = useState(1); 
  const [currentVolume, setCurrentVolume] = useState(1); 
  const onVideoInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoFile(url);
    }
  };

  const handleSpeedChange = (direction) => {
    if (videoRef.current) {
      if (direction === "up") {
        videoRef.current.playbackRate = Math.min(videoRef.current.playbackRate + 0.25, 2); 
        setCurrentSpeed(videoRef.current.playbackRate);
      } else if (direction === "down") {
        videoRef.current.playbackRate = Math.max(videoRef.current.playbackRate - 0.25, 0.25); 
        setCurrentSpeed(videoRef.current.playbackRate);
      }
    }
  };

  const handleVolumeChange = (direction) => {
    if (videoRef.current) {
      if (direction === "up") {
        videoRef.current.volume = Math.min(videoRef.current.volume + 0.1, 1);  
        setCurrentVolume(videoRef.current.volume);
      } else if (direction === "down") {
        videoRef.current.volume = Math.max(videoRef.current.volume - 0.1, 0); 
        setCurrentVolume(videoRef.current.volume);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Header 
        onVideoInput={onVideoInput} 
        handleSpeedChange={handleSpeedChange} 
        handleVolumeChange={handleVolumeChange}
        currentSpeed={currentSpeed}
        currentVolume={currentVolume}
      />
      <VideoPlayer videoFile={videoFile} videoRef={videoRef} />
      <Footer />
    </div>
  );
};

export default App;