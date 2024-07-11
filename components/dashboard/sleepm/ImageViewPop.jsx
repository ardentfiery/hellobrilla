import React from "react";
import downloadImage from "@/utils/downloadImage";

const ImageViewPop = ({ pop, setPop, imgsrc, handleOpen = "", size="" }) => {
  return (
    <div className="absolute top-0 left-0 h-[100vh] w-[100vw] z-50 bg-[#0000007e] flex justify-center items-center">
      <div className="w-[70%] h-[85%] m-auto overflow-hidden flex justify-center">
        <div className="relative">
          <div className="overflow-hidden h-fit">
            <img
              onClick={() => {
                setPop(false);
                if (handleOpen) {
                  handleOpen(size);
                }
              }}
              src="/dashboard/crossbtn.png"
              alt="classbtn"
              className="absolute top-0 right-[1rem] md:right-[-3rem] h-[2.4rem] w-[2.4rem] cursor-pointer"
            />
            <img
              src={imgsrc}
              className="w-[100%] object-contain"
              alt="dynamic image displaying"
              style={{
                height: `${handleOpen ? "80vh" : ""}`,
              }}
            />
          </div>
        </div>
        <div className="absolute bottom-[1.5rem]">
          <button
            onClick={() => {
              downloadImage(imgsrc);
            }}
            className="bg-[#664198] px-10 py-2 text-[1.1rem] font-semibold rounded text-white hover:bg-white hover:text-[#664198] transition-all ease-in-out duration-300"
          >
            Descargar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageViewPop;
