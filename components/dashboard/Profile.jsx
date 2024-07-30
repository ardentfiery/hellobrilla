"use client";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import axios from "../../app/api/axiosintercepter";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Calendar from "react-calendar";
import { useDashContext } from "../../context/DashboardContext";

export const Profile = () => {
  const router = useRouter();
  const [value, onChange] = useState(new Date());
  const { userData } = useDashContext();

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
    <div className="w-full px-2">
      <div className="w-full   flex-col gap-6 items-center md:flex mt-10 border-[#664198] border-[3px] rounded-3xl ">
        <div className="flex flex-col items-center ">
          <div className="flex gap-6  items-center ">
            <div className="h-[24px] w-[24px]">
              <img
                className="h-[100%] w-[100%]"
                src="/dashboard/notification.png"
                alt=""
              />
            </div>
            <div>
              <div className="h-[80px] w-[80px] object-fit rounded-full overflow-hidden ">
                <img className="h-[100%] w-[100%]" src="/user.png" alt="" />;
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
              {userData?.name}
            </p>
          </div>
          <div>
            <p className="underline">Usuario: {userData?.username}</p>
          </div>
          <div>
            <p>link para referer</p>
          </div>
          <div className="flex gap-2 w-[80%] m-auto">
            <div
              onClick={() => {
                navigator.clipboard.writeText(
                  `https://brillasystem.com/${userData?._id}`
                );
              }}
            >
              <FaRegCopy />
            </div>
            <div className="w-[90%]">
              <a className="break-words" href="">
                https://brillasystem.com/{userData?._id}
              </a>
            </div>
          </div>
          <div className="h-[1px] w-[250px] bg-black"></div>
        </div>
        <div className=" w-full flex flex-col items-center">
          <div className="text-2xl font-semibold">FILTRAR POR FECHAS</div>
          <div className="h-fit w-[95%] max-w-fit  rounded-xl overflow-hidden border-[2px] border-[#803DA1]">
            <Calendar onChange={onChange} value={value} />
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
            className="flex gap-2 group text-[1.4rem] items-center justify-center cursor-pointer hover:font-semibold transition-all ease-in-out duration-200"
            onClick={() => {
              logOutUser();
            }}
          >
            <div className="h-[10px] w-[10px] group-hover:scale-110">
              <img src="/dashboard/logout.png" alt="" />
            </div>
            <div>
              <p className="text-[#803da1]">Cerrar sesion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
