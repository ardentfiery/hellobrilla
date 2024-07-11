"use client";
import React from "react";
import VideoPlayer from "@/utils/VideoPlayer";
import { useRef } from "react";

const VideoViewPop = ({ pop, setPop, vidSrc, handleOpen = "", size = "" }) => {
  const playerRef = useRef(null);

  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: vidSrc,
        type: "application/x-mpegURL",
      },
    ],
  };
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  return (
    <div className="absolute top-0 left-0 h-[100vh] w-[100vw] z-50 bg-[#0000007e] flex justify-center items-center">
      <div className="w-[85%] h-[85%]  m-auto overflow-hidden flex justify-center">
        <div className="relative">
          <div className="overflow-hidden h-fit">
            <img
              onClick={() => {
                setPop(false);
                if (handleOpen) {
                  handleOpen(size);
                }
              }}
              src="/dashboard/crossbtn.png"
              alt="classbtn"
              className="absolute md:top-0  z-50 right-[1rem] md:right-[-3rem] h-[2.4rem] w-[2.4rem] cursor-pointer"
            />
            <div className="h-[100%] bg-red-400">
              <VideoPlayer
                options={videoPlayerOptions}
                onReady={handlePlayerReady}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoViewPop;
