"use client";
import React, { useEffect, useState, useRef } from "react";
import axios from "../../../app/api/axiosintercepter";
import PcProfile from "../PcProfile";
import ImageViewPop from "./ImageViewPop";
import PopTriptico from "./PopTriptico";
import PopPlan from "./PopPlan";
import PopFolleto from "./PopFolleto";
import PopProducts from "./PopProducts";
import PopVisualPdf from "./PopVisualPdf";
import PopVisualVideo from "./PopVisualVideo";
import ProfilePop from "../ProfilePop";

const Recursos = ({ isActive }) => {
  const [posts, setposts] = useState([]);
  const [products, setproducts] = useState([]);
  const [clickedProduct, setclickedProduct] = useState({});
  const [clickedImage, setClickedImage] = useState();
  const [pop, setPop] = useState(false);

  const scrollDiv = useRef(null);
  const scrollDivProd = useRef(null);

  const [openProfile, setOpenProfile] = useState(false);
  const [sizeProfile, setSizeProfile] = useState();
  const handleOpenProfile = (value) => {
    setSizeProfile(value);
    setOpenProfile(true);
  };
  const handleCloseProfile = () => setOpenProfile(false);

  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const handleOpen = (value) => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [openPlan, setOpenPlan] = useState(false);
  const [sizePlan, setSizePlan] = useState();
  const handleOpenPlan = (value) => {
    setSizePlan(value);
    setOpenPlan(true);
  };
  const handleClosePlan = () => setOpenPlan(false);
  const [openFolleto, setOpenFolleto] = useState(false);
  const [sizeFolleto, setSizeFolleto] = useState();
  const handleOpenFolleto = (value) => {
    setSizeFolleto(value);
    setOpenFolleto(true);
  };
  const handleCloseFolleto = () => setOpenFolleto(false);
  const [openProduct, setOpenProduct] = useState(false);
  const [sizeProduct, setSizeProduct] = useState();
  const handleOpenProduct = (value) => {
    setSizeProduct(value);
    setOpenProduct(true);
  };
  const handleCloseProduct = () => setOpenProduct(false);
  const [openPdf, setOpenPdf] = useState(false);
  const [sizePdf, setSizePdf] = useState();
  const handleOpenPdf = (value) => {
    setSizePdf(value);
    setOpenPdf(true);
  };
  const handleClosePdf = () => setOpenPdf(false);
  const [openVideo, setOpenVideo] = useState(false);
  const [sizeVideo, setSizeVideo] = useState();
  const handleOpenVideo = (value) => {
    setSizeVideo(value);
    setOpenVideo(true);
  };
  const handleCloseVideo = () => setOpenVideo(false);

  const getPosts = async () => {
    try {
      const resp = await axios.get("/sleepm/getsleepmposts");
      setposts(resp?.data?.data);
    } catch (error) {
      console.log(`error gettting posts: ${error}`);
    }
  };
  const getProducts = async () => {
    try {
      const resp = await axios.get("/sleepm/getsleepmproducts");
      setproducts(resp?.data?.data);
    } catch (error) {
      console.log(`error gettting products: ${error}`);
    }
  };

  useEffect(() => {
    if (isActive) {
      getPosts();
      getProducts();
    }
  }, [isActive]);

  return (
    <div className="flex flex-col  mt-6 mb-16 pr-3">
      {pop && <ImageViewPop pop={pop} setPop={setPop} imgsrc={clickedImage} />}
      <ProfilePop
        size={sizeProfile}
        open={openProfile}
        handleClose={handleCloseProfile}
        handleOpenProfile={handleOpenProfile}
      />
      <PopTriptico
        size={size}
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
      <PopPlan
        size={sizePlan}
        open={openPlan}
        handleClose={handleClosePlan}
        handleOpen={handleOpenPlan}
      />
      <PopFolleto
        size={sizeFolleto}
        open={openFolleto}
        handleClose={handleCloseFolleto}
        handleOpen={handleOpenFolleto}
      />
      <PopProducts
        size={sizeProduct}
        open={openProduct}
        handleClose={handleCloseProduct}
        handleOpen={handleOpenProduct}
        clickedProduct={clickedProduct}
      />
      <PopVisualPdf
        size={sizePdf}
        open={openPdf}
        handleClose={handleClosePdf}
        handleOpen={handleOpenPdf}
      />
      <PopVisualVideo
        size={sizeVideo}
        open={openVideo}
        handleClose={handleCloseVideo}
        handleOpen={handleOpenVideo}
      />

      <PcProfile handleOpenProfile={handleOpenProfile} />
      <div className="mt-0 lg:mt-0">
        <p className="text-4xl text-[#664198] font-bold ml-8 ">Recursos</p>
      </div>

      <div className=" md:grid xl:grid-cols-[3fr_1fr] flex flex-col gap-6 mb-4  border-[#664198] border-[1.8px] rounded-3xl mx-2 lg:mx-0 pb-4 z-10  ">
        <div className="flex flex-col  gap-2  lg:w-auto items-center ">
          <div className="text-black flex items-center  md:justify-center mt-4 text-xl md:text-[1.7rem] font-bold">
            <p>NUESTROS PRODUCTOS</p>
          </div>
          <div className="flex  justify-center items-center px-2   md:m-0 w-[100%]  lg:w-[50rem] h-[14rem] gap-8 overflow-x-scroll hide-scrollbar  overflow-y-hidden">
            {products?.length > 0 ? (
              <>
                <div
                  onClick={() => {
                    //scroll up the post images
                    if (scrollDivProd.current) {
                      scrollDivProd.current.scrollBy({
                        left: -120,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="group hover:bg-[#664198] w-[30px] md:w-[40px] h-[30px] md:h-[40px] rounded-full border-[1px] border-[#664198] flex justify-center items-center transition-all ease-in-out duration-300 cursor-pointer"
                >
                  <p className="font-light text-[3rem] rotate-180 text-[#664198] group-hover:text-white ">
                    {">"}
                  </p>
                </div>
                <div
                  ref={scrollDivProd}
                  className="h-[60vh] w-[40rem] flex items-center gap-5 overflow-x-scroll hide-scrollbar grow-0"
                >
                  {products?.map((product, index) => {
                    return (
                      <div key={index} className="flex flex-col">
                        <div
                          onClick={() => {
                            setclickedProduct(product);
                            handleOpenProduct("calc(100% - 25%)");
                          }}
                          className="group h-[201px] w-[180px] md:w-[220px] 2xl:w-[266px]  cursor-pointer border-[#803DA1] border-[2px] rounded-3xl overflow-hidden relative transition-all ease-in-out duration-300 "
                        >
                          <img
                            className="h-[100%] w-[100%] object-cover"
                            src={product?.image}
                            alt=""
                          />

                          <div className="absolute top-0 h-full w-full group-hover:bg-[#0000004a]"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div
                  onClick={() => {
                    //scroll up the post images
                    if (scrollDivProd.current) {
                      scrollDivProd.current.scrollBy({
                        left: 120,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="group hover:bg-[#664198] w-[30px] md:w-[40px] h-[30px] md:h-[40px] rounded-full border-[1px] border-[#664198] flex justify-center items-center transition-all ease-in-out duration-300 cursor-pointer"
                >
                  <p className="font-light text-[3rem]  text-[#664198] group-hover:text-white">
                    {">"}
                  </p>
                </div>
              </>
            ) : (
              <p className="text-[1.2rem] font-bold">
                No hay productos disponibles
              </p>
            )}
          </div>

          <div className=" flex  sm:grid sm:grid-cols-2 md:flex md:flex-row flex-col items-center justify-center gap-4 mt-4 px-2  w-full  ">
            <div
              className="relative  h-[113px] w-[226px] xl:w-[220px] 2xl:w-[266px]  rounded-2xl  overflow-hidden "
              onClick={() => {
                handleOpen("calc(100% - 20%)");
              }}
            >
              <img
                className="w-[100%] h-[100%] md:w-[100%] -z-10"
                src="/dashboard/book.jpg"
                alt=""
              />
              <div className="absolute z-20 top-0 bg-[#0000006e] hover:bg-[#ffffff6e] transition-all ease-in-out duration-300 cursor-pointer border-[1.8px] border-[#664198] h-[100%] w-[100%] flex justify-center rounded-2xl items-center">
                <p
                  className=" md:text-2xl text-xl font-bold text-white shadow-md "
                  style={{
                    textShadow: "2px 2px #000000",
                  }}
                >
                  Trípticos
                </p>
              </div>
            </div>
            <div
              className="relative h-[113px] w-[226px] xl:w-[220px] 2xl:w-[266px]  overflow-hidden  rounded-2xl mt-4 sm:mt-0"
              onClick={() => {
                window.innerWidth < 650
                  ? handleOpenPlan("calc(100% - 0%)")
                  : handleOpenPlan("calc(100% - 35%)");
              }}
            >
              <img
                className="w-[100%] h-[100%] "
                src="/dashboard/book.jpg"
                alt=""
              />
              <div className="absolute z-20 top-0  bg-[#0000006e] hover:bg-[#ffffff6e] transition-all ease-in-out duration-300  rounded-2xl cursor-pointer border-[1.8px] border-[#664198] h-[100%] w-[100%] flex justify-center items-center">
                <p
                  className="md:text-2xl text-xl  font-bold text-white  "
                  style={{
                    textShadow: "2px 2px #000000",
                  }}
                >
                  Plan Servilleta
                </p>
              </div>
            </div>
            <div
              onClick={() => {
                handleOpenFolleto("calc(100% - 0%)");
              }}
              className="relative h-[113px] w-[226px] xl:w-[220px] 2xl:w-[266px] rounded-2xl overflow-hidden mt-4 sm:mt-0"
            >
              <img
                className="w-[100%] h-[100%] "
                src="/dashboard/book.jpg"
                alt=""
              />
              <div className="absolute z-20 top-0  bg-[#0000006e] hover:bg-[#ffffff6e] transition-all ease-in-out duration-300 cursor-pointer border-[1.8px]  rounded-2xl border-[#664198] h-[100%] w-[100%] flex justify-center items-center">
                <p
                  className="md:text-2xl text-xl  font-bold text-white  "
                  style={{
                    textShadow: "2px 2px #000000",
                  }}
                >
                  Folletos
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <div className="mt-4 font-bold text-black flex items-center text-xl md:text-[1.7rem] justify-center rounded-2xl">
              {" "}
              PRESENTACIÓN DE NEGOCIAS
            </div>
            <div className="flex flex-col md:flex-row items-center justify-around gap-10 md:gap-8 border-[2px] border-[#664198] h-fit py-7 w-fit px-8 md:px-0 rounded-3xl  md:w-[690px]  ">
              <div
                onClick={() => {
                  handleOpenPdf("full");
                }}
                className=" cursor-pointer group h-[148px]  w-[287px] rounded-3xl border-[1.8px] border-[#664198] relative "
              >
                <img
                  className="h-[100%] w-[100%] "
                  src="/dashboard/sleepmpdf.png"
                  alt=""
                />
                <div className="absolute z-30 top-0 h-[148px]  w-[287px] flex justify-center items-center group-hover:bg-[#00000052] rounded-3xl transition-all ease-in-out duration-300"></div>
                <p className="font-bold text-[1.4rem] text-center ">VISUAL</p>
              </div>
              <div
                onClick={() => {
                  handleOpenVideo("full");
                }}
                className=" group cursor-pointer h-[148px] w-[287px] rounded-[1.65rem] relative border-[1.8px] border-[#664198]"
              >
                <img
                  className="h-[100%] w-[100%] rounded-3xl object-cover"
                  src="/dashboard/video.jpg"
                  alt=""
                />
                <p className="font-bold text-[1.4rem] text-center ">VIDEO</p>

                <div className="absolute z-20 top-0 h-[148px]  w-[287px] flex justify-center items-center group-hover:bg-[#00000052] rounded-[30px] transition-all ease-in-out duration-300">
                  <div className="group w-[40%] h-[50%]">
                    <img
                      src="/dashboard/clickablevid.png"
                      alt=""
                      className=" w-[80%] h-[100%] object-cover cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mt-6 select-none">
          <div className="text-black h-[40px] w-[150px] font-bold flex justify-center items-center rounded-3xl md:text-[1.7rem] ">
            <p>POST</p>
          </div>
          {posts?.length > 0 ? (
            <div className="flex justify-center items-center gap-2 flex-col  h-[65vh]">
              <div
                onClick={() => {
                  //scroll up the post images
                  if (scrollDiv.current) {
                    scrollDiv.current.scrollBy({
                      top: -120,
                      behavior: "smooth",
                    });
                  }
                }}
                className="group hover:bg-[#664198] w-[33px] h-[33px] rounded-full border-[1px] border-[#664198] flex justify-center items-center transition-all ease-in-out duration-300 cursor-pointer"
              >
                <p className="font-light text-[1.8rem] -rotate-90 text-[#664198] group-hover:text-white">
                  {">"}
                </p>
              </div>
              <div
                ref={scrollDiv}
                className="h-[60vh] grid gap-5 overflow-y-scroll hide-scrollbar grow-0"
              >
                {posts?.map((post, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        setClickedImage(post?.brochure);
                        // handleOpen("calc(100% - 10rem");
                        setPop(true);
                      }}
                      className="group h-[163px] w-[157px] shadow-md shadow-black cursor-pointer  relative transition-all ease-in-out duration-300"
                    >
                      <img
                        className="h-[100%] w-[100%] object-cover"
                        src={post?.brochure}
                        alt=""
                      />
                      <div className="absolute top-0 h-full w-full group-hover:bg-[#0000004a]"></div>
                    </div>
                  );
                })}
              </div>
              <div
                onClick={() => {
                  //scroll down the post images
                  if (scrollDiv.current) {
                    scrollDiv.current.scrollBy({
                      top: 120,
                      behavior: "smooth",
                    });
                  }
                }}
                className="group hover:bg-[#664198] w-[33px] h-[33px] rounded-full border-[1px] border-[#664198] flex justify-center items-center transition-all ease-in-out duration-300 cursor-pointer"
              >
                <p className="font-light text-[1.8rem] rotate-90 text-[#664198] group-hover:text-white">
                  {">"}
                </p>
              </div>
            </div>
          ) : (
            <>
              <p className="text-[1.2rem] font-bold">No</p>
              <p className="text-[1.2rem] font-bold">Publicaciones</p>
              <p className="text-[1.2rem] font-bold">Disponible</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recursos;
