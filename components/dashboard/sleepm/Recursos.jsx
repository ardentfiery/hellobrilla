import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";

const Recursos = () => {
    return (
        <div className="flex flex-col gap-6 mt-6">
            <div className="relative h-[60px] md:h-[50px] mt-6 md:mt-0 border-[3px] flex items-center gap-4 border-[#803da1] rounded-2xl md:w-[50vw] ml-10 md:ml-0 w-[80vw] ">
                <img
                    className="absolute w-[3rem] md:w-[4rem] bottom-0 left-4 "
                    src="/dashboard/escalando.png"
                    alt=""
                />
                <p className=" italic text-black text-sm md:text-2xl ml-[5rem] md:ml-[7rem]">
                    Encuentra las herramientas necesarias para tu crecimiento
                </p>
            </div>
            <div className="md:grid md:grid-cols-[3fr_1fr] flex flex-col gap-6 mb-4">
                <div className="flex flex-col  gap-8 w-[100vw] md:w-auto items-center">
                    <div className="border-[3px] flex items-center  md:justify-center border-[#803da1] rounded-2xl h-[35px] w-[350px] px-10 md:px-0 md:w-[450px] text-xl md:text-2xl font-bold text-white bg-[#803da1]">
                        <p>NUESTROS PRODUCTOS</p>
                    </div>
                    <div className="flex gap-2 justify-between items-center">
                        <div>
                            <FaArrowCircleLeft className="text-[#803da1] h-[40px] w-[40px]" />
                        </div>
                        <div className="flex items-center md:justify-around pt-4 md:pt-0 px-2  w-[70vw] md:w-[45vw] border-[#803da1] border-[3px] h-[15vh] md:h-[25vh] rounded-[4rem] md:px-4">
                            <div className="h-[150px] w-[150px]">
                                <img
                                    className="md:h-[100%] h-[80%] w-[100%]"
                                    src="/dashboard/mattress.png"
                                    alt=""
                                />
                            </div>
                            <div className="h-[100px] md:h-[150px] w-[100px] md:w-[150px] ">
                                <img
                                    className="md:h-[100%]  w-[100%]"
                                    src="/dashboard/hot.png"
                                    alt=""
                                />
                            </div>
                            <div className="h-[150px] w-[150px]">
                                <img
                                    className="md:h-[100%] h-[80%] w-[100%]"
                                    src="/dashboard/blanket.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div>
                            <FaArrowCircleRight className="text-[#803da1] h-[40px] w-[40px]" />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="relative  h-[150px] w-[160px] md:w-[350px] rounded-3xl overflow-hidden">
                            <img
                                className="w-[100%] h-[100%] md:w-[100%] -z-10"
                                src="/dashboard/book.jpg"
                                alt=""
                            />
                            <div className="absolute z-50 top-0 bg-[#00000036] h-[100%] w-[100%] flex justify-center items-center">
                                <p className="md:text-2xl text-xl font-bold text-black  ">
                                    Tripticos
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[150px] md:w-[350px] w-[160px] rounded-3xl overflow-hidden">
                            <img
                                className="w-[100%] h-[100%] "
                                src="/dashboard/sketch.png"
                                alt=""
                            />
                            <div className="absolute z-50 top-0  bg-[#00000036] h-[100%] w-[100%] flex justify-center items-center">
                                <p className="md:text-2xl text-xl  font-bold text-black  ">
                                    Plan Servilleta
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <div className="bg-[#803da1] text-white h-[35px] font-semibold md:w-[450px] w-[90vw] flex items-center text-xl md:text-2xl justify-center rounded-2xl">
                            {" "}
                            PRESENTACION DE NEGOCIAS
                        </div>
                        <div className="flex items-center justify-around gap-4 border-[3px] border-[#803da1] rounded-[4rem] w-[90vw] md:w-[800px] h-[200px] md:h-[250px] ">
                            <div className="h-[150px] md:h-[200px] w-[160px] md:w-[350px] rounded-3xl">
                                <img
                                    className="h-[100%] w-[100%] rounded-[30px]"
                                    src="/dashboard/room.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="h-[150px] md:h-[200px] w-[160px] md:w-[350px] rounded-3xl">
                                <img
                                    className="h-[100%] w-[100%] rounded-[30px]"
                                    src="/dashboard/video.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4 ">
                    <div className="bg-[#803da1] text-white h-[40px] w-[150px] font-bold flex justify-center items-center rounded-3xl">
                        <p>POST</p>
                    </div>
                    <div>
                        <FaArrowCircleUp className="text-[#803da1] text-3xl " />
                    </div>
                    <div className="h-[150px] w-[200px] ">
                        <img
                            className="h-[100%] w-[100%]"
                            src="/dashboard/matres.jpg"
                            alt=""
                        />
                    </div>
                    <div className="h-[150px] w-[200px]">
                        <img
                            className="h-[100%] w-[100%]"
                            src="/dashboard/bed.jpg"
                            alt=""
                        />
                    </div>
                    <div className="h-[150px] w-[200px]">
                        <img
                            className="h-[100%] w-[100%]"
                            src="/dashboard/blanket.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <FaArrowCircleDown className="text-3xl text-[#803da1]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recursos;
