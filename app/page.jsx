"use client";
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoMdArrowDropright } from "react-icons/io";
import Secondsec from "@/components/homepage/Secondsec";
import Thirdsec from "@/components/homepage/Thirdsec";
import Fourthsec from "@/components/homepage/Fourthsec";
import Fifthsec from "@/components/homepage/Fifthsec";
import Sixthsec from "@/components/homepage/Sixthsec";
import Seventhsec from "@/components/homepage/Seventhsec";
import Eighthsec from "@/components/homepage/Eighthsec";
import Tenthsec from "@/components/homepage/Tenthsec";
import Ninthsec from "@/components/homepage/Ninthsec";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";

import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const router = useRouter();
  const [showNav, setshowNav] = useState(false);
  const container = useRef(null);

  useGSAP(
    () => {
      let tl = gsap.timeline();
      tl.from(".nav", {
        y: -50,
        opacity: 0,
        duration: 0.2,
        stagger: 0.1,
      })
        .from(".land", {
          x: -100,
          duration: 0.2,
          opacity: 0,
        })
        .from(".landgirl", {
          x: 200,
          opacity: 0,
          duration: 0.2,
        });
    },
    { scope: container }
  );
  return (
    <div className="overflow-x-hidden" ref={container}>
      <div className="bg-gradient-to-r from-[#b894e4] to-white">
        <div className="md:flex-row flex flex-col overflow-x-hidden  ">
          <div className="md:flex-row flex md:justify-between  px-4 py-4  items-center md:w-[90vw] md:h-[20vh] ">
            <div className="w-[55vw] md:w-auto flex justify-between">
              <div>
                <GiHamburgerMenu
                  onClick={() => {
                    setshowNav(true);
                  }}
                  className="text-[#803DA1] text-3xl md:hidden"
                />
              </div>
              <div>
                <img
                  className=" nav h-[4vh] md:h-[8vh] md:ml-[10rem] "
                  src="/landing/logo.png"
                  alt=""
                />
              </div>
            </div>

            {showNav ? <Secondnav setshowNav={setshowNav} /> : null}

            <div className="md:flex w-[40vw] gap-16 justify-end font-bold text-xl hidden ">
              <div className="nav">Incio</div>
              <div className="nav">Producto</div>
              <div className="nav flex items-center justify-center gap-2">
                <div>Empresa</div>
                <div>
                  <TiArrowSortedDown />
                </div>
              </div>
            </div>
            <div className="md:flex w-[20vw] justify-around hidden ">
              {" "}
              <div>
                <button
                  onClick={() => {
                    router.push("/login");
                  }}
                  className="text-[#803DA1] nav font-semibold border-[1px] rounded-3xl h-[40px] w-[120px] border-[#803DA1]"
                >
                  Ingresar
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    router.push("/signup");
                  }}
                  className="bg-[#803DA1] nav rounded-3xl h-[40px] w-[130px] text-white"
                >
                  Registrate
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex-row flex flex-col-reverse  gap-[1rem] md:h-[80vh] relative">
          <div className="land flex flex-col gap-3  md:gap-6  w-[90vw] md:w-[35vw] mt-16 ml-[9vw]  h-[60vh] ">
            <div>
              <p className="text-3xl text-[#803DA1] md:text-5xl font-semibold">
                ¡Brilla más!
              </p>
            </div>
            <div>
              <p className="text-xl md:text-3xl ">
                &apos;"Decido brillar con determinación
                <br /> y excelencia, dejando una huella
                <br /> imborrable de bondad y<br />
                inspiración en cada paso.&apos;"
              </p>
            </div>
            <div className="mt-14">
              <button className="flex justify-center items-center  bg-[#803DA1] px-10 py-4   rounded-3xl text-white ">
                <p>Comienza acá</p>
                <div>
                  <IoMdArrowDropright />
                </div>
              </button>
            </div>
            <div>
              <img
                className="h-[25vh] left-[5rem] z-40 absolute bottom-[7rem]"
                src="/landing/rounded.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <img
              className="landgirl md:h-[70vh]  md:mt-0 object-cover  "
              src="/landing/girl.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Secondsec />
      <Thirdsec />
      <Fourthsec />
      <Fifthsec />
      <Sixthsec />
      <Seventhsec />
      <Eighthsec />
      <Ninthsec />
      <Tenthsec />
    </div>
  );
};

const Secondnav = ({ setshowNav }) => {
  const router = useRouter();
  return (
    <div className="h-[100vh] w-[100vw] bg-purple-100 z-50 absolute left-0 top-0">
      <IoCloseSharp
        onClick={() => {
          setshowNav(false);
        }}
        className="text-4xl mt-6 ml-6"
      />

      <div className=" flex flex-col items-center justify-start pt-16    gap-10 font-bold text-xl ">
        <div className="nav">Incio</div>
        <div className="nav">Producto</div>
        <div className="nav flex items-center justify-center gap-2">
          <div>Empresa</div>
          <div>
            <TiArrowSortedDown />
          </div>
        </div>
        {/* <div className="flex flex-col gap-6 w-[20vw] justify-around  "> */}{" "}
        <div>
          <button
            onClick={() => {
              router.push("/login");
            }}
            className="text-[#803DA1] nav font-semibold border-[1px] rounded-3xl h-[40px] w-[120px] border-[#803DA1]"
          >
            Ingresar
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              router.push("/signup");
            }}
            className="bg-[#803DA1] nav rounded-3xl h-[40px] w-[130px] text-white"
          >
            Registrate
          </button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
export default Home;
