import React, { useState, useEffect, useRef } from "react";
import { Modal } from "rsuite";
import axios from "@/app/api/axiosintercepter";
import downloadImage from "@/utils/downloadImage";
import ImageViewPop from "./ImageViewPop";

const PopFolleto = ({ size, open, handleClose, handleOpen }) => {
  const [folletos, setFolletos] = useState([]);
  const [clickedImage, setClickedImage] = useState();
  const [pop, setPop] = useState(false);
  const scrollDiv = useRef(null);

  const getFolletos = async () => {
    try {
      const resp = await axios.get("/sleepm/getfolletos");
      setFolletos(resp.data.data);
    } catch (error) {
      console.log(`Error getting plan: ${error}`);
    }
  };

  useEffect(() => {
    if (open) {
      getFolletos();
    }
  }, [open]);

  return (
    <div className="z-30">
      {pop && (
        <ImageViewPop
          pop={pop}
          setPop={setPop}
          imgsrc={clickedImage}
          handleOpen={handleOpen}
          size="calc(100% - 25%)"
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
          <div className="h-[60vh] flex  items-center flex-col mt-5 ">
            <div>
              <p className="text-[#803DA1] font-bold text-[3rem]">Folletos</p>
            </div>
            <div className="flex justify-center items-center  w-[80vw] h-[30rem] gap-8 overflow-x-scroll hide-scrollbar">
              <div
                onClick={() => {
                  //scroll up the post images
                  console.log(scrollDiv.current);
                  if (scrollDiv.current) {
                    scrollDiv.current.scrollBy({
                      left: -120,
                      behavior: "smooth",
                    });
                  }
                }}
                className="group hover:bg-[#664198] w-[55px] h-[55px] rounded-full border-[1px] border-[#664198] flex justify-center items-center transition-all ease-in-out duration-300 cursor-pointer"
              >
                <p className="font-medium text-[4rem] rotate-180 text-[#664198] group-hover:text-white ">
                  {">"}
                </p>
              </div>
              <div
                ref={scrollDiv}
                className="h-[60vh] w-[60vw] flex items-center gap-5 overflow-x-scroll hide-scrollbar grow-0"
              >
                {folletos?.map((folleto, index) => {
                  return (
                    <div key={index} className="flex flex-col">
                      <div
                        onClick={() => {
                          setClickedImage(folleto?.brochure);
                          // handleOpen("calc(100% - 10rem");
                          setPop(true);
                          handleClose();
                        }}
                        className="group h-[285px] w-[275px] shadow-md shadow-black cursor-pointer  relative transition-all ease-in-out duration-300 "
                      >
                        <img
                          className="h-[100%] w-[100%] object-cover"
                          src={folleto?.brochure}
                          alt=""
                        />
                        <div className="absolute z-30 top-0 w-[25rem] h-[25rem] flex justify-center items-center ">
                          <div className="group w-[40%] h-[40%]">
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
                        <div className="absolute top-0 h-full w-full group-hover:bg-[#0000004a]"></div>
                      </div>
                      <button
                        onClick={() => {
                          downloadImage(folleto?.brochure);
                        }}
                        className="bg-[#664198] mt-5 px-10 py-2 text-[1.1rem] font-semibold rounded-3xl text-white hover:bg-white hover:border-[1px] hover:border-[#664198] hover:text-[#664198] box-border transition-all ease-in-out duration-300"
                      >
                        Descargar
                      </button>
                    </div>
                  );
                })}
              </div>
              <div
                onClick={() => {
                  //scroll down the post images
                  if (scrollDiv.current) {
                    scrollDiv.current.scrollBy({
                      left: 120,
                      behavior: "smooth",
                    });
                  }
                }}
                className="group hover:bg-[#664198] w-[60px] h-[60px] rounded-full border-[1px] border-[#664198] flex justify-center items-center transition-all ease-in-out duration-300 cursor-pointer"
              >
                <p className="font-medium text-[4rem]  text-[#664198] group-hover:text-white">
                  {">"}
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PopFolleto;
