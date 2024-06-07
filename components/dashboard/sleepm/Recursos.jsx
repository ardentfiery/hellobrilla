import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Modal, ButtonToolbar, Button, Placeholder } from 'rsuite';
import { Profile } from "../Profile";
import Recursospop from "./Recursospop";

const Recursos = () => {
    const [open, setOpen] = React.useState(false);
    const [size, setSize] = React.useState();
    const handleOpen = value => {
      setSize(value);
      setOpen(true);
    };
    const handleClose = () => setOpen(false);
  
    return (
        <div className="flex flex-col  mt-6">
            <Recursospop/>
            {/* <div className="relative h-[60px] md:h-[50px] mt-6 md:mt-0 border-[3px] flex items-center gap-4 border-[#664198] rounded-2xl md:w-[50vw] ml-10 md:ml-0 w-[80vw] ">
                <img
                    className="absolute w-[3rem] md:w-[4rem] bottom-0 left-4 "
                    src="/dashboard/escalando.png"
                    alt=""
                />
                <p className=" italic text-black text-sm md:text-2xl ml-[5rem] md:ml-[7rem]">
                    Encuentra las herramientas necesarias para tu crecimiento
                </p>
            </div> */}
            <div className="flex justify-between h-[6rem]">
                <div className="flex   items-center ml-[15vw] md:ml-[30vw] w-[80vw]   md:w-[20vw] h-[5vh]   gap-2 border-[3px] rounded-2xl border-[#803da1]">
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
                <div className="flex flex-col items-center  ">
                    <div className="flex gap-4 h-[15vh] items-center">
                        <div className="h-[30px] w-[30px]">
                            <img
                                className="h-[90%] w-[90%]"
                                src="/dashboard/notification.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <div
                                onClick={() => {
                                    handleOpen("md");
                                }}
                                className="h-[100px] w-[100px] object-fit rounded-full overflow-hidden "
                            >
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
                                <img className="h-[80%] w-[90%]" src="/dashboard/msg.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="text-[#803da1] font-semibold flex flex-col items-center gap-0">
                        <p>75%</p>
                    </div>
                </div>
            </div>

            <div>
                <p className="text-4xl text-[#664198] font-bold ml-8 ">
                    Recursos
                </p>
            </div>
            <div className="md:grid md:grid-cols-[3fr_1fr] flex flex-col gap-6 mb-4  border-[#664198] border-[3px] rounded-3xl w-[96%]">
                <div className="flex flex-col  gap-8 w-[100vw] md:w-auto items-center">
                    <div className="border-[3px] flex items-center  md:justify-center mt-6 border-[#664198] rounded-2xl h-[35px] w-[350px] px-10 md:px-0 md:w-[450px] text-xl md:text-2xl font-bold text-white bg-[#664198]">
                        <p>NUESTROS PRODUCTOS</p>
                    </div>
                    <div className="flex gap-2 justify-between items-center">
                        <div>
                            <FaArrowCircleLeft className="text-[#664198] h-[40px] w-[40px]" />
                        </div>
                        <div className="flex items-center md:justify-around pt-4 md:pt-0 px-2  w-[70vw] md:w-[45vw] h-[15vh] md:h-[25vh] rounded-[4rem] md:px-4">
                            <div className="h-[200px] w-[200px] flex justify-center items-center border-[#664198] border-[2px] rounded-2xl hover:bg-gray-500">
                                <img
                                    className="md:h-[90%] h-[80%] w-[90%]"
                                    src="/dashboard/mattress.png"
                                    alt=""
                                />
                            </div>
                            <Recursospop/>
                            
                            <div className="h-[100px] md:h-[200px] w-[100px] md:w-[200px]  flex justify-center items-center  border-[#664198] border-[2px] rounded-2xl ">
                                <img
                                    className="md:h-[90%]  w-[90%]"
                                    src="/dashboard/hot.png"
                                    alt=""
                                />
                            </div>
                            <div className="h-[200px] w-[200px]  border-[#664198]  flex justify-center items-center border-[2px] rounded-2xl">
                                <img
                                    className="md:h-[100%] h-[80%] w-[100%]"
                                    src="/dashboard/blanket.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div>
                            <FaArrowCircleRight className="text-[#664198] h-[40px] w-[40px]" />
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
                        <div className="bg-[#664198] text-white h-[35px] font-semibold md:w-[450px] w-[90vw] flex items-center text-xl md:text-2xl justify-center rounded-2xl">
                            {" "}
                            PRESENTACION DE NEGOCIAS
                        </div>
                        <div className="flex items-center justify-around gap-4 border-[3px] border-[#664198] rounded-[4rem] w-[90vw] md:w-[800px] h-[200px] md:h-[250px] ">
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

                <div className="flex flex-col items-center gap-4 mt-6">
                    <div className="bg-[#664198] text-white h-[40px] w-[150px] font-bold flex justify-center items-center rounded-3xl">
                        <p>POST</p>
                    </div>
                    <div>
                        <FaArrowCircleUp className="text-[#664198] text-3xl " />
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
                        <FaArrowCircleDown className="text-3xl text-[#664198]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recursos;
