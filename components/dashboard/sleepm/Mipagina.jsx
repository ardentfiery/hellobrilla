"use client";
import React from "react";
import { useDashContext } from "../../../context/DashboardContext";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";

const Mipagina = () => {
  const { userId } = useDashContext();

  return (
    <div className="h-[100vh] max-h-[100%]  flex items-center justify-center">
      <div className="flex gap-6 flex-col md:flex-row">
        <div className="relative w-[15rem] h-[16rem] py-2 pt-6 px-2 bg-white shadow-xl rounded-xl border-[1px] border-[#000000af] flex flex-col gap-4 items-center">
          <div className="">
            <img src="/website.png" className="h-[8rem] w-[8rem]" alt="" />
          </div>
          <button
            onClick={() => {
              window.open(`/slepweb/${userId}`, "_blank");
            }}
            className="absolute bottom-2 border-[#803DA1] border-[2px] rounded-xl px-10 py-3 text-[1.1rem] font-medium hover:text-white hover:bg-[#803DA1] transition-all ease-in-out duration-300 "
          >
            abrir sitio web
          </button>
        </div>
        <div className="relative w-[15rem] h-[16rem] py-2 pt-6 px-2 bg-white shadow-xl rounded-xl border-[1px] border-[#000000af] flex flex-col gap-4 items-center">
          <div className="">
            <img src="/copy.png" className="h-[8rem] w-[8rem]" alt="" />
          </div>
          <CopyToClipboard
            text={`https://brillasystem.com/slepweb/${userId}`}
            onCopy={(text, result) => {
              console.log(text);
              toast.success("URL copiado con éxito");
            }}
          >
            <button className="absolute w-[95%] bottom-2 border-[#803DA1] border-[2px] rounded-xl px-10 py-3  text-[1.1rem] font-medium hover:text-white hover:bg-[#803DA1] transition-all ease-in-out duration-300 ">
              copiar la URL del sitio web
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default Mipagina;
