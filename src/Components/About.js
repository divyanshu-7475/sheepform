"use client";
import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaExpand } from "react-icons/fa";

export default function About() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("timeupdate", () => {
        setCurrentTime(video.currentTime);
        setDuration(video.duration);
      });
    }
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <>
      <div className="w-full  bg-gray-100 p-2 pb-5">
        <div className="w-full flex flex-col items-center justify-center mb-0.5">
          <div className="sm:w-4/5 w-full rounded-2xl bg-gray-200 p-3">
            <h1 className="text-black m-1 ml-2 font-bold">INTRODUCTION</h1>
            <div className="pl-8">
              <span className="text-black">
                In the peaceful meadows of Sugarland, shepherds and their sheep
                thrived in a sweet paradise, where the very air was tinged with
                the scent of candies and snacks. These sweet treats formed the
                heart of Sugarland's charm, not only for its residents but also
                for the sheep that roamed the candy-filled meadows. It was a
                place where sugar and smiles were in abundance.
              </span>
            </div>
          </div>
        </div>
        <div className="w-full  flex flex-col items-center mt-1">
          <div className="sm:w-4/5  w-full rounded-2xl bg-gray-200 p-3">
            <h1 className="text-black m-1 mb-4 ml-2 font-bold">HOW TO PLAY</h1>
            <div className="relative w-full max-w-md mx-auto">
              <video ref={videoRef} className="w-full rounded-lg">
                <source src="https://res.cloudinary.com/dxr8h1oud/video/upload/v1742938601/yi7m7gx2jjpa1vljan6s.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white flex items-center justify-between p-2">
                <button onClick={togglePlayPause} className="text-xl">
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>

                <span className="text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>

                <button onClick={handleFullScreen} className="text-xl">
                  <FaExpand />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
