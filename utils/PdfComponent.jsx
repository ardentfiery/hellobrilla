"use client";
import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./Pdf.css";
import getPdfDimensions from "./getPdfDimensions";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfComponent = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageDimensions, setPageDimensions] = useState({ width: 0, height: 0 });

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  useEffect(() => {
    const fetchPdfDimensions = async () => {
      const dimensions = await getPdfDimensions(pdfUrl);
      setPageDimensions(dimensions);
    };
    fetchPdfDimensions();
  }, [pdfUrl]);

  const isLandscape = pageDimensions.width > pageDimensions.height;

  return (
    <div className="pdf-container flex flex-col items-center overflow-x-hidden ">
      <div className="button-and-page">
        <p className="font-bold text-[1.3rem]  ">
          {pageNumber} / {numPages}
        </p>
      </div>
      <div className="flex gap-5 items-center ">
        <div
          onClick={() => {
            if (pageNumber > 1) {
              setPageNumber(pageNumber - 1);
            }
          }}
          className="group select-none hover:bg-[#664198] w-[35px] h-[35px] md:w-[55px] md:h-[55px] rounded-full flex justify-center items-center transition-all ease-in-out duration-300 cursor-pointer"
        >
          <img
            src="/slidearrow.png"
            className="h-[3rem] w-[3rem] rotate-180"
            alt=""
          />
        </div>
        <div className="pdf-image border-[3px]  border-[#664198] rounded-xl overflow-y-scroll overflow-x-hidden">
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(error) => {
              console.log(error);
            }}
          >
            <Page
              pageNumber={pageNumber}
              width={window.innerWidth * 0.74}
              // height={window.innerHeight * 0.3}
              className="m-auto"
            />
          </Document>
        </div>
        <div
          onClick={() => {
            if (pageNumber < numPages) {
              setPageNumber(pageNumber + 1);
            }
          }}
          className="group select-none hover:bg-[#664198] w-[35px] h-[35px] md:w-[55px] md:h-[55px] rounded-full flex justify-center items-center transition-all ease-in-out duration-300 cursor-pointer"
        >
          <img src="/slidearrow.png" className="h-[3rem] w-[3rem] " alt="" />
        </div>
      </div>
    </div>
  );
};

export default PdfComponent;
