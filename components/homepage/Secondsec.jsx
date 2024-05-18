import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";



import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Secondsec = () => {
    const container = useRef(null);
    useGSAP(
        () => {
          // gsap code here...
          gsap.from(".leftsection", {
            scrollTrigger: {
              trigger: ".leftsection",
              start: "top 50%",
              end: "bottom 80%",
            },
            duration: 1,
            opacity: 0,
            x: -100,
          });
          gsap.from(".rightsection", {
            scrollTrigger: {
              trigger: ".rightsection",
              start: "top 50%",
            },
            duration: 1,
            opacity: 0,
            x: 100,
          });
          gsap.from(".video", {
            scrollTrigger: {
              trigger: ".video",
              start: "top 50%",
            },
            duration: 1,
            opacity: 0,
            
          });

        },
        { scope: container }
      );
    return (
        <div className="flex flex-col md:flex-row gap-8 items-center w-[80vw] ml-[15vw] h-fit py-4 md:py-0 md:h-[80vh] " ref={container}>
            <div className=" flex flex-col gap-4 text-right leftsection ">
                <div className=" w-[95%] gap-1 md:w-[20vw] flex flex-col md:gap-6 ">
                    <div className="flex items-center md:gap-2 text-right  justify-end w-[100%]">
                        <div>
                            <p className="text-2xl font-semibold ">
                                lorem ipsu
                            </p>
                        </div>
                        <div>
                            <FaCircleCheck className="text-[#803DA1]" />
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Temporibus dolorum sint
                        </p>
                    </div>
                </div>

                <div className="w-[95%] md:w-[20vw] gap-1 flex flex-col md:gap-6">
                    <div className="flex items-center gap-2 justify-end w-[100%]">
                        <div>
                            <p className="text-2xl font-semibold">lorem ipsu</p>
                        </div>
                        <div>
                            <FaCircleCheck className="text-[#803DA1]" />
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Temporibus dolorum sint
                        </p>
                    </div>
                </div>
                <div className="w-[95%] md:w-[20vw] gap-1 flex flex-col md:gap-6">
                    <div className="flex items-center gap-2 justify-end w-[100%]">
                        <div>
                            <p className="text-2xl font-semibold">lorem ipsu</p>
                        </div>
                        <div>
                            <FaCircleCheck className="text-[#803DA1]" />
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Temporibus dolorum sint
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div>
                    <img
                        className="video h-[10rem]  md:h-[50vh] "
                        src="/landing/circle.png"
                        alt=""
                    />
                </div>
                <div className="w-[24vw]">
                    <img
                        className="video h-[100%] md:h-[100%] md:w-[100%] absolute top-0 md:top-[] "
                        src="/landing/playvideo.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="rightsection w-[100vw] md:w-[100%]">
                <div className="flex flex-col  gap-4 ">
                    <div className="w-[100%] md:w-[20vw]  flex flex-col gap-1 md:gap-6">
                        <div className="flex items-center gap-2 ">
                            <div>
                                <p className="text-2xl font-semibold">
                                    lorem ipsu
                                </p>
                            </div>
                            <div>
                                <FaCircleCheck className="text-[#803DA1]" />
                            </div>
                        </div>
                        <div>
                            <p className="font-semibold">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Temporibus dolorum sint
                            </p>
                        </div>
                    </div>
                    <div className="w-[95%] md:w-[20vw] flex flex-col gap-1 md:gap-6">
                        <div className="flex items-center gap-2 ">
                            <div>
                                <p className="text-2xl font-semibold">
                                    lorem ipsu
                                </p>
                            </div>
                            <div>
                                <FaCircleCheck className="text-[#803DA1]" />
                            </div>
                        </div>
                        <div>
                            <p className="font-semibold">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Temporibus dolorum sint
                            </p>
                        </div>
                    </div>
                    <div className="w-[95%] md:w-[20vw] flex flex-col gap-1 md:gap-6">
                        <div className="flex items-center gap-2 ">
                            <div>
                                <p className="text-2xl font-semibold">
                                    lorem ipsu
                                </p>
                            </div>
                            <div>
                                <FaCircleCheck className="text-[#803DA1]" />
                            </div>
                        </div>
                        <div>
                            <p className="font-semibold">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Temporibus dolorum sint
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Secondsec;
