import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Thirdsec = () => {
    const container = useRef(null);
    useGSAP(
        () => {
            // gsap code here...
            gsap.from(".one", {
                scrollTrigger: {
                    trigger: ".one",
                    start: "top 50%",
                    end: "bottom 80%",
                },
                duration: 0.5,
                opacity: 0,
                x: -1000,
            });
            gsap.from(".two", {
                scrollTrigger: {
                    trigger: ".two",
                    start: "top 50%",
                },
                duration: 0.5,
                opacity: 0,
                x: 1000,
            });
            gsap.from(".three", {
                scrollTrigger: {
                    trigger: ".three",
                    start: "top 50%",
                },
                duration: 0.5,
                opacity: 0,
                x:-1000,
                
                
            });
            gsap.from(".four", {
                scrollTrigger: {
                    trigger: ".four",
                    start: "top 50%",
                },
                duration: 0.5,
                opacity: 0,
                x:1000,
                
                
            });
        },
        { scope: container }
    );
    return (
        <div  ref={container}>
            <div className="bg-[#803DA1]  h-fit md:h-[50vh] text-white flex flex-col gap-16 items-center p-8">
                <div className=" w-[100vw] text-center md:text-3xl text-2xl  px-[1rem] md:px-[14rem]">
                    <p className=" one font-bold">
                        Recupera tu ventaja y aumenta tu confianza, bienestar y
                        éxitos con BRILLA todos{" "}
                        <br className="hidden md:visible" /> los días, el
                        sistema #1 para escalar tus ingresos, calidad de vida y
                        marcar la
                        {/* <br className="hidden md:visible"  /> */}
                    </p>
                    <p className="one text-center font-bold">diferencia.</p>
                </div>
                <div className="md:text-2xl one text-lg flex flex-col gap-4 items-center">
                    <p className="one">¿Quieres más impulso, bienestar y libertad?</p>
                    <p className="one">
                        ¿Quieres ser dueño de tu tiempo, tu calendario y tu
                        futuro?
                    </p>
                    <p className="one">
                        {" "}
                        ¿Quieres más éxito, confianza, flexibilidad y paz
                        mental?
                    </p>
                    <p className="one">
                        ¿Quieres más habilidades esenciales, crecimiento y
                        alegrías?
                    </p>
                </div>
            </div>

            <div className=" flex flex-col py-[5rem] bg-[#e0dcdc] items-center gap-6  text-[#803DA1] w-[100vw]  px-3 ">
                <div>
                    <img
                        className="two h-[10vh] w-auto md:h-[8vh]  "
                        src="/landing/onee.png"
                        alt=""
                    />
                </div>
                <div>
                    <p className="two font-bold text-3xl text-center ">
                        MANTÉN TU ENFOQUE, ENTUSIASMO Y PROGRESO.
                    </p>
                </div>
                <div>
                    <p className="two text-xl font-medium md:px-10 text-center">
                        1. Únete a la comunidad de aprendizaje más unida y
                        solidaria del planeta, llena de emprendedores de éxito.
                        Un lugar maravilloso para apoyo, conocimiento, ánimo y
                        guía.
                    </p>
                </div>
                <div>
                    <p className=" two text-xl font-medium text-center">
                        (Transforma tu vida diaria, obtén contenido exclusivo
                        para mantenerte responsable, saludable, inspirado y con
                        propósito.)
                    </p>
                </div>
            </div>

            <div className=" flex  flex-col  items-center gap-6  py-[5rem] text-white bg-[#803DA1] w-[100vw] ">
                <div>
                    <img
                        className="three h-[6vh] w-auto object-cover "
                        src="/landing/two.png"
                        alt=""
                    />
                </div>
                <div className="three bg-[#803DA1]">
                    <p className="font-bold text-3xl text-center text-white">
                        APRENDE DE LOS EXPERTOS.
                    </p>
                </div>
                <div>
                    <p className="three text-xl  font-medium text-center">
                        Reúnete en vivo en{" "}
                        <span className="three font-semibold text-3xl">
                            Brilladay
                        </span>{" "}
                        para seguir creciendo y adquirir las habilidades,
                        hábitos y tácticas
                        <br /> necesarios para alcanzar tus objetivos.
                    </p>
                </div>
            </div>
            <div className=" flex py-[5rem] flex-col bg-[#e0dcdc] items-center gap-6  text-[#803DA1]  w-[100vw] ">
                <div>
                    <img
                        className="four h-[6vh] w-[6vh] -[#803DA1]"
                        src="/landing/three.png"
                        alt=""
                    />
                </div>
                <div>
                    <p className="four font-bold text-3xl text-center ">
                        El Software de Brilla System.
                    </p>
                </div>
                <div>
                    <p className="four text-xl  font-medium text-center">
                        Crecimiento digital para aquellos que deciden emprender
                        y aumentar sus ingresos, bienestar y<br /> en las redes
                        de la nueva economía. Aprende de los expertos a tu
                        propio ritmo sobre cómo crear
                        <br /> una vida personal y profesional próspera.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Thirdsec;
