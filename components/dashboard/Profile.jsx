import React from "react";
import { FaRegCopy } from "react-icons/fa";
export const Profile = () => {
    return (
        <div>
            <div className=" flex-col gap-6 items-center md:flex ">
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
