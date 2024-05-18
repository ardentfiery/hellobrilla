import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Sixthsec = () => {
    const container = useRef(null);
    useGSAP(
        () => {
            // gsap code here...
            gsap.from(".eventos", {
                scrollTrigger: {
                    trigger: ".eventos",
                    start: "top 50%",
                    end: "bottom 80%",
                },
                duration: 0.5,
                opacity: 0,
                x:-1000,
                
            });
            gsap.from(".eventosleft", {
                scrollTrigger: {
                    trigger: ".eventosleft",
                    start: "top 50%",
                    end: "bottom 80%",
                },
                duration: 0.5,
                opacity: 0,
                x:1000,
                
            });
        
       
        },
        { scope: container }
    );
    return (
        <div className="mt-[15vh]" ref={container}>
            <div className="eventos flex flex-col items-center">
                <div>
                    <p className="font-bold text-4xl">Eventos</p>
                </div>
                <div className="flex ">
                    <p className="h-[4px] w-[100px] bg-[#803DA1] ml-340px] "></p>
                    <p className="h-[4px] w-[50px] bg-[#803DA1] ml-[30px]"></p>
                </div>
            </div>
            <div className="eventos md:flex-row flex flex-col items-center  gap-[5rem]">
                <div className="h-[25rem] md:h-[80vh] mt-4 md:mt-0">
                    <img
                        className="h-[100%] w-auto"
                        src="/landing/Baner1.png"
                        alt=""
                    />
                </div>
                <div className="eventos flex flex-col gap-4  px-7 md:px-0">
                    <div>
                        <p className="text-3xl font-semibold">
                            Evento de superación
                        </p>
                    </div>
                    <div className="font-medium text-xl flex flex-col gap-3 ">
                        <div className="flex gap-2 items-center justify-start">
                            <p>.</p>
                            <p>Ejemplo 1</p>
                        </div>
                        <div className="flex gap-2 items-center justify-start">
                            <p>.</p>
                            <p>Ejemplo 2</p>
                        </div>
                        <div className="flex gap-2 items-center justify-start">
                            <p>.</p>
                            <p>Ejemplo 3</p>
                        </div>
                    </div>
                    <div className="eventos">
                        <p className="text-xl font-medium">
                            Hola lo que quiero escribir acá
                            <br /> es el texto de la información del
                            <br /> evento, solo se requiere un
                            <br />
                            espacio para que coloquen lo que deseen
                        </p>
                    </div>
                    <div className="eventos">
                        <p className="text-3xl font-semibold text-center md:text-left">
                            COSTO:
                            <span className="text-3xl font-light line-through">
                                ##$
                            </span>{" "}
                            ##v
                        </p>
                    </div>
                </div>
                <div className=" eventosleft flex flex-col gap-8 md:w-[45vw] items-center ">
                    <div>
                        <p className="font-semibold md:text-2xl text-xl ">
                            La oferta del Evento terminará en:
                        </p>
                    </div>
                    <div className="flex md:gap-8 gap-3 ">
                        <div className="flex flex-col gap-3 items-center">
                            <div className="flex gap-3">
                                <div className="h-[9vh] md:w-[2.5vw]  w-[8vw]  rounded-lg bg-[#803DA1] text-white font-bold text-4xl flex items-center justify-center">
                                    <p>0</p>
                                </div>
                                <div className="h-[9vh] md:w-[2.5vw]  w-[8vw]  rounded-lg bg-[#803DA1] text-white font-bold text-4xl flex items-center justify-center">
                                    <p>0</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold md:text-xl items-center ">
                                    Dias
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 items-center">
                            <div className="flex gap-3">
                                <div className="h-[9vh] md:w-[2.5vw]  w-[8vw]  rounded-lg bg-[#803DA1] text-white font-bold text-4xl flex items-center justify-center">
                                    <p>0</p>
                                </div>
                                <div className="h-[9vh] md:w-[2.5vw]  w-[8vw]  rounded-lg bg-[#803DA1] text-white font-bold text-4xl flex items-center justify-center">
                                    <p>0</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold md:text-xl items-center ">
                                    Horas
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 items-center">
                            <div className="flex gap-3">
                                <div className="h-[9vh] md:w-[2.5vw]  w-[8vw]  rounded-lg bg-[#803DA1] text-white font-bold text-4xl flex items-center justify-center">
                                    <p>0</p>
                                </div>
                                <div className="h-[9vh] md:w-[2.5vw]  w-[8vw]  rounded-lg bg-[#803DA1] text-white font-bold text-4xl flex items-center justify-center">
                                    <p>0</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold md:text-xl items-center ">
                                    Minutos
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 items-center">
                            <div className="flex gap-3">
                                <div className="h-[9vh] md:w-[2.5vw]  w-[8vw]  rounded-lg bg-[#803DA1] text-white font-bold text-4xl flex items-center justify-center">
                                    <p>0</p>
                                </div>
                                <div className="h-[9vh] md:w-[2.5vw]  w-[8vw]  rounded-lg bg-[#803DA1] text-white font-bold text-4xl flex items-center justify-center">
                                    <p>0</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold md:text-xl items-center ">
                                    Segundos
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="eventosleft">
                        <button className="flex gap-2 items-center bg-[#803DA1] px-8 py-5 rounded-full">
                            <p className="text-white text-2xl font-semibold">
                                Comprar ahora
                            </p>
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

export default Sixthsec;
