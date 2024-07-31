import React, { useRef, useState } from "react";
import { Modal } from "rsuite";
import { usePaginaContext } from "../../../context/PaginaContext";

const PaginaPop = ({ size, open, handleClose, currentProd, userSocials }) => {
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
              <div className=" w-[100%] flex  flex-col justify-start items-center gap-3">
                <img
                  src={currentProd?.image ? currentProd.image[imgIndex] : ""}
                  className="h-auto w-full sm:h-[20rem] sm:w-[25rem] md:h-[25rem] md:w-[30rem] lg:h-[30rem] lg:w-[35rem] xl:h-[35rem] xl:w-[40rem] px-2 object-contain"
                  alt=""
                />

                <button
                  onClick={() => {
                    if (userSocials?.priority) {
                      userSocials?.priority == "sms"
                        ? (window.location.href = `sms:${userSocials?.sms}`)
                        : window.open(`https://wa.me/${userSocials?.whatsapp}`);
                    } else {
                      window.open(`https://wa.me/${userSocials?.whatsapp}`);
                    }
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
              <div className="w-[80%] m-auto md:m-0 ">
                <p className="text-left font-bold text-[1.3rem] text-black">
                  {currentProd?.name}
                </p>
                <p className="text-left text-[1.1rem] text-black">
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
                className="group hover:bg-[#664198] select-none w-[35px] h-[35px] md:w-[55px] md:h-[55px] rounded-full  text-[2rem] flex items-center justify-center transition-all ease-in-out duration-300 cursor-pointer"
              >
                <div className=" ">
                  <img
                    src="/slidearrow.png"
                    className="h-[3rem] w-[3rem] rotate-180"
                    alt=""
                  />
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
                            className="h-[100%] w-[100%] object-contain"
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
                className="group select-none hover:bg-[#664198] w-[35px] h-[35px] md:w-[55px] md:h-[55px] rounded-full flex justify-center items-center transition-all ease-in-out duration-300 cursor-pointer"
              >
                <img
                  src="/slidearrow.png"
                  className="h-[3rem] w-[3rem] "
                  alt=""
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PaginaPop;
