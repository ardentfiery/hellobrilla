"use client";
import React, { useState, useEffect } from "react";
import { Modal } from "rsuite";
import axios from "@/app/api/axiosintercepter";
import VideoViewPop from "./VideoViewPop";
import downloadVideo from "@/utils/downloadVideo";

const PopVisualVideo = ({ size, open, handleClose, handleOpen }) => {
  const [videos, setvideos] = useState([]);
  const [popVid, setpopVid] = useState(false);
  const [clickedVid, setclickedVid] = useState([]);

  const getVisualVideos = async () => {
    try {
      const resp = await axios.get("/sleepm/getvisualvideos");
      setvideos(resp?.data?.data);
    } catch (error) {
      console.log(`Error getting visual videos: ${error}`);
    }
  };

  useEffect(() => {
    if (open) {
      getVisualVideos();
    }
  }, [open]);

  return (
    <div className=" z-30">
      {popVid && (
        <VideoViewPop
          pop={popVid}
          setPop={setpopVid}
          vidSrc={clickedVid?.videoUrl}
          handleOpen={handleOpen}
          size="full"
        />
      )}
      <Modal size={size} open={open} onClose={handleClose} className="relative">
        <div
          onClick={() => {
            //scroll up the post images
            handleClose();
          }}
          className="absolute  z-50 group hover:bg-[#664198] rounded-full border-[1px] border-[#664198] flex justify-center items-center transition-all ease-in-out duration-300 top-[2rem] left-[4rem] h-[4rem] w-[4rem] cursor-pointer"
        >
          <p className="font-light text-[4rem] rotate-180 text-[#664198] group-hover:text-white ">
            {">"}
          </p>
        </div>
        <Modal.Body>
          <div className="w-[90vw] m-auto">
            <div className="text-center">
              <p className="text-[#803DA1] text-[2.5rem]  ">
                <strong>Presentación de Negocios -</strong> Video
              </p>
            </div>
            <div className="flex gap-6 w-[80vw] m-auto  flex-wrap mt-2">
              {videos?.map((video, index) => {
                return (
                  <div key={index} className="text-center">
                    <div>
                      <p className="text-[1.8rem] font-medium">
                        Presentación <strong>{index + 1}</strong>
                      </p>
                    </div>
                    <div
                      onClick={() => {
                        setpopVid(true);
                        setclickedVid(video);
                        handleClose();
                      }}
                      className="group relative cursor-pointer "
                    >
                      <div className="h-[224px] w-[287px] border-[3px] border-[#664198] rounded-[30px] overflow-hidden">
                        <img
                          className="h-[100%] w-[100%] rounded-[20px] object-cover"
                          src="/dashboard/video.jpg"
                          alt=""
                        />
                        <div className="absolute z-30 top-0 h-[224px] w-[287px] flex justify-center items-center group-hover:bg-[#00000052] rounded-[30px] transition-all ease-in-out duration-300">
                          <div className="group w-[40%] h-[50%]">
                            <img
                              src="/dashboard/clickablevid.png"
                              alt=""
                              className=" w-[80%] h-[100%] object-cover cursor-pointer"
                            />
                          </div>
                          {/* </div> */}
                        </div>
                        {/* <div className="absolute z-30 top-0 h-[224px] w-[287px] flex justify-center items-center group-hover:bg-[#00000052] rounded-3xl transition-all ease-in-out duration-300"></div> */}
                      </div>
                    </div>
                    <div className="flex justify-center items-center mt-2 gap-4 ">
                      {video?.language == "Spanish" ? (
                        <>
                          <img
                            src="/dashboard/spainflag.png"
                            className=" w-[3rem] "
                            lt=""
                          />
                          <p className="text-black font-bold text-[1.1rem] ">
                            Español
                          </p>
                        </>
                      ) : (
                        <>
                          <img
                            src="/dashboard/usflag.png"
                            className=" w-[2.4rem] "
                            lt=""
                          />
                          <p className="text-black font-bold text-[1.1rem] ">
                            Inglés
                          </p>
                        </>
                      )}
                      <img
                        onClick={() => {
                          downloadVideo(video._id);
                        }}
                        src="/dashboard/download.png"
                        className=" w-[2rem]  cursor-pointer"
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PopVisualVideo;
