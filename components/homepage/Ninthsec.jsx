import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import { IoMdStar } from "react-icons/io";
const Ninthsec = () => {
    
    return (
        <div className="relative flex  h-[60rem] md:h-[100vh]">
            <div>
                <img className="h-[60rem] md:h-[100vh]" src="/landing/bg1.jpg" alt="" />
            </div>
            <div className="absolute top-0 flex flex-col gap-6 mt-16 items-center w-[100vw]">
                <div className="flex flex-col items-center">
                    <div>
                        <p className="font-bold text-2xl md:text-4xl text-white">
                            Tu opinión es importante
                        </p>
                    </div>
                    <div className="flex ">
                        <p className="h-[4px] w-[100px] bg-[#803DA1] ml-340px] "></p>
                        <p className="h-[4px] w-[50px] bg-[#803DA1] ml-[30px]"></p>
                    </div>
                </div>
                <div>
                    <p className="text-white px-2 text-lg text-center">
                        Lorem ipsum dolor sit amet consectetur. Quis at in<br/> massa
                        etiam velit est imperdiet id.
                    </p>
                </div>
                <div className="flex flex-col gap-3 md:flex-row md:gap-6">
                    <div className="relative text-white ">
                        <div>
                            <img
                                className="md:h-[30vh] md:w-[25vw] w-[20rem] rounded-xl"
                                src="/landing/bg2.png"
                                alt=""
                            />
                        </div>
                        <div className="absolute top-0 flex flex-col gap-4 p-4">
                            <div className="flex text-white items-center gap-3">
                                <div className="h-[60px] w-[60px] rounded-full bg-gray-200"></div>
                                <div>
                                    <p className="font-semibold">Persona 1</p>
                                    <p>cupación</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-light text-sm ">
                                    Lorem ipsum dolor sit amet consectetur.
                                    Euismod eu aliquam vel facilisi in ante non
                                    sed. Enim adipiscing montes viverra etiam
                                    adipiscing aliquet rhoncus blandit. Neque
                                    tincidunt velit urna nisi metus sed nunc.
                                    Quis in.
                                </p>
                            </div>
                            <div className="h-[2px] w-[90%] bg-slate-300"></div>
                            <div className="flex  justify-between">
                                <p className="text-sm">Lorem ipsu</p>
                                <div className="flex gap-1">
                                    <p>
                                        <IoMdStar className="text-yellow-500" />
                                    </p>
                                    <p>
                                        <IoMdStar className="text-yellow-500" />
                                    </p>
                                    <p>
                                        <IoMdStar className="text-yellow-500" />
                                    </p>
                                    <p>
                                        <IoMdStar className="text-yellow-500" />
                                    </p>
                                    <p>
                                        <IoMdStar className="text-yellow-500" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative text-white ">
                        <div>
                            <img
                                className="md:h-[30vh] md:w-[25vw] w-[20rem] rounded-xl"
                                src="/landing/bg2.png"
                                alt=""
                            />
                        </div>
                        <div className="absolute top-0 flex flex-col gap-4 p-4">
                            <div className="flex text-white items-center gap-3">
                                <div className="h-[60px] w-[60px] rounded-full bg-gray-200"></div>
                                <div>
                                    <p className="font-semibold">Persona 1</p>
                                    <p>cupación</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-light text-sm ">
                                    Lorem ipsum dolor sit amet consectetur.
                                    Euismod eu aliquam vel facilisi in ante non
                                    sed. Enim adipiscing montes viverra etiam
                                    adipiscing aliquet rhoncus blandit. Neque
                                    tincidunt velit urna nisi metus sed nunc.
                                    Quis in.
                                </p>
                            </div>
                            <div className="h-[2px] w-[90%] bg-slate-300"></div>
                            <div className="flex  justify-between">
                                <p className="text-sm">Lorem ipsu</p>
                                <div className="flex gap-1">
                                    <p>
                                        <IoMdStar className="text-yellow-500" />
                                    </p>
                                    <p>
                                        <IoMdStar className="text-yellow-500" />
                                    </p>
                                    <p>
                                        <IoMdStar className="text-yellow-500" />
                                    </p>
                                    <p>
                                        <IoMdStar className="text-yellow-500" />
                                    </p>
                                    <p>
                                        <IoMdStar className="text-yellow-500" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>videoplayer</div>
                    <div>3 ota dot</div>
                </div>
            </div>
        </div>
    );
};

export default Ninthsec;
