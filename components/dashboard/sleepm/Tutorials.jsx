import React from "react";
import { IoIosSearch } from "react-icons/io";
import { LuPlayCircle } from "react-icons/lu";

import Popup from "../Popup";

const Tutorials = () => {
    const [open, setOpen] = React.useState(false);
    const [size, setSize] = React.useState();
    const handleOpen = (value) => {
        setSize(value);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    return (
        <div className="flex flex-col  h-[100vh]">
            <Popup  size={size} open={open} handleClose={handleClose}/>
            <div className="flex justify-between">
                <div className="flex   items-center ml-[15vw] md:ml-[30vw] w-[80vw] mt-2  md:w-[20vw] h-[5vh]   gap-2 border-[3px] rounded-2xl border-[#803da1]">
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
                            <div onClick={()=>{ handleOpen("md")}} className="h-[100px] w-[100px] object-fit rounded-full overflow-hidden ">
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
                    </div>
                </div>
            </div>

            <div>
                <p className="text-4xl text-[#664198] font-bold">Tutoriales</p>
            </div>

            <div className="grid grid-cols-3 gap-6 border-[3px] border-[#664198] rounded-2xl place-items-center py-4">
                <div className="h-[36vh] bg-[#F6F6F6] w-[20vw] flex flex-col items-center gap-2 justify-around rounded-2xl">
                    <div className="h-[20vh] w-[18vw]">
                        <img
                            className="h-[100%] w-fit rounded-2xl"
                            src="/dashboard/tutorial.jpg"
                            alt=""
                        />
                    </div>
                    <div className="flex gap-8 items-center ">
                        <div className="flex flex-col">
                            <div className="font-bold text-black text-lg">
                                Nombre del tutorial
                            </div>
                            <div>Descripcion corta del tutorial</div>
                        </div>
                        <div>
                            <LuPlayCircle className="text-[#f80cd4] text-3xl" />
                        </div>
                    </div>
                    <div className="flex gap-12">
                        <div className="md:w-[11vw] w-[20vw] h-[1.5vh] rounded-2xl border-[3px] bg-white border-[#f80cd4] "></div>
                        <div className="text-[#f80cd4]">
                            <p>69%</p>
                        </div>
                    </div>
                </div>
                <div className="h-[36vh] bg-[#F6F6F6] w-[20vw] flex flex-col items-center gap-2 justify-around rounded-2xl">
                    <div className="h-[20vh] w-[18vw]">
                        <img
                            className="h-[100%] w-fit rounded-2xl"
                            src="/dashboard/tutorial.jpg"
                            alt=""
                        />
                    </div>
                    <div className="flex gap-8 items-center ">
                        <div className="flex flex-col">
                            <div className="font-bold text-black text-lg">
                                Nombre del tutorial
                            </div>
                            <div>Descripcion corta del tutorial</div>
                        </div>
                        <div>
                            <LuPlayCircle className="text-[#f80cd4] text-3xl" />
                        </div>
                    </div>
                    <div className="flex gap-12">
                        <div className="md:w-[11vw] w-[20vw] h-[1.5vh] rounded-2xl border-[3px] bg-white border-[#f80cd4] "></div>
                        <div className="text-[#f80cd4]">
                            <p>69%</p>
                        </div>
                    </div>
                </div>
                <div className="h-[36vh] bg-[#F6F6F6] w-[20vw] flex flex-col items-center gap-2 justify-around rounded-2xl">
                    <div className="h-[20vh] w-[18vw]">
                        <img
                            className="h-[100%] w-fit rounded-2xl"
                            src="/dashboard/tutorial.jpg"
                            alt=""
                        />
                    </div>
                    <div className="flex gap-8 items-center ">
                        <div className="flex flex-col">
                            <div className="font-bold text-black text-lg">
                                Nombre del tutorial
                            </div>
                            <div>Descripcion corta del tutorial</div>
                        </div>
                        <div>
                            <LuPlayCircle className="text-[#f80cd4] text-3xl" />
                        </div>
                    </div>
                    <div className="flex gap-12">
                        <div className="md:w-[11vw] w-[20vw] h-[1.5vh] rounded-2xl border-[3px] bg-white border-[#f80cd4] "></div>
                        <div className="text-[#f80cd4]">
                            <p>69%</p>
                        </div>
                    </div>
                </div>
                <div className="h-[36vh] bg-[#F6F6F6] w-[20vw] flex flex-col items-center gap-2 justify-around rounded-2xl">
                    <div className="h-[20vh] w-[18vw]">
                        <img
                            className="h-[100%] w-fit rounded-2xl"
                            src="/dashboard/tutorial.jpg"
                            alt=""
                        />
                    </div>
                    <div className="flex gap-8 items-center ">
                        <div className="flex flex-col">
                            <div className="font-bold text-black text-lg">
                                Nombre del tutorial
                            </div>
                            <div>Descripcion corta del tutorial</div>
                        </div>
                        <div>
                            <LuPlayCircle className="text-[#f80cd4] text-3xl" />
                        </div>
                    </div>
                    <div className="flex gap-12">
                        <div className="md:w-[11vw] w-[20vw] h-[1.5vh] rounded-2xl border-[3px] bg-white border-[#f80cd4] "></div>
                        <div className="text-[#f80cd4]">
                            <p>69%</p>
                        </div>
                    </div>
                </div>
                <div className="h-[36vh] bg-[#F6F6F6] w-[20vw] flex flex-col items-center gap-2 justify-around rounded-2xl">
                    <div className="h-[20vh] w-[18vw]">
                        <img
                            className="h-[100%] w-fit rounded-2xl"
                            src="/dashboard/tutorial.jpg"
                            alt=""
                        />
                    </div>
                    <div className="flex gap-8 items-center ">
                        <div className="flex flex-col">
                            <div className="font-bold text-black text-lg">
                                Nombre del tutorial
                            </div>
                            <div>Descripcion corta del tutorial</div>
                        </div>
                        <div>
                            <LuPlayCircle className="text-[#f80cd4] text-3xl" />
                        </div>
                    </div>
                    <div className="flex gap-12">
                        <div className="md:w-[11vw] w-[20vw] h-[1.5vh] rounded-2xl border-[3px] bg-white border-[#f80cd4] "></div>
                        <div className="text-[#f80cd4]">
                            <p>69%</p>
                        </div>
                    </div>
                </div>
                <div className="h-[36vh] bg-[#F6F6F6] w-[20vw] flex flex-col items-center gap-2 justify-around rounded-2xl">
                    <div className="h-[20vh] w-[18vw]">
                        <img
                            className="h-[100%] w-fit rounded-2xl"
                            src="/dashboard/tutorial.jpg"
                            alt=""
                        />
                    </div>
                    <div className="flex gap-8 items-center ">
                        <div className="flex flex-col">
                            <div className="font-bold text-black text-lg">
                                Nombre del tutorial
                            </div>
                            <div>Descripcion corta del tutorial</div>
                        </div>
                        <div>
                            <LuPlayCircle className="text-[#f80cd4] text-3xl" />
                        </div>
                    </div>
                    <div className="flex gap-12">
                        <div className="md:w-[11vw] w-[20vw] h-[1.5vh] rounded-2xl border-[3px] bg-white border-[#f80cd4] "></div>
                        <div className="text-[#f80cd4]">
                            <p>69%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tutorials;
