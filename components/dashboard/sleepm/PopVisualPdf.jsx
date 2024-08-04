"use client";
import React, { useState, useEffect } from "react";
import { Modal } from "rsuite";
import axios from "../../../app/api/axiosintercepter";
import PdfViewPop from "./PdfViewPop";
import downloadImage from "../../../utils/downloadImage";

const PopVisualPdf = ({ size, open, handleClose, handleOpen = "" }) => {
  const [pdfs, setPdfs] = useState([]);
  const [pop, setPop] = useState(false);
  const [clickedPdf, setclickedPdf] = useState("");

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
    <>
      {pop && (
        <PdfViewPop
          pop={pop}
          setPop={setPop}
          pdfSrc={clickedPdf}
          handleOpen={handleOpen}
          size="full"
        />
      )}
      <div className="relative">
        <Modal size={size} open={open} onClose={handleClose}>
          <div
            onClick={() => {
              //scroll up the post images
              handleClose();
              // setPop(true);
            }}
            className="group select-none hover:bg-[#664198] w-[35px] h-[35px] md:w-[55px] md:h-[55px] rounded-full flex justify-center items-center transition-all ease-in-out duration-300 cursor-pointer"
            >
              <img
                src="/slidearrow.png"
                className="h-[3rem] w-[3rem] rotate-180"
                alt=""
              />
          </div>
          <Modal.Body>
            <div
              className="
             m-auto mt-2"
            >
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
                          // window.open(pdf?.pdf);
                          handleClose();
                          setPop(true);
                          setclickedPdf(pdf?.pdf);
                        }}
                        className="group relative cursor-pointer "
                      >
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
                      <div className="mt-3 ">
                        <button
                          onClick={() => {
                            downloadImage(pdf?.pdf);
                          }}
                          className="bg-[#664198] px-10 py-2 text-[1.1rem] font-semibold rounded-3xl text-white hover:bg-white hover:text-[#664198] transition-all ease-in-out duration-300"
                        >
                          Descargar
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default PopVisualPdf;
