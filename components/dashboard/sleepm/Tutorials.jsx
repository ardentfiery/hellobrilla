import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { LuPlayCircle } from "react-icons/lu";
import axios from "../../../app/api/axiosintercepter";
import TutorialPop from "./TutorialPop";
import Popup from "../Popup";
import PcProfile from "../PcProfile";
import { Oval } from "react-loader-spinner";

const Tutorials = ({ isActive }) => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const handleOpen = (value) => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [openVidPop, setOpenVidPop] = useState(false);
  const [sizeVidPop, setSizeVidPop] = useState();
  const handleOpenVidPop = (value) => {
    setSizeVidPop(value);
    setOpenVidPop(true);
  };
  const handleCloseVidPop = () => setOpenVidPop(false);

  const [tutorials, setTutorials] = useState([]);
  const [clickedVid, setClickedVid] = useState({});
  const [currentTutPage, setcurrentTutPage] = useState(1);
  const [totalPages, settotalPages] = useState(1);
  const [isLoading, setisLoading] = useState(true);

  const getTutorials = async () => {
    try {
      const resp = await axios.get(
        `/sleepm/gettutorialspagination/${currentTutPage}`
      );
      setTutorials(resp.data.data);
      settotalPages(resp.data.totalPages);
      setisLoading(false);
    } catch (error) {
      console.log("error getting tutorials");
      setisLoading(false);
    }
  };

  useEffect(() => {
    if (isActive) {
      getTutorials();
      //   getProducts();
    }
  }, [isActive, currentTutPage]);

  return (
    <div className="flex flex-col  ">
      <TutorialPop
        size={sizeVidPop}
        open={openVidPop}
        handleClose={handleCloseVidPop}
        tutorial={clickedVid}
      />
      <Popup size={size} open={open} handleClose={handleClose} />
      <PcProfile />
      <div className="mt-6">
        <p className="text-4xl text-[#664198] font-bold">Tutoriales</p>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center mt-[30vh] ">
          <Oval
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <>
          {tutorials.length > 0 ? (
            <div className="border-[#664198] rounded-2xl border-[3px] px-10 mr-4 mx-2 mb-5 bg-white z-10">
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10   py-4 ">
                {tutorials?.map((tutorial, index) => {
                  return (
                    <div
                      key={index}
                      className="h-[25rem] bg-[#F6F6F6] w-[24rem] flex flex-col items-center gap-2  rounded-2xl"
                    >
                      <div
                        onClick={() => {
                          setClickedVid(tutorial);
                          setOpenVidPop(true);
                          setSizeVidPop("calc(100% - 20%)");
                        }}
                        className="min-h-[15rem] w-[98%] cursor-pointer"
                      >
                        <iframe
                          src={tutorial?.videoUrl}
                          className={`h-[15rem] w-[100%] object-cover pointer-events-none`}
                        />
                      </div>
                      <div className="flex gap-8 justify-between items-center h-[10rem] w-[95%]  ">
                        <div className="flex flex-col items-start">
                          <div className="font-bold text-black text-lg">
                            {tutorial?.name}
                          </div>
                          <div>{tutorial?.description}</div>
                        </div>
                        {/* <div
                       
                        >
                          <LuPlayCircle className="text-[#f80cd5a5] text-[3rem] cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 hover:text-[#f80cd4]" />
                        </div> */}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center">
                <div className="flex gap-6 my-2 items-center">
                  <img
                    src="/dashboard/tutarrow.png"
                    alt=""
                    className="h-[2.5rem] w-[2.5rem] cursor-pointer hover:scale-110 transition-all ease-in-out duration-300"
                    onClick={() => {
                      if (currentTutPage == 1 || currentTutPage < 1) {
                        return;
                      }
                      setcurrentTutPage(currentTutPage - 1);
                    }}
                  />
                  <p className="font-bold text-[1.4rem]  ">{currentTutPage}</p>
                  <img
                    src="/dashboard/tutarrow.png"
                    alt=""
                    className="h-[2.5rem] w-[2.5rem] rotate-180 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300"
                    onClick={() => {
                      if (currentTutPage >= totalPages) {
                        return;
                      }
                      setcurrentTutPage(currentTutPage + 1);
                    }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p className="font-bold text-[2rem] "> No tutorials available</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Tutorials;
