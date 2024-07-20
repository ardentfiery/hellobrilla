import React from "react";
import { IoIosSearch } from "react-icons/io";

const PcProfile = () => {
  return (
    <div className="flex justify-between h-[6rem] ">
      <div className="flex  items-center justify-end pr-5 py-2  ">
        <div className="sm:w-[50%] ">
          <div className="w-[15rem] h-[2.4rem]  gap-2 border-[3px] rounded-2xl border-[#664198] flex items-center">
            <div>
              <IoIosSearch className="text-xl" />
            </div>
            <div className=" ">
              <input
                className=" h-[2rem] w-[] md:w-fit outline-none rounded-xl"
                type="text"
                placeholder="Buscar de Brilla System"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute hidden lg:flex right-[6rem] top-0 mb-2 flex-col items-center z-0 ">
        <div className="flex gap-4 h-[15vh] items-center">
          <div className="h-[20px] w-[20px]">
            <img
              className="h-[90%] w-[90%]"
              src="/dashboard/notification.png"
              alt=""
            />
          </div>
          <div>
            <div
              onClick={() => {
                handleOpenProfile("calc(100% - 30%)");
              }}
              className="h-[80px] w-[80px] object-fit rounded-full overflow-hidden "
            >
              <img
                className="h-[100%] w-[100%]"
                src="/dashboard/girlie.jpg"
                alt=""
              />
              ;
            </div>
          </div>

          <div>
            <div className="h-[20px] w-[20px]">
              <img
                className="h-[80%] w-[90%]"
                src="/dashboard/msg.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="text-[#803da1] font-semibold flex flex-col items-center gap-0">
          <p>75%</p>
        </div>
      </div>
    </div>
  );
};

export default PcProfile;
