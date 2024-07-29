"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import "./PageStyle.css";
import { usePaginaContext } from "../../../context/PaginaContext";
import MiPaginaLoader from "../../../utils/MiPaginaLoader";

const Navbar = ({ params }) => {
  const [hamClicked, sethamClicked] = useState(false);
  const { userSocials, userId, activeTab, setactiveTab, isLoading } =
    usePaginaContext();
  const router = useRouter();

  return (
    <>
      {isLoading ? (
        <MiPaginaLoader />
      ) : (
        <div className="max-w-[100%] w-[100vw] overflow-hidden ">
          <div>
            {hamClicked ? (
              <MobileNavPage sethamClicked={sethamClicked} />
            ) : null}

            <div className="bg-[#813DA1] h-[5rem] md:h-[4.5rem] xl:h-[5rem] w-screen navclip flex justify-between flex-col md:flex-row items-center md:items-start  ">
              <a href={`mailto:${userSocials?.email}`}>
                <div className="flex text-white gap-1 mt-[0.5rem] ml-[5%] ">
                  <img
                    src="/mail.png"
                    className="w-[1.5rem] h-[1.5rem] "
                    alt=""
                  />

                  <p className=" text-[1.1rem] text-center">
                    {userSocials?.email}
                  </p>
                </div>
              </a>
              <div className="flex gap-8 mt-[0.5rem] pr-[2%]">
                <div>
                  <img
                    onClick={() => {
                      userSocials?.facebook
                        ? window.open(userSocials?.facebook, "_blank")
                        : null;
                    }}
                    src="/pgfb.png"
                    className="w-[2.2rem] h-[2.2rem] cursor-pointer"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    onClick={() => {
                      userSocials?.instagram
                        ? window.open(userSocials?.instagram, "_blank")
                        : null;
                    }}
                    src="/pginsta.png"
                    className="md:w-[2rem] md:h-[2rem] w-[2rem] h-[2rem] cursor-pointer"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    onClick={() => {
                      userSocials?.youtube
                        ? window.open(userSocials?.youtube, "_blank")
                        : null;
                    }}
                    src="/pgyt.png"
                    className="md:w-[1.8rem] md:h-[1.8rem] w-[2rem] h-[2rem] cursor-pointer"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    onClick={() => {
                      userSocials?.whatsapp
                        ? window.open(userSocials?.whatsapp, "_blank")
                        : null;
                    }}
                    src="/pgwhatsapp.png"
                    className="md:w-[1.6rem] md:h-[1.6rem] w-[2rem] h-[2rem] cursor-pointer"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    onClick={() => {
                      userSocials?.sms
                        ? window.open(userSocials?.sms, "_blank")
                        : null;
                    }}
                    src="/pgsms.png"
                    className="md:w-[1.4rem] md:h-[1.4rem] w-[2rem] h-[2rem] cursor-pointer"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:mt-3">
            <div className="flex items-center md:justify-around lg:w-[75%] ">
              <div className="lg:hidden flex shadow-sm w-screen justify-between items-center px-4 py-2">
                <GiHamburgerMenu
                  onClick={() => {
                    sethamClicked(true);
                  }}
                  className=" text-[2rem]"
                />
                <img src="/sleepmlogo.png" className="w-[7rem]" alt="" />
              </div>
              <img
                src="/sleepmlogo.png"
                className="w-[9rem] hidden lg:flex"
                alt=""
              />
              <div className=" gap-5 flex-wrap items-center text-[1.2rem] hidden lg:flex ">
                <p></p>
                <p
                  onClick={() => {
                    setactiveTab(0);
                    router.push(`/slepweb/${userId}`);
                  }}
                  className={`hover:font-bold hover:text-[#813DA1] cursor-pointer transition-all ease-in-out duration-300 ${
                    activeTab == 0 ? "text-[#813DA1] font-bold" : ""
                  }`}
                >
                  Inicio
                </p>
                <p
                  onClick={() => {
                    setactiveTab(1);
                    // router.push(`/slepweb/${userId}/`)
                  }}
                  className={`cursor-pointer hover:font-bold hover:text-[#813DA1] transition-all ease-in-out duration-300 ${
                    activeTab == 1 ? "text-[#813DA1] font-bold" : ""
                  }`}
                >
                  Tecnología
                </p>
                <p
                  onClick={() => {
                    setactiveTab(2);
                    // router.push(`/slepweb/${userId}/`)
                  }}
                  className={`cursor-pointer hover:font-bold hover:text-[#813DA1] transition-all ease-in-out duration-300 ${
                    activeTab == 2 ? "text-[#813DA1] font-bold" : ""
                  }`}
                >
                  Testimonios
                </p>
                <p
                  onClick={() => {
                    setactiveTab(3);
                    router.push(`/slepweb/${userId}/products`);
                  }}
                  className={`cursor-pointer hover:font-bold hover:text-[#813DA1] transition-all ease-in-out duration-300 ${
                    activeTab == 3 ? "text-[#813DA1] font-bold" : ""
                  }`}
                >
                  Productos
                </p>
                <p
                  onClick={() => {
                    setactiveTab(4);
                    // router.push(`/slepweb/${userId}/`)
                  }}
                  className={`cursor-pointer hover:font-bold hover:text-[#813DA1] transition-all ease-in-out duration-300 ${
                    activeTab == 4 ? "text-[#813DA1] font-bold" : ""
                  }`}
                >
                  Plan de pagos
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

const MobileNavPage = ({ sethamClicked }) => {
  return (
    <div className="absolute h-screen w-screen bg-cyan-100 overflow-hidden">
      <div className="lg:hidden flex shadow-sm w-screen justify-between items-center px-4 py-2">
        <RxCross2
          onClick={() => {
            sethamClicked(false);
          }}
          className=" text-[2rem] text-red-500 font-bold"
        />
        <img src="/sleepmlogo.png" className="w-[7rem]" alt="" />
      </div>
      <div className="h-[60%] w-full  flex gap-[2rem] flex-wrap flex-col items-center justify-center">
        <p className="hover:font-bold hover:text-[#813DA1] cursor-pointer transition-all ease-in-out duration-300">
          Inicio
        </p>
        <p className="cursor-pointer hover:font-bold hover:text-[#813DA1] transition-all ease-in-out duration-300">
          Tecnología
        </p>
        <p className="cursor-pointer hover:font-bold hover:text-[#813DA1] transition-all ease-in-out duration-300">
          Testimonios
        </p>
        <p className="cursor-pointer hover:font-bold hover:text-[#813DA1] transition-all ease-in-out duration-300">
          Productos
        </p>
        <p className="cursor-pointer hover:font-bold hover:text-[#813DA1] transition-all ease-in-out duration-300">
          Plan de pagos
        </p>{" "}
      </div>
    </div>
  );
};
