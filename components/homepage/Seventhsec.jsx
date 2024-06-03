"use client";
import React, { useState, useEffect } from "react";

import { FaWhatsapp } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import axios from "@/app/api/axiosintercepter";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Seventhsec = () => {
  const container = useRef(null);

  const [socials, setSocials] = useState({});

  const getSocials = async () => {
    try {
      const datarecieved = await axios.get("/landingpage/getsocial");
      console.log(datarecieved);
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
      gsap.from(".contact", {
        scrollTrigger: {
          trigger: ".contact",
          start: "top 50%",
          end: "bottom 80%",
        },
        duration: 0.4,
        opacity: 0,
        x: -1000,
      });
      gsap.from(".secondline", {
        scrollTrigger: {
          trigger: ".secondline",
          start: "top 50%",
          end: "bottom 80%",
        },
        duration: 0.4,
        opacity: 0,
        x: 1000,
      });
      gsap.from(".socialicons", {
        scrollTrigger: {
          trigger: ".socialicons",
          start: "top 50%",
          end: "bottom 80%",
        },
        duration: 1.5,
        opacity: 0,
      });
    },
    { scope: container }
  );
  return (
    <div
      className="flex flex-col items-center justify-center gap-16 relative h-[70vh] md:h-[100vh]"
      ref={container}
    >
      <img
        className="animate-sideway h-[20px]  right-[70vw] -z-10 absolute "
        src="/dashboard/floatingcontact.png"
        alt=""
      />
      <div className="flex flex-col items-center">
        <div>
          <p className="contact font-bold text-4xl">Contáctanos</p>
        </div>
        <div className="flex contact ">
          <div className="h-[4px] w-[100px] bg-[#664198] ml-340px] "></div>
          <div className="h-[4px] w-[50px] bg-[#664198] ml-[30px]"></div>
        </div>
      </div>
      <div>
        <p className="text-[#664198] secondline text-2xl text-center md:text-5xl font-bold">
          CONECTATE CON LA COMUNIDAD DE BRILLA
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center socialicons">
        <div>
          <p className="text-[#664198]">SIGEUMOS</p>
        </div>
        <div className="flex flex-wrap justify-center gap-10 text-[#664198]">
          <p className="text-4xl socialicons md:text-7xl">
            <a
              href={`${socials?.whatsapp}`}
              target="_blank"
              className="text-[#664198]"
            >
              <FaWhatsapp />
            </a>
          </p>
          <p className="text-4xl socialicons md:text-7xl">
            <a
              href={`${socials?.youtube}`}
              target="_blank"
              className="text-[#664198]"
            >
              <IoLogoYoutube />
            </a>
          </p>
          <p className="text-4xl socialicons md:text-7xl">
            <a
              href={`${socials?.twitter}`}
              target="_blank"
              className="text-[#664198]"
            >
              <FaTwitter />
            </a>
          </p>
          <p className="text-4xl socialicons md:text-7xl">
            <a
              href={`${socials?.google}`}
              target="_blank"
              className="text-[#664198]"
            >
              <FaGoogle />
            </a>
          </p>
          <p className="text-4xl socialicons md:text-7xl">
            <a
              href={`${socials?.facebook}`}
              target="_blank"
              className="text-[#664198]"
            >
              <FaFacebook />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Seventhsec;
