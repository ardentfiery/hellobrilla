import React, { useRef, useState } from "react";
import { Modal } from "rsuite";
import { usePaginaContext } from "../../../context/PaginaContext";

const PaginaPop = ({ size, open, handleClose, currentProd, whatsapp }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const { parseText } = usePaginaContext();

  const scrollDiv = useRef(null);
  return (
    <div className="">
      <Modal size={size} open={open} onClose={handleClose}>
        <Modal.Header>
          <img
            src="/crossbtn.png"
            className="h-[2.5rem] w-[2.5rem] z-50 bg-white absolute right-4 top-2 cursor-pointer hover:scale-110 transitoin-all ease-in-out duration-300 "
            alt="crossbtn"
            onClick={handleClose}
          />
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="flex justify-end items-end w-[90%] gap-2 pb-2">
              {currentProd?.rating &&
                Array.from({ length: currentProd?.rating }).map((_, index) => (
                  <img
                    src="/rating.png"
                    className="h-[1rem] w-[1rem] "
                    alt=""
                  />
                ))}
            </div>
            <div className="grid md:grid-cols-2 h-fit">
              <div className=" w-[98%] flex justify-center flex-col items-center gap-3">
                <img
                  src={currentProd?.image ? currentProd.image[imgIndex] : "" }
                  className="h-[35rem] w-full px-10 object-cover"
                  alt=""
                />
                <button
                  onClick={() => {
                    window.open(`https://wa.me/${whatsapp}`);
                  }}
                  className="flex justify-center gap-2 items-center bg-white h-[3rem] px-5 rounded-3xl border-[2px] border-[#803DA1] hover:drop-shadow-lg hover:scale-105 cursor-pointer transition-all ease-in-out duration-300"
                >
                  <p className="text-[#803DA1] font-bold text-[1rem] lg:text-[1.1rem] ">
                    Lo quiero
                  </p>
                  <img
                    src="/buttonarrow.png"
                    className="w-[1rem] h-[1rem]"
                    alt=""
                  />
                </button>
              </div>
              <div className="w-[80%] m-auto md:m-0 text-left text-[1.1rem] text-black">
                <p>
                  {(() => {
                    try {
                      return currentProd.description
                        ? parseText(JSON.parse(currentProd.description))
                        : null;
                    } catch (error) {
                      console.error("Invalid JSON string:", error.message);
                      return parseText(currentProd.description);
                    }
                  })()}
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center  w-full h-[30rem] overflow-hidden gap-8 overflow-x-scroll hide-scrollbar ">
              <div
                onClick={() => {
                  if (scrollDiv.current) {
                    scrollDiv.current.scrollBy({
                      left: -120,
                      behavior: "smooth",
                    });
                  }
                }}
                className="group hover:bg-[#664198] select-none w-[35px] h-[35px] md:w-[55px] md:h-[55px] rounded-full border-[1px] border-[#664198] text-[2rem] flex items-center justify-center transition-all ease-in-out duration-300 cursor-pointer"
              >
                <div className="scale-150 font-medium  rotate-180 md:mt-3 md:mr-2  group-hover:text-white ">
                  {">"}
                </div>
              </div>
              <div
                ref={scrollDiv}
                className="min-h-[60vh] max-h-fit w-[60vw] flex items-center gap-5 overflow-x-scroll hide-scrollbar grow-0"
              >
                {currentProd?.image?.map((image, index) => {
                  return (
                    <div className="grid ">
                      <div
                        key={index}
                        className="flex flex-col w-[60vw] md:w-auto "
                      >
                        <div
                          onClick={() => {
                            setImgIndex(index);
                          }}
                          className="group h-[255px] w-[100%] md:h-[285px] md:w-[275px] shadow-md shadow-black cursor-pointer  relative transition-all ease-in-out duration-300  "
                        >
                          <img
                            className="h-[100%] w-[100%] object-cover"
                            src={image}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div
                onClick={() => {
                  //scroll down the post images
                  if (scrollDiv.current) {
                    scrollDiv.current.scrollBy({
                      left: 120,
                      behavior: "smooth",
                    });
                  }
                }}
                className="group select-none hover:bg-[#664198] w-[35px] h-[35px] md:w-[55px] md:h-[55px] rounded-full text-[2rem] border-[1px] border-[#664198] flex justify-center items-center transition-all ease-in-out duration-300 cursor-pointer"
              >
                <div className="scale-150 font-medium md:mb-3 md:ml-2  group-hover:text-white ">
                  {">"}
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PaginaPop;
