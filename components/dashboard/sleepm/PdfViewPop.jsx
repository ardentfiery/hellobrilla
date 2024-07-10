"use client";
import React from "react";
import PdfComponent from "@/utils/PdfComponent";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewPop = ({ pop, setPop, pdfSrc, handleOpen = "", size = "" }) => {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen overflow-hidden z-50 bg-[#f9f9f9] flex justify-center items-center py-2">
      <div className="w-full flex justify-center items-center">
        <div className="relative w-full mt-4 ">
          <img
            onClick={() => {
              if (handleOpen) {
                handleOpen(size);
                setPop(false);
              }
            }}
            src="/dashboard/crossbtn.png"
            alt="classbtn"
            className="absolute top-[40px] right-[4rem] invert h-[2.4rem] w-[2.4rem] cursor-pointer"
          />
          <div className=" w-full flex justify-center items-center">
            <div className="h-[100vh]  w-full max-h-fit">
              <PdfComponent pdfUrl={pdfSrc} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfViewPop;