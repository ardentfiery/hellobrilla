"use client";
import React, { useState, useEffect } from "react";
import { Modal } from "rsuite";
import axios from "@/app/api/axiosintercepter";

const PopVisualPdf = ({ size, open, handleClose }) => {
  const [pdfs, setPdfs] = useState([]);

  const getVisualPdfs = async () => {
    try {
      const resp = await axios.get("/sleepm/getvisualpdfs");
      setPdfs(resp?.data?.data);
    } catch (error) {
      console.log(`Error getting visual pdfs: ${error}`);
    }
  };

  useEffect(() => {
    if (open) {
      getVisualPdfs();
    }
  }, [open]);

  return (
    <div className="relative">
      {console.log(pdfs)}
      <Modal size={size} open={open} onClose={handleClose}>
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
                <strong>Presentación de Negocios -</strong> Visual
              </p>
            </div>
            <div className="flex gap-6 w-[80vw] m-auto  flex-wrap mt-2">
              {pdfs?.map((pdf, index) => {
                return (
                  <div key={index} className="text-center">
                    <div>
                      <p className="text-[1.8rem] font-medium">
                        Presentación <strong>{index + 1}</strong>
                      </p>
                    </div>
                    <div 
                    onClick={() => {
                      window.open(pdf?.pdf)
                    }}
                    className="group relative cursor-pointer ">
                      <div className="h-[224px] w-[287px] border-[3px] border-[#664198] rounded-3xl overflow-hidden">
                        <img
                          src="/dashboard/pdfbg.png"
                          className="h-full w-full object-cover"
                          alt="pdfbg"
                        />
                        <div className="absolute z-30 top-0 h-[224px] w-[287px] flex justify-center items-center group-hover:bg-[#00000052] rounded-3xl transition-all ease-in-out duration-300"></div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center mt-2 gap-4 ">
                      {pdf?.language == "Spanish" ? (
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
                        src="/dashboard/pdflogo.png"
                        className=" w-[2rem] "
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

export default PopVisualPdf;
