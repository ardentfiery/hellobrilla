"use client";
import React, { useRef } from "react";
import videojs from 'video.js';
import VideoPlayer from "@/utils/VideoPlayer";

const VideoViewPop = ({ pop, setPop, vidSrc, handleOpen = "", size = "" }) => {
  const playerRef = useRef(null);

  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    width: 100,
    // fluid: true,
    sources: [
      {
        src: vidSrc,
        type: "application/x-mpegURL",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // Log the player's dimensions once the metadata is loaded
    player.on('loadedmetadata', () => {
      const videoWidth = player.videoWidth();
      const videoHeight = player.videoHeight();
      console.log('Video Width:', videoWidth);
      console.log('Video Height:', videoHeight);
    });

    // You can handle other player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <div className="absolute top-0 left-0 h-[100vh] w-[100vw] z-50 bg-[#0000007e] flex justify-center items-center">
      <div className="w-[85%] h-[85%] m-auto overflow-hidden flex justify-center ">
        <div className="relative h-full min-w-[50vw] max-w-[70vw]">
          <div className="overflow-hidden h-fit">
            <img
              onClick={() => {
                setPop(false);
                if (handleOpen) {
                  handleOpen(size);
                }
              }}
              src="/dashboard/crossbtn.png"
              alt="close"
              className="absolute md:top-0 z-50 right-[1rem] md:right-[-3rem] h-[2.4rem] w-[2.4rem] cursor-pointer"
            />
            <div className="max-w-[80vw] min-w-[20rem] ">
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
