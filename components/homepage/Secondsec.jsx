import React, { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import axios from "@/app/api/axiosintercepter";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Modal } from "rsuite";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Secondsec = () => {
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState();
  const handleOpen = (value) => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [videoUrl, setVideoUrl] = useState();
  const getVideoUrl = async () => {
    try {
      const resp = await axios.get("/landingpage/getvideolinksecond");
      setVideoUrl(resp.data?.data[0]?.videoUrl);
    } catch (error) {
      console.log(error);
    }
  };

  const container = useRef(null);
  useGSAP(
    () => {
      // gsap code here...
      gsap.from(".leftsection", {
        scrollTrigger: {
          trigger: ".leftsection",
          start: "top 50%",
          end: "bottom 80%",
        },
        duration: 1,
        opacity: 0,
        x: -100,
      });
      gsap.from(".rightsection", {
        scrollTrigger: {
          trigger: ".rightsection",
          start: "top 50%",
        },
        duration: 1,
        opacity: 0,
        x: 100,
      });
      gsap.from(".video", {
        scrollTrigger: {
          trigger: ".video",
          start: "top 50%",
        },
        duration: 1,
        opacity: 0,
      });
    },
    { scope: container }
  );

  useEffect(() => {
    getVideoUrl();
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row gap-8 items-center w-[100vw] justify-center   h-fit py-4 md:py-0 md:h-[80vh] relative"
      ref={container}
    >
      <img
        className="animate-updown h-[20px]  left-[2vw] -z-10 absolute "
        src="/dashboard/floatingball.png"
        alt=""
      />

      <img
        className="animate-topdown h-[20px] top-[70vh] left-[90vw] z-10 absolute "
        src="/landing/shape.png"
        alt=""
      />
      <img
        className="animate-sideways h-[20px] top-[50vh] left-[2vw] z-10 absolute "
        src="/landing/diamond.png"
        alt=""
      />
      <div className=" flex  flex-col gap-8 text-right leftsection ">
        <div className=" w-[95%] gap-1 md:w-[20vw] flex flex-col md:gap-3 ">
          <div className="flex items-center md:gap-2 text-right  justify-end w-[100%]">
            <div>
              <p className="text-2xl md:text-3xl font-semibold ">Misión</p>
            </div>
            <div>
              <FaCircleCheck className="text-[#664198]" />
            </div>
          </div>
          <div>
            <p className="font-semibold md:text-lg">
              Hacer que lanzar tu negocio sea más fácil y rápido que nunca, sin
              importar dónde te encuentres{" "}
            </p>
          </div>
        </div>

        <div className="w-[95%] md:w-[20vw] gap-1 flex flex-col md:gap-6">
          <div className="flex items-center gap-2 justify-end w-[100%]">
            <div>
              <p className="text-2xl md:text-3xl font-semibold">Solución simplificada</p>
            </div>
            <div>
              <FaCircleCheck className="text-[#664198]" />
            </div>
          </div>
          <div>
            <p className="font-semibold md:text-[1rem]">
              Brilla System ofrece una solución simplificada para emprendedores
            </p>
          </div>
        </div>
        <div className="w-[95%] md:w-[20vw] gap-1 flex flex-col md:gap-6">
          <div className="flex items-center gap-2 justify-end w-[100%]">
            <div>
              <p className="text-2xl md:text-3xl font-semibold">Flexibilidad</p>
            </div>
            <div>
              <FaCircleCheck className="text-[#664198]" />
            </div>
          </div>
          <div>
            <p className="font-semibold md:text-[1rem]">
              El sistema es flexible y se adapta a tus necesidades empresariales
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div>
          <img
            className="video h-[20rem]  md:h-[30rem] "
            src="/landing/circle.png"
            alt=""
          />
        </div>
        <div className="w-[20rem] md:w-[30rem]">
          <img
            className="video w-[100%] md:h-[100%] md:w-[100%] absolute top-0 md:top-[] "
            src="/landing/playvideo.png"
            alt=""
          />
          {videoUrl ? (
            <div
              className="w-[75%] h-[10rem] md:h-[15rem] ml-[13%] absolute top-[5rem] md:top-[7.4rem] z-50 cursor-pointer"
              onClick={() => {
                handleOpen("lg");
              }}
            >
              <iframe
                className="absolute top-0 left-0 h-full w-full rounded z-10"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              {/* Overlay for capturing click events */}
              <div
                className="absolute top-0 left-0 h-full w-full z-20"
                style={{ backgroundColor: "transparent" }}
              ></div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="rightsection w-[100vw] md:w-fit px-2 md:px-0">
        <div className="flex flex-col  gap-6 ">
          <div className="w-[100%] md:w-[20vw]  flex flex-col gap-1 md:gap-3">
            <div className="flex items-center gap-1 ">
              <div>
                <p className="text-2xl md:text-3xl font-semibold">Diversión</p>
              </div>
              <div>
                <FaCircleCheck className="text-[#664198]" />
              </div>
            </div>
            <div>
              <p className="font-semibold md:text-[1rem]">
                Brilla System está diseñado para ser una herramienta divertida
                de usar
              </p>
            </div>
          </div>
          <div className="w-[95%] md:w-[20vw] flex flex-col gap-1 md:gap-6">
            <div className="flex items-center gap-2 ">
              <div>
                <p className="text-2xl md:text-3xl font-semibold"> Rapidez </p>
              </div>
              <div>
                <FaCircleCheck className="text-[#664198]" />
              </div>
            </div>
            <div>
              <p className="font-semibold md:text-[1rem]">
              Permite alcanzar tus metas empresariales con mayor rapidez.
              </p>
            </div>
          </div>
          <div className="w-[95%] md:w-[20vw] flex flex-col gap-1 md:gap-6">
            <div className="flex items-center gap-2 ">
              <div>
                <p className="text-2xl md:text-3xl font-semibold">Eficiencia</p>
              </div>
              <div>
                <FaCircleCheck className="text-[#664198]" />
              </div>
            </div>
            <div>
              <p className="font-semibold md:text-[1rem]">
              Facilita una mayor eficiencia en el proceso de lanzar y gestionar tu negocio.
              </p>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <VideoPop
          size={size}
          open={open}
          handleClose={handleClose}
          videoUrl={videoUrl}
        />
      )}
    </div>
  );
};

const VideoPop = ({ size, open, handleClose, videoUrl }) => {
  return (
    <div className=" ">
      <Modal size={size} open={open} onClose={handleClose}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <iframe
            className=" left-0 h-[60vh] w-[100%] rounded "
            src={videoUrl}
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Secondsec;
