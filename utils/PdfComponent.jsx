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
      console.log(dimensions);
      setPageDimensions(dimensions);
    };
    fetchPdfDimensions();
  }, [pdfUrl]);

  const isLandscape = pageDimensions.width > pageDimensions.height;

  return (
    <div className="pdf-container flex flex-col items-center ">
      <div className="button-and-page mt-14">
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
          className="group hover:bg-[#664198] w-[30px] md:w-[40px] h-[30px] md:h-[40px] rounded-full border-[1px] border-[#664198] flex justify-center items-center transition-all ease-in-out duration-300 cursor-pointer"
        >
          <p className="font-light text-[3rem] rotate-180 text-[#664198] group-hover:text-white ">
            {">"}
          </p>
        </div>
        <div className="border-[3px]  border-[#664198] rounded-xl overflow-hidden w-full  flex justify-center items-center">
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(error) => {
              console.log(error);
            }}
          >
            <Page
              pageNumber={pageNumber}
              width={isLandscape ? 1400 : undefined}
              height={!isLandscape ? 1000 : undefined}
              className="w-[40rem] bg-green-500"
            />
          </Document>
        </div>
        <div
          onClick={() => {
            if (pageNumber < numPages) {
              setPageNumber(pageNumber + 1);
            }
          }}
          className="group hover:bg-[#664198] w-[30px] md:w-[40px] h-[30px] md:h-[40px] rounded-full border-[1px] border-[#664198] flex justify-center items-center transition-all ease-in-out duration-300 cursor-pointer"
        >
          <p className="font-light text-[3rem] -rotate-180 text-[#664198] group-hover:text-white ">
            {">"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PdfComponent;
