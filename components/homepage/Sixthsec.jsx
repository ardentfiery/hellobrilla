import React, { useEffect, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import axios from "../../app/api/axiosintercepter";
import { Modal, Input, Button } from "rsuite";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-hot-toast";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Sixthsec = () => {
  const [currentEvent, setcurrentEvent] = useState({});
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState();
  const handleOpen = (value) => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [eventData, seteventData] = useState([]);

  const calculateTimeLeft = (eventEndDate) => {
    const difference = +new Date(eventEndDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days:
          Math.floor(difference / (1000 * 60 * 60 * 24)) < 10
            ? `0${Math.floor(difference / (1000 * 60 * 60 * 24))}`
            : `${Math.floor(difference / (1000 * 60 * 60 * 24))}`,
        hours:
          Math.floor((difference / (1000 * 60 * 60)) % 24) < 10
            ? `0${Math.floor((difference / (1000 * 60 * 60)) % 24)}`
            : `${Math.floor((difference / (1000 * 60 * 60)) % 24)}`,
        minutes:
          Math.floor((difference / 1000 / 60) % 60) < 10
            ? `0${Math.floor((difference / 1000 / 60) % 60)}`
            : `${Math.floor((difference / 1000 / 60) % 60)}`,
        seconds:
          Math.floor((difference / 1000) % 60) < 10
            ? `0${Math.floor((difference / 1000) % 60)}`
            : `${Math.floor((difference / 1000) % 60)}`,
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      seteventData((prevEvents) =>
        prevEvents.map((event) => ({
          ...event,
          timeLeft: calculateTimeLeft(event.eventEndDate),
        }))
      );
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const getEvent = async () => {
    try {
      const data = await axios.get("/landingpage/getevents");
      seteventData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const parseText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      } else {
        return part;
      }
    });
  };

  useEffect(() => {
    getEvent();
  }, []);
  const container = useRef(null);
  useGSAP(
    () => {
      // gsap code here...
      gsap.from(".eventos", {
        scrollTrigger: {
          trigger: ".eventos",
          start: "top 50%",
          end: "bottom 80%",
        },
        duration: 0.5,
        opacity: 0,
        x: -1000,
      });
      gsap.from(".eventosleft", {
        scrollTrigger: {
          trigger: ".eventosleft",
          start: "top 50%",
          end: "bottom 80%",
        },
        duration: 0.5,
        opacity: 0,
        x: 1000,
      });
    },
    { scope: container }
  );
  return (
    <>
      {eventData.length < 1 ? null : (
        <div className="mt-[15vh] relative" ref={container}>
          <img
            className="animate-updown h-[20px]  left-[45vw] -z-10 absolute "
            src="/landing/blur.png"
            alt=""
          />
          <img
            className="animate-sideways h-[20px]  left-[30vw] -z-10 absolute "
            src="/landing/blur.png"
            alt=""
          />
          <img
            className="animate-topdowntwo h-[15px] top-[40vh] right-[70vw] z-10 absolute "
            src="/landing/xx.png"
            alt=""
          />
          <img
            className="animate-topdown h-[30px] top-[10vh] left-[90vw] z-10 absolute "
            src="/landing/clean.png"
            alt=""
          />{" "}
          <div className="eventos flex flex-col items-center ">
            <div>
              <p className="font-bold text-4xl">Eventos</p>
            </div>
            <div className="flex ">
              <div className="h-[4px] w-[50px] bg-[#664198] ml-[30px] "></div>
              <div className="h-[4px] w-[30px] bg-[#664198] ml-[30px]"></div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-5">
            {eventData.map((event, index) => {
              return (
                <div className="eventos md:flex-row flex flex-col items-center md:grid md:grid-cols-1 lg:grid lg:grid-cols-[25%_37.5%_37.5%]  gap-4 mt-6 w-[90vw]  m-atuo">
                  <div className="w-[25rem] md:w-[70%] mt-4 md:mt-0 flex justify-center">
                    <img
                      className="w-[100%]  ml-4 object-cover"
                      src={event.eventImage}
                      alt=""
                    />
                  </div>
                  <div className="eventos flex flex-col gap-4  px-7 md:px-0">
                    <div>
                      <p className="text-3xl font-semibold">
                        {event.eventName}
                      </p>
                    </div>
                    <div className="eventos">
                      <p className="text-xl font-medium whitespace-pre-wrap	">
                        {(() => {
                          try {
                            return event.eventDescription
                              ? parseText(JSON.parse(event.eventDescription))
                              : null;
                          } catch (error) {
                            console.error(
                              "Invalid JSON string:",
                              error.message
                            );
                            return parseText(event.eventDescription);
                          }
                        })()}
                      </p>
                    </div>
                    <div className="eventos">
                      <p className="text-3xl font-semibold text-center md:text-left">
                        COSTO:
                        {event.eventDiscountedCost ? (
                          <>
                            {" "}
                            <span className="text-3xl font-light line-through">
                              ${event.eventOriginalCost}
                            </span>{" "}
                            ${event.eventDiscountedCost}
                          </>
                        ) : (
                          <p>{event.eventOriginalCost}$</p>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className=" eventosleft flex flex-col gap-8 md:pr-16 items-center ">
                    <div>
                      <p className="font-semibold md:text-2xl text-xl ">
                        La oferta del Evento terminará en:
                      </p>
                    </div>
                    <div className="flex lg:gap-6 gap-3 ">
                      <div className="flex flex-col gap-2 items-center">
                        <div className="flex gap-2">
                          <div className="h-[9vh] lg:w-[2.4rem]  w-[8vw]  rounded-lg bg-[#664198] text-white font-bold text-4xl flex items-center justify-center">
                            <p>{event?.timeLeft?.days[0]}</p>
                          </div>
                          <div className="h-[9vh] lg:w-[2.4rem]  w-[8vw]  rounded-lg bg-[#664198] text-white font-bold text-4xl flex items-center justify-center">
                            <p>{event?.timeLeft?.days[1]}</p>
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold lg:text-xl items-center ">
                            Dias
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-center">
                        <div className="flex gap-2">
                          <div className="h-[9vh] lg:w-[2.4rem]  w-[8vw]  rounded-lg bg-[#664198] text-white font-bold text-4xl flex items-center justify-center">
                            <p>{event?.timeLeft?.hours[0]}</p>
                          </div>
                          <div className="h-[9vh] lg:w-[2.4rem]  w-[8vw]  rounded-lg bg-[#664198] text-white font-bold text-4xl flex items-center justify-center">
                            <p>{event?.timeLeft?.hours[1]}</p>
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold lg:text-xl items-center ">
                            Horas
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-center">
                        <div className="flex gap-2">
                          <div className="h-[9vh] lg:w-[2.4rem]  w-[8vw]  rounded-lg bg-[#664198] text-white font-bold text-4xl flex items-center justify-center">
                            <p>{event?.timeLeft?.minutes[0]}</p>
                          </div>
                          <div className="h-[9vh] lg:w-[2.4rem]  w-[8vw]  rounded-lg bg-[#664198] text-white font-bold text-4xl flex items-center justify-center">
                            <p>{event?.timeLeft?.minutes[1]}</p>
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold lg:text-xl items-center ">
                            Minutos
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-center">
                        <div className="flex gap-2">
                          <div className="h-[9vh] lg:w-[2.4rem]  w-[8vw]  rounded-lg bg-[#664198] text-white font-bold text-4xl flex items-center justify-center">
                            <p>{event?.timeLeft?.seconds[0]}</p>
                          </div>
                          <div className="h-[9vh] lg:w-[2.4rem]  w-[8vw]  rounded-lg bg-[#664198] text-white font-bold text-4xl flex items-center justify-center">
                            <p>{event?.timeLeft?.seconds[1]}</p>
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold lg:text-xl items-center ">
                            Segundos
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="eventosleft">
                      <button
                        onClick={() => {
                          setcurrentEvent(event);
                          handleOpen("md");
                        }}
                        className="flex gap-2 items-center bg-[#664198] px-8 py-5 rounded-full"
                      >
                        <p className="text-white text-xl font-semibold">
                          Comprar ahora
                        </p>

                        <p>
                          <IoMdArrowDropright className="text-white text-3xl" />
                        </p>
                      </button>
                    </div>
                  </div>
                  <Newcomponent
                    size={size}
                    open={open}
                    handleClose={handleClose}
                    currentEvent={currentEvent}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Sixthsec;
const Newcomponent = ({ size, open, handleClose, currentEvent }) => {
  const [inputTyped, setinputTyped] = useState({
    name: "",
    phonenumber: "",
    email: "",
  });
  const validDomains = ["gmail.com", "hotmail.com", "yahoo.com"];
  const validateEmailDomain = (email) => {
    const domain = email.split("@")[1];
    return validDomains.includes(domain);
  };
  const purchaseApi = async () => {
    const toastId = toast.loading("processing request...");
    if (!validateEmailDomain(inputTyped.email)) {
      toast.dismiss(toastId);
      toast.error("Email must be from Gmail, Hotmail, or Yahoo.");
      return;
    }
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_PUB_KEY);
    // const stripe = await loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY_TEST);
    try {
      const resp = await axios.post(
        // "http://localhost:3502/create-checkout-session",
        "/create-checkout-session",
        {
          product: {
            name: currentEvent.eventName,
            price: currentEvent.eventDiscountedCost
              ? currentEvent.eventDiscountedCost
              : currentEvent.eventOriginalCost,
            image: currentEvent.eventImage,
            eventId: currentEvent._id,
            eventName: currentEvent.eventName,
          },
          inputTyped,
        }
      );
      toast.dismiss(toastId);
      const result = await stripe.redirectToCheckout({
        sessionId: resp.data.sessionId,
      });
    } catch (error) {
      toast.dismiss(toastId);
    }
    // }
  };

  return (
    <div>
      <Modal size={size} open={open} onClose={handleClose}>
        <Modal.Header>
          {/* <Modal.Title>Modal Title</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-4">
            <Input
              onChange={(value) => {
                setinputTyped({
                  ...inputTyped,
                  name: value,
                });
              }}
              placeholder="Enter your name..."
            />
            <Input
              onChange={(value) => {
                setinputTyped({
                  ...inputTyped,
                  phonenumber: value,
                });
              }}
              placeholder="Enter your phone number..."
            />
            <Input
              onChange={(value) => {
                setinputTyped({ ...inputTyped, email: value });
              }}
              placeholder="Enter your email..."
            />
            <Button onClick={purchaseApi} color="violet" appearance="ghost">
              Submit
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
