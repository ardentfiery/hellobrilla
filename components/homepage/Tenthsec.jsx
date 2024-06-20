import React, { useState, useEffect} from "react";
import { MdPlayArrow } from "react-icons/md";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import axios from "@/app/api/axiosintercepter";
import { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter,FaTelegram,FaSms,FaInstagram    } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
const Tenthsec = () => {
  const container = useRef(null);
  const [socials, setSocials] = useState({});

  const getSocials = async () => {
    try {
      const datarecieved = await axios.get("/landingpage/getsocial");
      setSocials(datarecieved.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSocials();
  }, []);
  useGSAP(
    () => {
      // gsap code here...
      gsap.from(".foot", {
        scrollTrigger: {
          trigger: ".foot",
          start: "top 50%",
          end: "bottom 80%",
        },
        duration: 0.5,
        opacity: 0,
        x: 100,
      });
    },
    { scope: container }
  );
  return (
    <div className="text-white w-[100vw] h-fit relative ">
      <img
        className="animate-topdown h-[30px] top-[10vh] left-[90vw] z-10 absolute "
        src="/landing/clean.png"
        alt=""
      />{" "}
      <img
        className="animate-sideway h-[30px] top-[5vh] left-[20vw] z-10 absolute "
        src="/landing/diamond.png"
        alt=""
      />{" "}
      <img
        className="animate-topdown h-[10px] top-[5vh] left-[50vw] z-10 absolute "
        src="/landing/star.png"
        alt=""
      />{" "}
      <div className="flex flex-col md:flex-row w-[100vw] ">
        <div className="bg-[#100c34] flex flex-col justify-center  gap-4 md:gap-0  md:flex-row  w-[100%] md:w-[70%]  h-fit md:h-auto ">
          <div className="flex  flex-col gap-6 items-center py-4 md:pt-8  w-[100%] md:w-[70%]  ">
            <div className="flex flex-col  gap-5 w-[60%] mx-auto">
              <div>
                <img
                  className="foot h-[5vh]"
                  src="/landing/brillalogo.png"
                  alt=""
                />
              </div>
              <div>
                <p className="text-sm foot  text-left w-[80%] ">
                  Aprende, construye, lanza y escala tu negocio de mercadeo en
                  red con nuestra solución integral para la nueva economía.
                </p>
              </div>
              <div className="flex items-center ">
                <input
                  className="foot h-[35px] w-[320px] bg-gray-500 text-white placeholder-white p-2"
                  type="text"
                  placeholder="Email"
                />
                <p className="foot w-[30px] flex justify-center items-center h-[35px] bg-[#664198]">
                  <MdPlayArrow />
                </p>
              </div>
            </div>
          </div>
          <div className="foot w-[20%] hidden md:inline pt-8">
            <div className="h-[30vh] w-[2px] bg-gray-300"></div>
          </div>
          <div className="foot w-[100%] flex justify-center  md:hidden pt-8">
            <div className="w-[8rem]  h-[2px] bg-gray-300"></div>
          </div>

          <div className="w-[100%]  md:w-[30%] flex pb-8 md:pt-8 flex-col gap-6 ">
            <div>
              <p className="foot text-2xl font-semibold text-center md:text-left">
                Enlaces
              </p>
            </div>
            <div className="flex flex-row  px-10 md:px-0  flex-wrap justify-center  md:flex-col gap-4 text-sm">
              <p className="foot mt-0">Inicio</p>
              <p className="foot mt-0">Producto </p>
              <p className="foot mt-0">Empresa</p>
              <p className="foot mt-0"> Historia</p>
              <p className="foot mt-0">Misión</p>
              <p className="foot mt-0">Visión</p>
            </div>
          </div>
        </div>
        <div className="bg-[#180c4c] w-[100%] md:w-[30%] flex flex-col items-center justify-between p-16 gap-7">
          <div>
            <p className="text-[1.6rem]  ">Las Vegas NV, United States </p>
          </div>
          <div>
            <p className="foot text-3xl font-bold text-center">Contáctanos</p>
            <div>
              <div className="flex flex-wrap items-center justify-center gap-3 text-[#664198]">
                <p className="text-4xl socialicons md:text-5xl">
                  <a
                    href={`${socials?.whatsapp}`}
                    target="_blank"
                    className="text-[#ffffff]"
                  >
                    <FaWhatsapp />
                  </a>
                </p>
                <p className="text-4xl socialicons md:text-5xl">
                  <a
                    href={`${socials?.telegram}`}
                    target="_blank"
                    className="text-[#ffffff]"
                  >
                    <FaTelegram />
                  </a>
                </p>
                <p className="text-4xl socialicons md:text-5xl">
                  <a
                    href={`sms:/${socials?.sms}`}
                    target="_blank"
                    className="text-[#ffffff]"
                  >
                    <FaSms />
                  </a>
                </p>
                <p className="text-4xl socialicons md:text-5xl">
                  <a
                    href={`${socials?.youtube}`}
                    target="_blank"
                    className="text-[#ffffff]"
                  >
                    <IoLogoYoutube />
                  </a>
                </p>
                <p className="text-4xl socialicons md:text-5xl">
                  <a
                    href={`${socials?.twitter}`}
                    target="_blank"
                    className="text-[#ffffff]"
                  >
                    <FaTwitter />
                  </a>
                </p>
                <p className="text-4xl socialicons md:text-5xl">
                  <a
                    href={`${socials?.instagram}`}
                    target="_blank"
                    className="text-[#ffffff]"
                  >
                    <FaInstagram />
                  </a>
                </p>
                <p className="text-4xl socialicons md:text-5xl">
                  <a
                    href={`${socials?.facebook}`}
                    target="_blank"
                    className="text-[#ffffff]"
                  >
                    <FaFacebook />
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col gap-6">
            <div className="foot flex gap-2 items-center">
              <p>
                <FaHouseChimney className="text-xl" />
              </p>
              <p>Dirección</p>
            </div>
            <div className="foot  flex gap-2 items-center">
              <p>
                <MdOutlineEmail className="text-xl" />
              </p>
              <p>Email</p>
            </div>
            <div className="foot  flex gap-2 items-center">
              <p>
                <BsTelephone className="text-xl" />
              </p>
              <p>Telephono</p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="h-[1px] bg-white w-[100vw]"></div>
      <div className="foot bg-[#100c34] text-sm">
        <div className="flex flex-col md:flex-row md:ml-6 justify-around  items-center h-[4rem] ">
          <div className="foot">
            © COPYRIGHT 2024 BRYLLASISTEM - BY apeXgoo.com
          </div>
          <div className="foot  flex items-center gap-3 md:gap-8 w-[35%] md:w-[15%]">
            <p>Términos & condiciones - Privacidad</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tenthsec;
