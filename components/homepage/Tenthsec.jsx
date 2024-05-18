import React from "react";
;
import { MdPlayArrow } from "react-icons/md";

import { FaHouseChimney } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

const Tenthsec = () => {
    const container = useRef(null);
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
        <div className="text-white w-[100vw] h-fit" >
            <div className="flex flex-col md:flex-row w-[100vw] bg-red-300">
                <div className="bg-[#100c34] flex flex-col gap-4 md:gap-0  md:flex-row  w-[100%] md:w-[70%]  h-fit md:h-[40vh] ">
                    <div className="flex  flex-col gap-6 items-center py-4 md:pt-8  w-[100%] md:w-[70%] ">
                        <div className="flex flex-col  gap-5">
                            <div>
                                <img
                                    className="foot h-[5vh]"
                                    src="/landing/brillalogo.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <p className="text-sm foot  text-left">
                                    Lorem ipsum dolor sit amet consectetur.
                                    Euismod
                                    <br /> eu aliquam vel facilisi in ante non
                                    sed. Enim
                                    <br /> adipiscing montes viverra etiam
                                    adipiscing aliquet
                                    <br /> rhoncus blandit.
                                </p>
                            </div>
                            <div className="flex items-center ">
                                <input
                                    className="foot h-[35px] w-[320px] bg-gray-500 text-white placeholder-white p-2"
                                    type="text"
                                    placeholder="Email"
                                />
                                <p className="foot w-[30px] flex justify-center items-center h-[35px] bg-purple-600">
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
                            <p className="foot text-2xl font-semibold text-center md:text-left">Enlaces</p>
                        </div>
                        <div className="flex flex-row px-10 md:px-0  flex-wrap justify-center  md:flex-col gap-4 text-sm">
                            <p className="foot">Inicio</p>
                            <p className="foot">Producto </p>
                            <p className="foot">Empresa</p>
                            <p className="foot"> Historia</p>
                            <p className="foot">Misión</p>
                            <p className="foot">Visión</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#180c4c] w-[100%] md:w-[30%] flex flex-col items-center p-16 gap-7">
                    <div>
                        <p className="foot text-3xl font-semibold">Contáctanos</p>
                    </div>
                    <div className="flex flex-col gap-6">
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
                    </div>
                </div>
            </div>
            <div className="foot bg-[#100c34] text-sm">
                <div>
                    <hr />
                </div>
                <div className="flex md:ml-6 justify-around  items-center h-[4rem] ">
                    <div className="foot">Copyrightt2024</div>
                    <div className="foot flex gap-3 md:gap-8 w-[35%] md:w-[8%]">
                        <p>Terminos</p>
                        <p>Privacidad</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tenthsec;
