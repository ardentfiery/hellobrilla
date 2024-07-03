import React, { useState, useEffect, useRef } from "react";
import { Modal } from "rsuite";
import axios from "@/app/api/axiosintercepter";
import downloadImage from "@/utils/downloadImage";
import ImageViewPop from "./ImageViewPop";
import VideoViewPop from "./VideoviewPop";

const PopProducts = ({
  size,
  open,
  handleClose,
  handleOpen = "",
  clickedProduct,
}) => {
  const [pop, setPop] = useState(false);
  const [popVid, setPopVid] = useState(false);

  return (
    <div className="">
      {pop && (
        <ImageViewPop
          pop={pop}
          setPop={setPop}
          imgsrc={clickedProduct?.brochure}
          handleOpen={handleOpen}
          size="calc(100% - 45%)"
        />
      )}
      {popVid && (
        <VideoViewPop
          pop={popVid}
          setPop={setPopVid}
          vidSrc={clickedProduct?.videoUrl}
          handleOpen={handleOpen}
          size="calc(100% - 45%)"
        />
      )}
      <Modal size={size} open={open} onClose={handleClose} className="">
        <img
          onClick={handleClose}
          src="/dashboard/crossbtn.png"
          alt="classbtn"
          className="absolute top-2 right-[4rem] h-[2.4rem] w-[2.4rem] invert cursor-pointer"
        />
        <Modal.Body className="hide-scrollbar select-none">
          <div className="flex gap-6 justify-center items-center">
            <div
              onClick={() => {
                setPop(true);
                handleClose();
              }}
              className="flex flex-col gap-4 justify-center items-center"
            >
              <div className="h-[313px] w-[334px] border-[2px] border-[#664198] rounded-xl overflow-hidden">
                <img
                  src={clickedProduct?.brochure}
                  className="h-full w-full object-cover"
                  alt=""
                />
                <div className="absolute z-30 top-0 h-[313px] w-[334px] flex justify-center items-center ">
                  <div className="group w-[70%] h-[70%] flex justify-center items-center">
                    <img
                      src="/dashboard/clickable.png"
                      alt=""
                      className=" w-[50%] h-[50%] cursor-pointer group-hover:hidden"
                    />
                    <img
                      src="/dashboard/clickablehover.png"
                      alt=""
                      className=" w-[50%] h-[50%] cursor-pointer hidden group-hover:flex"
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => {
                    downloadImage(clickedProduct?.brochure);
                  }}
                  className="bg-[#664198] mt-5 px-10 py-2 text-[1.1rem] font-semibold rounded-3xl text-white hover:bg-white hover:border-[1px] hover:border-[#664198] hover:text-[#664198] box-border transition-all ease-in-out duration-300"
                >
                  Descargar
                </button>
              </div>
            </div>
            <div
              onClick={() => {
                setPopVid(true);
                handleClose();
              }}
              className="flex flex-col gap-4 justify-center items-center"
            >
              <div className="h-[313px] w-[334px] border-[2px] border-[#664198] rounded-xl overflow-hidden">
                <img
                  src={clickedProduct?.brochure}
                  className="h-full w-full object-cover"
                  alt=""
                />
                <div className="absolute z-30 top-0 w-[25rem] h-[25rem] flex justify-center items-center ">
                  <div className="group w-[40%] h-[40%]">
                    <img
                      src="/dashboard/clickablevid.png"
                      alt=""
                      className=" w-[70%] h-[70%] cursor-pointer group-hover:hidden"
                    />
                    <img
                      src="/dashboard/clickablehover.png"
                      alt=""
                      className=" w-[70%] h-[70%] cursor-pointer hidden group-hover:flex"
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => {
                    downloadImage(clickedProduct?.brochure);
                  }}
                  className="bg-[#664198] mt-5 px-10 py-2 text-[1.1rem] font-semibold rounded-3xl text-white hover:bg-white hover:border-[1px] hover:border-[#664198] hover:text-[#664198] box-border transition-all ease-in-out duration-300"
                >
                  Descargar
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PopProducts;
