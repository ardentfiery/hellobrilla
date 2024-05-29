"use client";
import React, { useState, useEffect } from "react";
import { BiDownArrow } from "react-icons/bi";
import { MdPlayArrow } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import axios from "../../app/api/axiosintercepter";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { toast } from "react-hot-toast";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Fifthsec = () => {
  const [brillaDetails, setbrillaDetails] = useState();

  const router = useRouter();
  const paymentFunc = async () => {
    const toastId = toast.loading("processing request...");
    try {
      const datarecieved = await axios.get("/user/authorize");
      toast.dismiss(toastId);
      router.push("/payment");
    } catch (error) {
      console.log(error);
      toast.dismiss(toastId);
      router.push("/signup");
    }
  };

  const getBrillDetails = async () => {
    try {
      const datarecieved = await axios.get("/landingpage/getbrilla");
      setbrillaDetails(datarecieved.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBrillDetails();
  }, []);
  const container = useRef(null);
  useGSAP(
    () => {
      // gsap code here...
      gsap.from(".book", {
        scrollTrigger: {
          trigger: ".book",
          start: "top 50%",
          end: "bottom 80%",
        },
        duration: 2,
        opacity: 0,
      });
    },
    { scope: container }
  );
  return (
    <div
      className="flex flex-col gap-[4rem] mt-[6rem] relative "
      ref={container}
    >
      <img
        className="animate-updown h-[20px]  left-[7vw] -z-10 absolute "
        src="/dashboard/floatingball.png"
        alt=""
      />
      <img
        className="animate-updown h-[40px] top-[60vh] right-[50vw] z-10 absolute "
        src="/landing/shape.png"
        alt=""
      />
      <img
        className="animate-topdown h-[30px] top-[50vh] left-[90vw] z-10 absolute "
        src="/landing/clean.png"
        alt=""
      />{" "}
      <div className="book flex flex-col font-bold text-3xl md:text-5xl items-center">
        <p>Promoción del Sistema</p>
        <div className="flex ">
          <div className="h-[4px] w-[100px] bg-[#664198] "></div>
          <div className="h-[4px] w-[50px] bg-[#664198] ml-[30px]"></div>
        </div>
      </div>
      <div className="md:flex-row flex flex-col gap-[4rem] w-[100vw] items-center">
        <div className="book ml-[-10rem]">
          <img className="md:h-[60vh] " src="/landing/book.png" alt="" />
        </div>
        <div className="book w-[100vw]  md:w-[30vw] flex flex-col gap-8">
          <div>
            <p className="font-semibold text-3xl text-center md:text-left ">
              MASTER BUNDLE PRO
            </p>
          </div>
          <div className="flex flex-col   gap-4 w-[100%] md:w-[35vw]  ">
            <div className="grid grid-cols-[6fr_1fr] px-4 md:px-0   text-xl font-medium ">
              <div className="flex items-center  gap-2">
                <div>
                  <MdPlayArrow />
                </div>
                <div>
                  <p>Dashboard</p>
                </div>
              </div>
              <div>
                <BiDownArrow />
              </div>
            </div>
            <div className="grid grid-cols-[6fr_1fr] px-4 md:px-0  text-xl font-medium">
              <div className="flex items-center gap-2">
                <div>
                  <MdPlayArrow />
                </div>
                <div>
                  <p>Empresa</p>
                </div>
              </div>
              <div>
                <BiDownArrow />
              </div>
            </div>
            <div className="grid grid-cols-[6fr_1fr] px-4 md:px-0 text-xl   font-medium">
              <div className="flex items-center gap-2">
                <div>
                  <MdPlayArrow />
                </div>
                <div>
                  <p>Estrategias de liderazgo</p>
                </div>
              </div>
              <div>
                <BiDownArrow />
              </div>
            </div>
            <div className="grid grid-cols-[6fr_1fr] px-4 md:px-0 text-xl  font-medium">
              <div className="flex items-center gap-2">
                <div>
                  <MdPlayArrow />
                </div>
                <div>
                  <p>Estrategias de ventas.</p>
                </div>
              </div>
              <div>
                <BiDownArrow />
              </div>
            </div>
            <div className="grid grid-cols-[6fr_1fr] px-4 md:px-0 text-xl  font-medium">
              <div className="flex items-center gap-2">
                <div>
                  <MdPlayArrow />
                </div>
                <div>
                  <p>Estrategias de Marketing</p>
                </div>
              </div>
              <div>
                <BiDownArrow />
              </div>
            </div>
            <div className="grid grid-cols-[6fr_1fr] px-4 md:px-0 text-xl  font-medium">
              <div className="flex md:items-center gap-2">
                <div>
                  <MdPlayArrow />
                </div>
                <div>
                  <p>Aprendizaje de crecimiento personal</p>
                </div>
              </div>
              <div>
                <BiDownArrow />
              </div>
            </div>
            <div className="grid grid-cols-[6fr_1fr] px-4 md:px-0 text-xl  font-medium">
              <div className="flex items-center gap-2">
                <div>
                  <MdPlayArrow />
                </div>
                <div>
                  <p>Herramientas</p>
                </div>
              </div>
              <div>
                <BiDownArrow />
              </div>
            </div>
            <div className="grid grid-cols-[6fr_1fr] px-4 md:px-0 text-xl  font-medium">
              <div className="flex items-center gap-2">
                <div>
                  <MdPlayArrow />
                </div>
                <div>
                  <p>Conferencia</p>
                </div>
              </div>
              <div>
                <BiDownArrow />
              </div>
            </div>
            <div className="grid grid-cols-[6fr_1fr] px-4 md:px-0 text-xl  font-medium">
              <div className="flex items-center gap-2">
                <div>
                  <MdPlayArrow />
                </div>
                <div>
                  <p>Podcast</p>
                </div>
              </div>
              <div>
                <BiDownArrow />
              </div>
            </div>
            <div className="grid grid-cols-[6fr_1fr] px-4 md:px-0 text-xl  font-medium">
              <div className="flex items-center gap-2">
                <div>
                  <MdPlayArrow />
                </div>
                <div>
                  <p>Mi página web</p>
                </div>
              </div>
              <div>
                <BiDownArrow />
              </div>
            </div>
            <div className="flex justify-center font-semibold md:text-3xl text-2xl">
              <p>
                COSTO:
                <span className="text-gray-600">
                  ${brillaDetails?.brillaPrice}-
                </span>{" "}
                / 1 Año
              </p>
            </div>
          </div>
        </div>
        <div className="book flex flex-col gap-8 items-center  w-[100vw] md:w-[35%]">
          <div>
            <p className="font-semibold text-2xl">La oferta expira en:</p>
          </div>
          <div className="flex md:gap-8  gap-5 mr-2 ">
            <div className="flex flex-col gap-3 items-center">
              <div className="flex gap-3">
                <div className="h-[9vh] md:w-[2.5vw] w-[8vw] rounded-lg bg-[#664198] text-white font-bold text-4xl flex items-center justify-center">
                  <p>0</p>
                </div>
                <div className="h-[9vh] md:w-[2.5vw] w-[8vw] rounded-lg bg-[#664198] text-white font-bold text-4xl flex items-center justify-center">
                  <p>0</p>
                </div>
              </div>
              <div>
                <p className="md:font-semibold font-semibold  md:text-xl items-center ">
                  Dias
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <div className="flex gap-3">
                <div className="h-[9vh] md:w-[2.5vw] w-[8vw] rounded-lg bg-[#664198] text-white font-bold text-4xl flex items-center justify-center">
                  <p>0</p>
                </div>
                <div className="h-[9vh] md:w-[2.5vw] w-[8vw] rounded-lg bg-[#664198] text-white font-bold text-4xl flex items-center justify-center">
                  <p>0</p>
                </div>
              </div>
              <div>
                <p className="md:font-semibold font-semibold md:text-xl items-center ">
                  Horas
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <div className="flex gap-3">
                <div className="h-[9vh] md:w-[2.5vw] w-[8vw] rounded-lg bg-[#664198] text-white font-bold text-4xl flex items-center justify-center">
                  <p>0</p>
                </div>
                <div className="h-[9vh] md:w-[2.5vw] w-[8vw] rounded-lg bg-[#664198] text-white font-bold text-4xl flex items-center justify-center">
                  <p>0</p>
                </div>
              </div>
              <div>
                <p className="md:font-semibold font-semibold md:text-xl items-center ">
                  Minutos
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <div className="flex gap-3">
                <div className="h-[9vh] md:w-[2.5vw] w-[8vw] rounded-lg bg-[#664198] text-white font-bold text-4xl flex items-center justify-center">
                  <p>0</p>
                </div>
                <div className="h-[9vh] md:w-[2.5vw] w-[8vw] rounded-lg bg-[#664198] text-white font-bold text-4xl flex items-center justify-center">
                  <p>0</p>
                </div>
              </div>
              <div>
                <p className="md:font-semibold font-semibold md:text-xl items-center ">
                  Segundos
                </p>
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={paymentFunc}
              className="book flex gap-2 items-center bg-[#664198] px-8 py-3 rounded-full"
            >
              <p className="text-white text-xl font-semibold">Comprar ahora</p>
              <p>
                <IoMdArrowDropright className="text-white text-3xl" />
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fifthsec;
