"use client";
import React, { useState, useEffect } from "react";
import { Modal } from "rsuite";
import axios from "@/app/api/axiosintercepter";
import ImageViewPop from "./ImageViewPop";
import downloadImage from "@/utils/downloadImage";

const PopTriptico = ({ size, open, handleClose, handleOpen }) => {
  const [triptico, setTriptico] = useState({});
  const [clickedImage, setClickedImage] = useState();
  const [pop, setPop] = useState(false);

  const getTriptico = async () => {
    try {
      const resp = await axios.get("/sleepm/gettriptico");
      setTriptico(resp?.data?.data);
    } catch (error) {
      console.log(`error getting triptico: ${error}`);
    }
  };

  useEffect(() => {
    if (open) {
      getTriptico();
    }
  }, [open]);

  return (
    <>
      {pop && (
        <ImageViewPop
          pop={pop}
          setPop={setPop}
          imgsrc={clickedImage}
          handleOpen={handleOpen}
          size="calc(100% - 20%)"
        />
      )}
      <div className="relative z-40 ">
        <Modal
          size={size}
          open={open}
          onClose={handleClose}
          className="bg-red-300 z-20"
        >
          <img
            onClick={handleClose}
            src="/dashboard/crossbtn.png"
            alt="classbtn"
            className="absolute top-2 right-[4rem] h-[2.4rem] w-[2.4rem] invert cursor-pointer"
          />
          <Modal.Body>
            <div>
              <div className="grid lg:grid-cols-2 gap-x-4">
                <div className="h-fit md:h-[70vh] flex flex-col justify-end md:items-center pb-5">
                  <div className="flex md:items-center md:justify-center gap-4 ">
                    <p className="font-bold text-[2.5rem]">Tríptico</p>
                    <div className="bg-gray-300 w-[3rem] h-[3rem] rounded-full text-center ">
                      <p className="font-bold text-[2.5rem]">1</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 ">
                    <div
                      style={{
                        boxShadow: "-14px -8px #0000001F",
                      }}
                      className="mt-2 grid md:grid-cols-2 md:w-[30.5rem] gap-[.2rem] border-[3px] border-[#664198] bg-[#664198] rounded-2xl overflow-hidden w-fit  "
                    >
                      <div
                        className="relative "
                        onClick={() => {
                          setClickedImage(triptico?.tripticoSpOne);
                          setPop(true);
                          handleClose();
                        }}
                      >
                        <div className="md:w-[15rem] md:h-[16rem] w-[90%] h-[16rem]">
                          <img
                            src={triptico?.tripticoSpOne}
                            alt=""
                            className="object-cover h-full w-full"
                          />
                        </div>
                        <div className="absolute top-0 w-[15rem] h-[16rem] flex justify-center items-center  ">
                          <div className="group w-[50%] h-[50%]">
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
                        <p className="bg-gray-100 text-center text-[1.3rem]  ">
                          De frente
                        </p>
                      </div>
                      <div
                        className="relative"
                        onClick={() => {
                          setClickedImage(triptico?.tripticoSpTwo);
                          setPop(true);
                          handleClose();
                        }}
                      >
                        <div className="w-[15rem] h-[16rem]">
                          <img
                            src={triptico?.tripticoSpTwo}
                            alt=""
                            className="object-cover h-full w-full"
                          />
                        </div>
                        <div className="absolute top-0 w-[15rem] h-[16rem] flex justify-center items-center ">
                          <div className="group w-[50%] h-[50%]">
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
                        <p className="bg-gray-100 text-center text-[1.3rem]  ">
                          Por detrás
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row md:w-[30.5rem] md:px-10 mt-4 h-[3rem] justify-between">
                      <div>
                        <button
                          onClick={() => {
                            downloadImage(triptico?.tripticoSpOne);
                          }}
                          className="bg-[#664198] px-10 py-1 text-[1.1rem] font-semibold rounded-3xl text-white hover:bg-white hover:border-[1px] hover:border-[#664198] hover:text-[#664198] box-border transition-all ease-in-out duration-300"
                        >
                          Descargar <span className="md:hidden">De Frente</span>
                        </button>
                      </div>
                      <div className=" h-[2rem] ">
                        <img
                          src="/dashboard/spainflag.png"
                          className=" h-[100%] "
                          lt=""
                        />
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            downloadImage(triptico?.tripticoSpTwo);
                          }}
                          className="bg-[#664198] px-10 py-1 text-[1.1rem] font-semibold rounded-3xl text-white hover:bg-white hover:border-[1px] hover:border-[#664198] hover:text-[#664198] box-border transition-all ease-in-out duration-300"
                        >
                          Descargar{" "}
                          <span className="md:hidden">Por detras</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-fit md:h-[70vh] flex flex-col justify-start md:items-center pt-16 md:pt-5">
                  <div className="flex md:items-center md:justify-center gap-4 ">
                    <p className="font-bold text-[2.5rem]">Tríptico</p>
                    <div className="bg-gray-300 w-[3rem] h-[3rem] rounded-full text-center ">
                      <p className="font-bold text-[2.5rem]">2</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 ">
                    <div
                      style={{
                        boxShadow: "-14px -8px #0000001F",
                      }}
                      className="mt-2 grid md:grid-cols-2 md:w-[30.5rem] gap-[.2rem] border-[3px] border-[#664198] bg-[#664198] rounded-2xl overflow-hidden w-fit"
                    >
                      <div
                        className="relative"
                        onClick={() => {
                          setClickedImage(triptico?.tripticoEnOne);
                          setPop(true);
                          handleClose();
                        }}
                      >
                        <div className="w-[15rem] h-[16rem]">
                          <img
                            src={triptico?.tripticoEnOne}
                            alt=""
                            className="object-cover h-full w-full"
                          />
                        </div>
                        <div className="absolute top-0 w-[15rem] h-[16rem] flex justify-center items-center ">
                          <div className="group w-[50%] h-[50%]">
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
                        <p className="bg-gray-100 text-center text-[1.3rem]  ">
                          De frente
                        </p>
                      </div>
                      <div
                        className="relative"
                        onClick={() => {
                          setClickedImage(triptico?.tripticoEnTwo);
                          setPop(true);
                          handleClose();
                        }}
                      >
                        <div className="w-[15rem] h-[16rem]">
                          <img
                            src={triptico?.tripticoEnTwo}
                            alt=""
                            className="object-cover h-full w-full"
                          />
                        </div>
                        <div className="absolute top-0 w-[15rem] h-[16rem] flex justify-center items-center ">
                          <div className="group w-[50%] h-[50%]">
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
                        <p className="bg-gray-100 text-center text-[1.3rem]  ">
                          Por detrás
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row md:w-[30.5rem] md:px-10 mt-4 h-[3rem] justify-between">
                      <div>
                        <button
                          onClick={() => {
                            downloadImage(triptico?.tripticoEnOne);
                          }}
                          className="bg-[#664198] px-10 py-1 text-[1.1rem] font-semibold rounded-3xl text-white hover:bg-white hover:border-[1px] hover:border-[#664198] hover:text-[#664198]  transition-all ease-in-out duration-300"
                        >
                          Descargar <span className="md:hidden">De Frente</span>
                        </button>
                      </div>
                      <div className=" h-[2rem] ">
                        <img
                          src="/dashboard/usflag.png"
                          className=" h-[100%] "
                          lt=""
                        />
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            downloadImage(triptico?.tripticoEnTwo);
                          }}
                          className="bg-[#664198] px-10 py-1 text-[1.1rem] font-semibold rounded-3xl text-white hover:bg-white hover:border-[1px] hover:border-[#664198] hover:text-[#664198]  transition-all ease-in-out duration-300"
                        >
                          Descargar{" "}
                          <span className="md:hidden">Por detras</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default PopTriptico;
