import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


const Fourthsec = () => {
    const container = useRef(null);
    useGSAP(
        () => {
            // gsap code here...
            gsap.from(".image", {
                scrollTrigger: {
                    trigger: ".image",
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
        <div className="text-white relative overflow-hidden "ref={container}>
            <div className="h-[30rem] md:h-fit w-[100vw]">
                <img
                    className=" w-[100%] h-[100%]  object-cover overflow-hidden"
                    src="/landing/person.jpeg"
                    alt=""
                />
            </div>
            <div className="image absolute top-0 z-50 md:h-[80vh] h-[100%] bg-[#00000096] w-[100%] flex flex-col items-center justify-center gap-10">
                <div>
                    <p className="font-bold text-3xl text-center md:text-5xl">
                        ¡ÚNETE AHORA A BRILLASYSTEM{" "}
                    </p>
                </div>
                <div>
                    <p className="md:text-3xl text-xl px-2 md:px-0  font-bold text-center  ">
                        para transformar tu vida, aprender de expertos en vivo y
                        aprovechar el sistema para
                        <br /> crecer personal y profesionalmente en la nueva
                        economía!{" "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Fourthsec;
