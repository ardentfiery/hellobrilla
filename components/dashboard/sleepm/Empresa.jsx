import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoArrowForwardCircle } from "react-icons/io5";
import { FaRegCopy } from "react-icons/fa";

const Empresa = () => {
    return (
        <div className="flex gap-4">
            <div className="flex flex-col mt-4 gap-4 mb-4 ">
                <div className="flex  items-center ml-[30vw]  w-[20vw] h-[5vh]   gap-2 border-[3px] rounded-2xl border-[#803da1]">
                    <div>
                        <IoIosSearch className="text-2xl" />
                    </div>
                    <div className=" ">
                        <input
                            className=" h-[30px] w-[250px]"
                            type="text"
                            placeholder="Buscar servicios de Brilla System"
                        />
                    </div>
                </div>

                <div className="flex flex-col h-[25vh] relative gap-6 border-[3px] rounded-2xl border-[#803da1] ">
                    {/* <div className="relative"> */}
                    <div className="h-[32vh] w-[30vw] absolute bottom-0  z-50 ">
                        <img
                            className="h-[100%]  "
                            src="/dashboard/girl.png"
                            alt=""
                        />
                    </div>
                    {/* </div> */}
                    <div className="flex flex-col mr-6 mt-6 gap-4 ml-[20vw] ">
                        <div className="mr-8">
                            <p className="font-bold text-2xl text-[#353564]">
                                ¡Hola Llecenia bienvenida a
                                <span className="text-[#883ca4]">
                                    Brilla System!
                                </span>
                            </p>
                        </div>
                        <div>
                            <p className="italic font-semibold">
                                Decido brillar con determinación y excelencia,
                                dejando una huella
                                <br /> imborrable de bondad y inspiración en
                                cada paso."
                            </p>
                        </div>
                        <div className="flex justify-end">
                            <button className="h-[35px] w-[200px] mr-2  rounded-2xl border-[3px] border-[#803da1]">
                                <p>Ver el paso o paso</p>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-8 border-[3px] border-[#803da1] rounded-2xl py-2">
                    <div>
                        <p className="font-bold text-2xl text-black">
                            SISTEMA EDUCATIVO
                        </p>
                    </div>
                    <div className="text-[#848484] font-semibold flex gap-12  items-center ">
                        <div>Nombre del entrenamiento</div>
                        <div>porcentaje</div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-10">
                            <div>
                                <p className="font-bold text-black w-[10vw] ">
                                    Crecimiento personal
                                </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="w-[15vw] h-[2vh] rounded-2xl border-[3px] bg-white border-[#803da1] "></div>
                                <div>
                                    <p className="text-[#803da1] font-bold text-lg">
                                        0%
                                    </p>
                                </div>
                            </div>

                            <div>
                                <p className="font-bold text-black w-[10vw] ">
                                    te espera en la meta
                                </p>
                            </div>
                            <div>
                                <button className="flex items-center justify-center gap-2 border-[2px] border-[#803da1] w-[8vw] h-[4vh] rounded-2xl">
                                    <div>
                                        <p>continuar</p>
                                    </div>
                                    <div>
                                        <IoArrowForwardCircle className="text-[#803da1]" />
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center gap-10">
                            <div>
                                <p className="font-bold text-black w-[10vw]">
                                    En liderazgo
                                </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="w-[15vw] h-[2vh] rounded-2xl border-[3px] bg-white border-[#803da1] "></div>
                                <div>
                                    <p className="text-[#803da1] font-bold text-lg">
                                        0%
                                    </p>
                                </div>
                            </div>

                            <div>
                                <p className="font-bold text-black w-[10vw]">
                                    Hazlo!
                                </p>
                            </div>
                            <div>
                                <button className="flex items-center justify-center gap-2 border-[2px] border-[#803da1] w-[8vw] h-[4vh] rounded-2xl">
                                    <div>
                                        <p>continuar</p>
                                    </div>
                                    <div>
                                        <IoArrowForwardCircle className="text-[#803da1]" />
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center gap-10">
                            <div>
                                <p className="font-bold text-black w-[10vw]">
                                    En ventas
                                </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="w-[15vw] h-[2vh] rounded-2xl border-[3px] bg-white border-[#803da1] "></div>
                                <div>
                                    <p className="text-[#803da1] font-bold text-lg">
                                        0%
                                    </p>
                                </div>
                            </div>

                            <div>
                                <p className="font-bold text-black w-[10vw]">
                                    Tu peudes!
                                </p>
                            </div>
                            <div>
                                <button className="flex items-center justify-center gap-2 border-[2px] border-[#803da1] w-[8vw] h-[4vh] rounded-2xl">
                                    <div>
                                        <p>continuar</p>
                                    </div>
                                    <div>
                                        <IoArrowForwardCircle className="text-[#803da1]" />
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center gap-10">
                            <div>
                                <p className="font-bold text-black w-[10vw]">
                                    En marketing
                                </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="w-[15vw] h-[2vh] rounded-2xl border-[3px] bg-white border-[#803da1] "></div>
                                <div>
                                    <p className="text-[#803da1] font-bold text-lg">
                                        0%
                                    </p>
                                </div>
                            </div>

                            <div>
                                <p className="font-bold text-black w-[10vw]">
                                    Felicidades!
                                </p>
                            </div>
                            <div>
                                <button className="flex items-center justify-center gap-2 border-[2px] border-[#803da1] w-[8vw] h-[4vh] rounded-2xl">
                                    <div>
                                        <p>continuar</p>
                                    </div>
                                    <div>
                                        <IoArrowForwardCircle className="text-[#803da1]" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 items-center py-2  border-[2px] border-[#803da1] h-fit">
                    <div className="flex items-center gap-2 mt-4 ">
                        <div>
                            <p className="font-bold"> MI RETO</p>
                        </div>
                        <div>
                            <button className="flex items-center justify-center gap-2 border-[2px] border-[#803da1] w-[4vw] h-[4vh] rounded-2xl">
                                <div>
                                    <p>Ver</p>
                                </div>
                                <div>
                                    <IoArrowForwardCircle className="text-[#803da1]" />
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <div className="border-[2px] border-[#803da1] w-[17vw] rounded-2xl  flex flex-col gap-3  items-center">
                            <div>
                                <p className="text-gray-600 font-bold text-2xl">
                                    Prospectos nuevos
                                </p>
                            </div>
                            <div className="flex gap-16  w-[10vw] ">
                                <div className="h-[2vh] w-[2vw]">
                                    <img
                                        className="h-[100%] w-[100%]"
                                        src="/dashboard/persons.png"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <p className="text-[#803da1] font-semibold">
                                        4500
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="border-[2px] border-[#803da1] w-[17vw] rounded-2xl  flex flex-col gap-3  items-center">
                            <div>
                                <p className="text-gray-600 font-bold text-2xl">
                                    Preguntas realizadas
                                </p>
                            </div>
                            <div className="flex gap-16  w-[10vw] ">
                                <div className="h-[25px] w-[25px] ">
                                    <img
                                        className="h-[100%] w-[100%]"
                                        src="/dashboard/qnmark.png"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <p className="text-[#803da1] font-semibold">
                                        4500
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="border-[2px] border-[#803da1] w-[17vw] rounded-2xl  flex flex-col gap-3  items-center">
                            <div>
                                <p className="text-gray-600 font-bold text-2xl">
                                    ATM realizados
                                </p>
                            </div>
                            <div className="flex gap-16  w-[10vw] ">
                                <div className="h-[4vh] w-[2vw]">
                                    <img
                                        className="h-[90%] w-[100%]"
                                        src="/dashboard/ATM.png"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <p className="text-[#803da1] font-semibold">
                                        4500
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="border-[2px] border-[#803da1] w-[17vw] rounded-2xl  flex flex-col gap-3  items-center">
                            <div>
                                <p className="text-gray-600 font-bold text-2xl">
                                    Prospectos nuevos
                                </p>
                            </div>
                            <div className="flex gap-16  w-[10vw] ">
                                <div className="h-[4vh] w-[2vw]">
                                    <img src="/dashboard/persons.png" alt="" />
                                </div>
                                <div>
                                    <p className="text-[#803da1] font-semibold">
                                        4500
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="border-[2px] border-[#803da1] w-[17vw] rounded-2xl  flex flex-col gap-3  items-center">
                            <div>
                                <p className="text-gray-600 font-bold text-2xl">
                                    Prospectos nuevos
                                </p>
                            </div>
                            <div className="flex gap-16  w-[10vw] ">
                                <div className="h-[4vh] w-[2vw]">
                                    <img src="/dashboard/persons.png" alt="" />
                                </div>
                                <div>
                                    <p className="text-[#803da1] font-semibold">
                                        4500
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="border-[2px] border-[#803da1] w-[17vw] rounded-2xl  flex flex-col gap-3  items-center">
                            <div>
                                <p className="text-gray-600 font-bold text-2xl">
                                    Prospectos nuevos
                                </p>
                            </div>
                            <div className="flex gap-16  w-[10vw] ">
                                <div className="h-[4vh] w-[2vw]">
                                    <img src="/dashboard/persons.png" alt="" />
                                </div>
                                <div>
                                    <p className="text-[#803da1] font-semibold">
                                        4500
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6 items-center">
                <div className="flex flex-col items-center ">
                    <div className="flex gap-6 h-[15vh] items-center">
                        <div className="h-[30px] w-[30px]">
                            <img
                                className="h-[100%] w-[100%]"
                                src="/dashboard/notification.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <div className="h-[100px] w-[100px] object-fit rounded-full overflow-hidden ">
                                <img
                                    className="h-[100%] w-[100%]"
                                    src="/dashboard/girlie.jpg"
                                    alt=""
                                />
                                ;
                            </div>
                        </div>
                        <div>
                            <div className="h-[30px] w-[30px]">
                                <img src="/dashboard/msg.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="text-[#803da1] font-semibold flex flex-col items-center gap-0">
                        <p>75%</p>
                        <p>completado</p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <div>
                        <p className="text-3xl font-semibold text-black">
                            Llecenia Robles
                        </p>
                    </div>
                    <div>
                        <p className="underline">Usuario:Lleci</p>
                    </div>
                    <div>
                        <p>link para referer</p>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <FaRegCopy />
                        </div>
                        <div>
                            <a href="https://brillasystem.com/lleci">
                                https://brillasystem.com/lleci
                            </a>
                        </div>
                    </div>
                    <div className="h-[1px] w-[250px] bg-black"></div>
                </div>
                <div>
                    <div className="text-2xl font-semibold">
                        FILTRAR POR FECHAS
                    </div>
                    <div className="h-[20vh] w-[20vw]">
                        <img
                            className="h-[100%] w-[100%]"
                            src="/dashboard/calendar.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <div className="flex gap-4 justify-around">
                        <div className="font-semibold text-gray-500 text-xl">
                            Desde
                        </div>
                        <div className="font-semibold text-gray-500 text-xl">
                            Hasta
                        </div>
                    </div>
                    <div className="flex gap-4 justify-around">
                        <div className=" text-white rounded-[3px] text-center h-[35px] w-[150px]  bg-[#803DA1]">
                            DD MM AAAA
                        </div>
                        <div className=" text-white rounded-[3px] text-center h-[35px] w-[150px] bg-[#803DA1]">
                            DD MM AAAA
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <button className="h-[30px] w-[150px] rounded-2xl  border-[3px] text-[#803da1] border-[#803da1]">
                            Eliminar filtro
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-6">
                    <div>
                        <p className="text-black text-xl font-semibold text-center">
                            MI ACTITUD HOY ES
                            <br />{" "}
                            <span className="text-[#803da1] text-2xl font-semibold">
                                GANADOR
                            </span>
                        </p>
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                        <div className="h-[10px] w-[10px]">
                            <img src="/dashboard/logout.png" alt="" />
                        </div>
                        <div>
                            <p className="text-[#803da1]">Cerrar sesion</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Empresa;
