import React, { useState, useEffect } from "react";
import { Modal } from "rsuite";
import axios from "../../../app/api/axiosintercepter";
import downloadImage from "../../../utils/downloadImage";
import ImageViewPop from "./ImageViewPop";

const PopPlan = ({ size, open, handleClose, handleOpen }) => {
  const [plan, setPlan] = useState({});
  const [clickedImage, setClickedImage] = useState();
  const [pop, setPop] = useState(false);

  const getPlan = async () => {
    try {
      const resp = await axios.get("/sleepm/getplanservilleta");
      setPlan(resp.data.data);
    } catch (error) {
      console.log(`Error getting plan: ${error}`);
    }
  };

  useEffect(() => {
    if (open) {
      getPlan();
    }
  }, [open]);

  return (
    <div className="">
      {pop && (
        <ImageViewPop
          pop={pop}
          setPop={setPop}
          imgsrc={clickedImage}
          handleOpen={handleOpen}
          size={"calc(100% - 10%)"}
        />
      )}
      <Modal size={size} open={open} onClose={handleClose}>
        <img
          onClick={handleClose}
          src="/dashboard/crossbtn.png"
          alt="classbtn"
          className="absolute top-0 p-1 right-[2%] h-[2rem] w-[2rem] lg:h-[2.4rem] lg:w-[2.4rem] invert cursor-pointer"
        />
        <Modal.Body>
          <div className=" flex justify-center items-center flex-col">
            <div>
              <p className="text-[#803DA1] font-bold text-[2rem] md:text-[3rem] mb-4">
                Plan Servilleta
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-5  w-full ">
              <div className=" w-[25rem] h-fit">
                <div className="relative mt-10">
                  <div className="absolute z-10 top-[-3rem] right-10  border-[3px] border-[#803DA1] rounded-full w-[7rem] h-[8rem] text-center">
                    <p className="text-[2.3rem] font-bold">1</p>
                  </div>
                </div>
                <div
                  onClick={() => {
                    setClickedImage(plan?.planSpanish);
                    setPop(true);
                    handleClose();
                  }}
                  className="relative min-h-[25rem] h-fit z-20 md:w-[25rem] w-[90vw] border-[3px] border-[#803DA1]  "
                >
                  <img
                    src={plan?.planSpanish}
                    alt="plan spanish image"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute z-30 top-0 w-[25rem] h-[25rem] flex justify-center items-center ">
                    <div className="group w-[40%] h-[40%]">
                      <img
                        src="/dashboard/clickable.png"
                        alt=""
                        className=" w-[100%] h-[100%] cursor-pointer group-hover:hidden"
                      />
                      <img
                        src="/dashboard/clickablehover.png"
                        alt=""
                        className=" w-[100%] h-[100%] cursor-pointer hidden group-hover:flex"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex h-[2rem] justify-center mt-4">
                  <button
                    onClick={() => {
                      downloadImage(plan?.planSpanish);
                    }}
                    className="bg-[#664198] px-10 py-1 text-[1.1rem] font-semibold rounded-3xl text-white hover:bg-white hover:border-[1px] hover:border-[#664198] hover:text-[#664198] box-border transition-all ease-in-out duration-300"
                  >
                    Descargar
                  </button>
                  <img src="/dashboard/spainflag.png" alt="" />
                </div>
              </div>
              <div className=" w-[25rem] h-fit ">
                <div className="relative mt-10">
                  <div className="absolute z-10 top-[-3rem] left-10  border-[3px] border-[#803DA1] rounded-full w-[7rem] h-[8rem] text-center">
                    <p className="text-[2.3rem] font-bold">2</p>
                  </div>
                </div>
                <div
                  onClick={() => {
                    setClickedImage(plan?.planEnglish);
                    setPop(true);
                    handleClose();
                  }}
                  className="relative min-h-[25rem] h-fit z-20 md:w-[25rem] w-[90vw] border-[3px] border-[#803DA1]"
                >
                  <img
                    src={plan?.planEnglish}
                    alt="plan spanish image"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute z-30 top-0 w-[25rem] h-[25rem] flex justify-center items-center ">
                    <div className="group w-[40%] h-[40%]">
                      <img
                        src="/dashboard/clickable.png"
                        alt=""
                        className=" w-[100%] h-[100%] cursor-pointer group-hover:hidden"
                      />
                      <img
                        src="/dashboard/clickablehover.png"
                        alt=""
                        className=" w-[100%] h-[100%] cursor-pointer hidden group-hover:flex"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex h-[2rem] justify-center mt-4">
                  <button
                    onClick={() => {
                      downloadImage(plan?.planEnglish);
                    }}
                    className="bg-[#664198] px-10 py-1 text-[1.1rem] font-semibold rounded-3xl text-white hover:bg-white hover:border-[1px] hover:border-[#664198] hover:text-[#664198] box-border transition-all ease-in-out duration-300"
                  >
                    Descargar
                  </button>
                  <img src="/dashboard/usflag.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PopPlan;
