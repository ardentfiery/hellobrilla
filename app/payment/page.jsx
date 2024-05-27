"use client";
import React from "react";
import { BiDownArrow } from "react-icons/bi";
import { MdPlayArrow } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { loadStripe } from "@stripe/stripe-js";
import axios from "@/app/api/axiosintercepter";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
const page = () => {
  const router = useRouter();

  const paymentFunc = async () => {
    const toastId = toast.loading("processing request...");
    try {
      const datarecieved = await axios.get("/user/authorize");
      try {
        const stripe = await loadStripe(
          "pk_test_51OdbKnSDrQbUV5GODnck4S7qTTAI1C7Cb2IIjJmcb6HLlHymyzQXpfdTUfbn0hFEbzVcu9HijzBuWGKMfch1wU8O00ZTvLKR3G"
        );
        const resp = await axios.post(
          //   "http://localhost:3502/create-checkout-session-brilla",
          "/create-checkout-session-brilla",
          // "http://localhost:5000/create-checkout-session",
          {
            product: {
              name: "Brilla system ",
              price: 400,
              image:
                "https://res.cloudinary.com/do7fzmdl3/image/upload/q_auto:low/brilla_mfs7nk.png",
              // eventId:currentEvent._id
            },
            data: datarecieved.data,
          }
        );
        const result = await stripe.redirectToCheckout({
          sessionId: resp.data.sessionId,
        });
        toast.dismiss(toastId);
      } catch (error) {
        toast.dismiss(toastId);
        console.log(error);
      }
    } catch (error) {
      console.log(error);
      router.push("/signup");
    }
  };
  return (
    <div className="flex flex-col gap-[4rem] mt-[6rem] ">
      <div className="book flex flex-col font-bold text-3xl md:text-5xl items-center">
        <p>Buy System In Order To Access Dashboard</p>
        <div className="flex ">
          <div className="h-[4px] w-[20rem] bg-[#664198] "></div>
          <div className="h-[4px] w-[10rem] bg-[#664198] ml-[30px]"></div>
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
                <span className="text-gray-600">$700-</span> $450 / 1 Año
              </p>
            </div>
            <div
              onClick={() => {
                paymentFunc();
              }}
              className="flex justify-center mt-2"
            >
              <button className="border-[#664198] border-[1px] py-2 px-[6rem] font-bold text-[1.2rem] rounded hover:bg-[#664198] hover:text-white transition-all ease-in-out duration-300">
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
