import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import axios from "@/app/api/axiosintercepter";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Eighthsec = () => {
    const [personData, setpersonData] = useState([]);
    const getTeammembers = async () => {
        try {
            const getData = await axios.get("/landingpage/getteammembers");
            setpersonData(getData.data.data);
            console.log(getData);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getTeammembers();
    }, []);
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
                x: 1000,
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
                        <div className="h-[4px] w-[100px] bg-[#664198]  "></div>
                        <div className="h-[4px] w-[50px] bg-[#664198] ml-[30px]"></div>
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
                    {personData.map((person,index) => {
                        return (
                            <div key={index} className="flex flex-col gap-4">
                                <div>
                                    <img
                                        className="photo h-[25vh] w-auto object-cover"
                                        src={person.image}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <p className="phototext-xl md:text-3xl font-semibold">
                                        {person.name}
                                    </p>
                                </div>
                                <div>
                                    <p className="photo">{person.position}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Eighthsec;
