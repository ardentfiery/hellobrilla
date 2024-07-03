import React from "react";
import downloadImage from "@/utils/downloadImage";

const ImageViewPop = ({ pop, setPop, imgsrc, handleOpen = "" }) => {
  // const fileName = imgsrc.substring(imgsrc.lastIndexOf("/") + 1);

  // const downloadImage = async () => {
  //   try {
  //     // Fetch the image as a Blob
  //     const response = await fetch(imgsrc);
  //     const blob = await response.blob();

  //     // Create an object URL from the Blob
  //     const url = URL.createObjectURL(blob);

  //     // Create an invisible link element
  //     const link = document.createElement("a");
  //     link.href = url;
  //     link.download = fileName; // Set the default name for the downloaded image
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);

  //     // Release the object URL
  //     URL.revokeObjectURL(url);
  //   } catch (error) {
  //     console.error("Failed to download image:", error);
  //   }
  // };

  return (
    <div className="absolute top-0 left-0 h-[100vh] w-[100vw] z-50 bg-[#0000007e] flex justify-center items-center">
      <div className="w-[70%] h-[85%] m-auto overflow-hidden flex justify-center">
        <div className="relative">
          <div className="overflow-hidden h-fit">
            <img
              onClick={() => {
                setPop(false);
                if (handleOpen) {
                  handleOpen("calc(100% - 120px)");
                }
              }}
              src="/dashboard/crossbtn.png"
              alt="classbtn"
              className="absolute top-0 right-[-3rem] h-[2.4rem] w-[2.4rem] cursor-pointer"
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
