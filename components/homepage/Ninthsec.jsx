import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import axios from "../../app/api/axiosintercepter";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

import { IoMdStar } from "react-icons/io";
import { Card } from "../../components/ui/card";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

const Ninthsec = () => {
  const [activeVid, setactiveVid] = useState(1);
  const [feedbackarray, setfeedbackarray] = useState([]);
  const [videoLinks, setvideoLinks] = useState([]);

  const getFeedbacks = async () => {
    try {
      const datarecieved = await axios.get("/landingpage/getfeedbacks");
      setfeedbackarray(datarecieved.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getVideoLinks = async () => {
    try {
      const datarecieved = await axios.get("/landingpage/getvideolinkslanding");
      setvideoLinks(datarecieved.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeedbacks();
    getVideoLinks();
  }, []);
  return (
    <>
      {feedbackarray &&
      feedbackarray.length < 1 &&
      videoLinks &&
      videoLinks.length < 1 ? null : (
        <div className="relative flex  h-fit md:h-fit bg-[url('/landing/bg1.jpg')] bg-no-repeat	bg-cover">
          <div className="py-16 top-0 flex flex-col gap-6  items-center w-[100vw]">
            {feedbackarray.length < 1 ? null : (
              <>
                <div className="flex flex-col items-center">
                  <div>
                    <p className="font-bold text-2xl md:text-4xl text-white">
                      Tu opinión es importante
                    </p>
                  </div>
                  <div className="flex ">
                    <div className="h-[4px] w-[100px] bg-[#664198] ml-340px] "></div>
                    <div className="h-[4px] w-[50px] bg-[#664198] ml-[30px]"></div>
                  </div>
                </div>
                <div>
                  <p className="text-white px-2 text-lg text-center md:w-[45%] m-auto">
                    Tu opinión es fundamental para enriquecer nuestro proceso y
                    facilitar que otros tomen decisiones más acertadas.
                  </p>
                </div>
                {feedbackarray.length < 1 ? null : (
                  <div className="flex flex-col gap-3 md:flex-row md:gap-6 ">
                    <Carousel
                      opts={{
                        align: "start",
                      }}
                      className="w-[76vw] md:w-[60vw] "
                    >
                      <CarouselContent>
                        {feedbackarray?.map((feedback, index) => (
                          <CarouselItem
                            key={index}
                            className="basis-1/1 md:basis-1/2 "
                          >
                            <div className="p-1  bg-[url('/landing/bg2.png')] bg-no-repeat rounded-xl	bg-cover">
                              <Card className="bg-transparent border-[0px]">
                                {/* <CardContent className="flex aspect-square items-center justify-center p-6"> */}
                                <div className="relative text-white w-[76vw] h-[25rem] md:w-auto md:h-[20rem] rounded-[10px] overflow-hidden ">
                                  <div className="flex flex-col justify-between  h-[100%] absolute top-0 w-[95%]">
                                    <div className=" flex flex-col gap-4 p-4">
                                      <div className="flex text-white items-center gap-3">
                                        <div className="rounded-full overflow-hidden h-[4rem] w-[4rem]">
                                          <img
                                            className="h-[100%] w-[100%]"
                                            src={feedback.image}
                                            alt=""
                                          />
                                        </div>
                                        <div>
                                          <p className="font-semibold">
                                            {feedback.name}
                                          </p>
                                          <p>{feedback.occupation}</p>
                                        </div>
                                      </div>
                                      <div>
                                        <p className="font-light text-sm ">
                                          {feedback.feedback}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="p-4">
                                      <div className="h-[2px] w-[100%] bg-slate-300"></div>
                                      <div className="flex items-center justify-end gap-4 ">
                                        {/* <p className="text-sm">
                                                                Lorem ipsu
                                                            </p> */}
                                        {Array(5)
                                          .fill(0)
                                          .map((star, index) => {
                                            return (
                                              <div>
                                                <p>
                                                  <IoMdStar
                                                    className={
                                                      index >= feedback.rating
                                                        ? "text-gray-400 text-[1.7rem]"
                                                        : "text-yellow-600 text-[1.7rem]"
                                                    }
                                                  />
                                                </p>
                                              </div>
                                            );
                                          })}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Card>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </div>
                )}
              </>
            )}

            <div>
              <div className="flex items-center relative justify-center">
                <div className="relative hidden w-[15rem]  md:flex">
                  {videoLinks[activeVid - 1] ? (
                    <>
                      <iframe
                        src={
                          videoLinks[activeVid - 1]?.videoUrl
                            ? videoLinks[activeVid - 1]?.videoUrl
                            : null
                        }
                        className={`h-[15rem] w-[100%] object-cover`}
                      />
                      <div
                        className={`absolute h-[15rem] bg-[#00000056] w-[100%]  top-0`}
                      ></div>
                    </>
                  ) : null}
                </div>
                <iframe
                  src={videoLinks[activeVid]?.videoUrl}
                  className={`h-[24rem] md:h-[30rem] w-[98vw] md:w-[50rem] object-cover`}
                />
                <div className="relative w-[15rem] hidden md:flex">
                  {videoLinks[activeVid + 1] ? (
                    <>
                      <iframe
                        src={videoLinks[activeVid + 1]?.videoUrl}
                        className={`h-[15rem] w-[100%] object-cover`}
                      />
                      <div
                        className={`absolute h-[15rem] bg-[#00000056] w-[100%]  top-0`}
                      ></div>
                    </>
                  ) : null}
                </div>
                <IoIosArrowDropleftCircle
                  onClick={() => {
                    if (activeVid == 0) return null;
                    setactiveVid(activeVid - 1);
                  }}
                  className="absolute text-[3rem] md:text-[4rem] top-[10rem] md:top-[15rem] left-[.5rem] md:left-[8rem] cursor-pointer text-purple-500"
                />
                <IoIosArrowDroprightCircle
                  onClick={() => {
                    if (activeVid == videoLinks?.length - 1) return null;
                    setactiveVid(activeVid + 1);
                  }}
                  className="absolute text-[3rem] md:text-[4rem] top-[10rem] md:top-[15rem] right-[.5rem] md:right-[8rem] cursor-pointer text-purple-500"
                />
              </div>
              <div className="flex items-center relative"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Ninthsec;
