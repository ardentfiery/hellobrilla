import React from "react";
import { FaRegCopy } from "react-icons/fa";
import axios from "@/app/api/axiosintercepter";
import { toast } from "react-hot-toast";
import { Modal } from "rsuite";

export const Profile = ({ open, size, handleClose }) => {
  const logOutUser = async () => {
    const toastId = toast.loading("logging out...");
    try {
      await axios.get("/user/logout");
      toast.success("Logged Out !");
      toast.dismiss(toastId);
      router.push("/login");
    } catch (error) {
      toast.success("Log Out failed !");
      toast.dismiss(toastId);
    }
  };

  return (
    <div>
      <Modal size={size} open={open} onClose={handleClose} className="">
        <img
          onClick={handleClose}
          src="/dashboard/crossbtn.png"
          alt="classbtn"
          className="absolute top-2 right-[4rem] h-[2.4rem] w-[2.4rem] invert cursor-pointer"
        />
        <Modal.Body className="hide-scrollbar select-none">
          <div className="w-[20rem] md:w-[90%] flex-col gap-6 items-center md:flex mt-10 border-[#664198] border-[3px] rounded-3xl ">
            <div className="flex flex-row items-center ">
              <div className="flex gap-6 h-[15vh] items-center ">
                <div className="h-[24px] w-[24px]">
                  <img
                    className="h-[100%] w-[100%]"
                    src="/dashboard/notification.png"
                    alt=""
                  />
                </div>
                <div>
                  <div className="h-[80px] w-[80px] object-fit rounded-full overflow-hidden ">
                    <img
                      className="h-[100%] w-[100%]"
                      src="/dashboard/girlie.jpg"
                      alt=""
                    />
                    ;
                  </div>
                </div>
                <div className="h-[24px] w-[24px]">
                  <img
                    src="/dashboard/msg.png"
                    className="h-[100%] w-[100%]"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-[#803da1] font-semibold flex flex-col items-center gap-0">
                <p>75%</p>
                <p>completado</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div>
                <p className="text-3xl font-semibold text-black">
                  Llecenia Robles
                </p>
              </div>
              <div>
                <p className="underline">Usuario:Lleci</p>
              </div>
              <div>
                <p>link para referer</p>
              </div>
              <div className="flex gap-2">
                <div>
                  <FaRegCopy />
                </div>
                <div>
                  <a href="https://brillasystem.com/lleci">
                    https://brillasystem.com/lleci
                  </a>
                </div>
              </div>
              <div className="h-[1px] w-[250px] bg-black"></div>
            </div>
            <div>
              <div className="text-2xl font-semibold">FILTRAR POR FECHAS</div>
              <div className="h-[20vh] w-[18rem]">
                <img
                  className="h-[100%] w-[100%]"
                  src="/dashboard/calendar.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="flex justify-between w-[20rem] px-6 ">
                <div className=" text-gray-500 ">
                  <p className="text-xl">Desde</p>
                  <div className=" text-white rounded-lg text-center flex gap-1 py-2 px-2 bg-[#803DA1]">
                    <div className="   ">
                      {" "}
                      <p>DD</p>{" "}
                    </div>
                    <div className="    ">
                      {" "}
                      <p>MM</p>{" "}
                    </div>
                    <div className="  ">
                      {" "}
                      <p>AAAA</p>{" "}
                    </div>
                  </div>
                </div>
                <div className=" text-gray-500 ">
                  <p className="text-xl">Haste</p>
                  <div className=" text-white rounded-lg text-center flex gap-1 py-2 px-2 bg-[#803DA1]">
                    <div className="   ">
                      {" "}
                      <p>DD</p>{" "}
                    </div>
                    <div className="    ">
                      {" "}
                      <p>MM</p>{" "}
                    </div>
                    <div className="  ">
                      {" "}
                      <p>AAAA</p>{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button className="h-[30px] w-[150px] rounded-xl  border-[3px] text-[#803da1] border-[#803da1]">
                  Eliminar filtro
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2  ">
              <div>
                <p className="text-black text-xl font-semibold text-center border-[#803da1] border-[2px] rounded-xl px-4 py-3">
                  MI ACTITUD HOY ES
                  <br />{" "}
                  <span className="text-[#803da1] text-2xl font-semibold">
                    GANADOR
                  </span>
                </p>
              </div>
              <div
                className="flex gap-2 text-[1.4rem] items-center justify-center"
                onClick={() => {
                  logOutUser();
                }}
              >
                <div className="h-[10px] w-[10px]">
                  <img src="/dashboard/logout.png" alt="" />
                </div>
                <div>
                  <p className="text-[#803da1]">Cerrar sesion</p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
