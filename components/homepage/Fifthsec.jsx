import React from "react";
import { BiDownArrow } from "react-icons/bi";
import { MdPlayArrow } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import axios from "../../app/api/axiosintercepter";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Fifthsec = () => {
  const router = useRouter();
  const paymentFunc = async () => {
    try {
      const datarecieved = await axios.get("/user/authorize");
      console.log(datarecieved.data);
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
              image: "https://res.cloudinary.com/do7fzmdl3/image/upload/q_auto:low/brilla_mfs7nk.png",
              // eventId:currentEvent._id
            },
            data: datarecieved.data,
          }
        );
        const result = await stripe.redirectToCheckout({
          sessionId: resp.data.sessionId,
        });
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
      router.push("/signup");
    }
  };

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
    <div className="flex flex-col gap-[4rem] mt-[6rem] " ref={container}>
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
                <span className="text-gray-600">$700-</span> $450 / 1 Año
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
              className="book flex gap-2 items-center bg-[#664198] px-8 py-5 rounded-full"
            >
              <p className="text-white text-2xl font-semibold">Comprar ahora</p>
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
