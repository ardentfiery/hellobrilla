import React from "react";

import { FaWhatsapp } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


const Seventhsec = () => {
    
    const container = useRef(null);
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
                x:-1000,
                
            });
            gsap.from(".secondline", {
                scrollTrigger: {
                    trigger: ".secondline",
                    start: "top 50%",
                    end: "bottom 80%",
                },
                duration: 0.4,
                opacity: 0,
                x:1000,
                
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
        <div className="flex flex-col items-center justify-center gap-16 h-[70vh] md:h-[100vh]" ref={container}>
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
                        <FaWhatsapp />
                    </p>
                    <p className="text-4xl socialicons md:text-7xl">
                        <IoLogoYoutube />{" "}
                    </p>
                    <p className="text-4xl socialicons md:text-7xl">
                        {" "}
                        <FaTwitter />{" "}
                    </p>
                    <p className="text-4xl socialicons md:text-7xl">
                        <FaGoogle />
                    </p>
                    <p className="text-4xl socialicons md:text-7xl">
                        <FaFacebook />{" "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Seventhsec;
