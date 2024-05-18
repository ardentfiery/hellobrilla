import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Eighthsec = () => {
    const container = useRef(null);
    useGSAP(
        () => {
            // gsap code here...
            gsap.from(".bg", {
                scrollTrigger: {
                    trigger: ".bg",
                    start: "top 50%",
                    end: "bottom 80%",
                },
                duration: 0.5,
                opacity: 0,
                x: -1000,
            });
            gsap.from(".photo", {
                scrollTrigger: {
                    trigger: ".photo",
                    start: "top 50%",
                    end: "bottom 80%",
                },
                duration: 0.5,
                opacity: 0,
                x: 1000,
            });
            gsap.from(".socialicons", {
                scrollTrigger: {
                    trigger: ".socialicons",
                    start: "top 50%",
                    end: "bottom 80%",
                },
                duration: 1,
                opacity: 0,
                x:1000,
            });
        },
        { scope: container }
    );
    return (
        <div className="relative h-fit md:h-[100vh]" ref={container}>
            <div>
                <img
                    className="bg h-[75rem] md:h-[100vh]"
                    src="/landing/bg.png"
                    alt=""
                />
            </div>
            <div className="absolute top-0 flex flex-col  gap-6 mt-10 items-center  w-[100%]">
                <div className="flex flex-col items-center">
                    <div>
                        <p className="font-bold text-3xl md:text-4xl">
                            Estudiantes destacados
                        </p>
                    </div>
                    <div className="flex ">
                        <p className="h-[4px] w-[100px] bg-[#803DA1] ml-340px] "></p>
                        <p className="h-[4px] w-[50px] bg-[#803DA1] ml-[30px]"></p>
                    </div>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Quis at in
                        <br />
                        massa etiam velit est imperdiet id.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 px-2 md:px-0 gap-x-4 md:gap-x-16 gap-y-4">
                    <div className="flex flex-col gap-4">
                        <img
                            className="photo h-[25vh] w-auto object-cover"
                            src="/landing/person.jpg"
                            alt=""
                        />
                        <p className="phototext-xl md:text-3xl font-semibold">
                            Milena Goméz
                        </p>
                        <p className="photo">Contadora</p>
                    </div>
                    <div className="photo flex flex-col gap-4">
                        <img
                            className="photo h-[25vh] w-auto object-cover"
                            src="/landing/person.jpg"
                            alt=""
                        />
                        <p className="text-xl md:text-3xl font-semibold">
                            Felipe Mora
                        </p>
                        <p className="photo">Vendedor</p>
                    </div>
                    <div className="photo flex flex-col gap-4">
                        <img
                            className="photo h-[25vh] w-auto object-cover"
                            src="/landing/person.jpg"
                            alt=""
                        />
                        <p className="text-xl md:text-3xl font-semibold">
                            Mateo Lara
                        </p>
                        <p className="photo">Profesor</p>
                    </div>
                    <div className="photo flex flex-col gap-4">
                        <img
                            className="h-[25vh] w-auto object-cover"
                            src="/landing/persons.jpg"
                            alt=""
                        />
                        <p className="photo text-xl md:text-3xl font-semibold">
                            Wendy Paéz
                        </p>
                        <p className="photo">Veterinaria</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img
                            className="h-[25vh] w-auto object-cover"
                            src="/landing/persons.jpg"
                            alt=""
                        />
                        <p className="text-xl md:text-3xl font-semibold">
                            Roberto Mora
                        </p>
                        <p>Emprendedor</p>
                    </div>
                    <div className="photo flex flex-col gap-4">
                        <img
                            className="photo h-[25vh] w-auto object-cover"
                            src="/landing/persons.jpg"
                            alt=""
                        />
                        <p className="photo text-xl md:text-3xl font-semibold">
                            Miguel Suarèz
                        </p>
                        <p className="photo">Inversor</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Eighthsec;
