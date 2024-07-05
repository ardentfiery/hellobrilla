import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./Pdf.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Pdfviewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="pdfpagehold">
      <div className="buttonandpage">
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
      <div className="flex gap-5 items-center w-[5rem]">
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
        <div className="border-[3px] border-[#664198] rounded-xl overflow-hidden h-[850px] ">
          <Document
            className="py-10"
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(error) => {
              console.log(error);
            }}
          >
            <Page pageNumber={pageNumber} />
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

export default Pdfviewer;
