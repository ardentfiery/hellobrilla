import React, { useState } from "react";
import { useDashContext } from "@/context/DashboardContext";

const MenuItems = () => {
  const { activeDashPage, setactiveDashPage } = useDashContext();

  const [showChildOfSleepm, setshowChildOfSleepm] = useState(false);

  const menuData = [
    {
      title: "Dashboard",
      icon: "/dashboard/Dashboard.png", // Optional icon name
    },
    {
      title: "Enternamiento en crecimiento personal",
      icon: "/dashboard/crecimientopersonal.png", // Optional icon name
    },

    {
      title: "Entrenamiento en Liderazgo",
      icon: "/dashboard/Liderazgo.png", // Optional icon name
    },
    {
      title: "Entrenamiento en ventas",
      icon: "/dashboard/Ventas.png", // Optional icon name
    },
    {
      title: "Entrenamiento en marketing",
      icon: "/dashboard/Marketing.png", // Optional icon name
    },
    {
      title: "Mi reto",
      icon: "/dashboard/Retos.png", // Optional icon name
    },
    {
      title: "Podcast",
      icon: "/dashboard/Podcast.png", // Optional icon name
    },
    {
      title: "Cursos",
      icon: "/dashboard/Cursos.png", // Optional icon name
    },
    {
      title: "Conferencias",
      icon: "/dashboard/confer.png", // Optional icon name
    },
    {
      title: "Referidos",
      icon: "/dashboard/Referidos.png", // Optional icon name
    },
    {
      title: "Ganacias",
      icon: "/dashboard/Ganancias.png", // Optional icon name
    },
    {
      title: "Mi perfit",
      icon: "/dashboard/Miperfil.png", // Optional icon name
    },
  ];
  return (
    <div className="w-[100%] flex flex-col gap-3 pb-4 no-scrollbar">
      {menuData.map((item, index) => {
        return (
          <div
            className={`grid grid-cols-[12.5rem_1rem] gap-3 m-auto group cursor-pointer hover:bg-[#7e61a559]  hover:rounded-xl px-2 py-2 w-[16rem] transition-all ease-in-out duration-300 ${
              index === activeDashPage ? "bg-[#664198] rounded-xl " : ""
            }`}
            onClick={() => {
              setactiveDashPage(index);
            }}
          >
            <div className="flex gap-4 justify-start items-center">
              <div
                className={`h-[1.6rem] w-[1.6rem] ${
                  index === 1
                    ? "w-[1.9rem]"
                    : index == 8 || index == 0
                    ? "w-[1.2rem]"
                    : ""
                }
               ${index === activeDashPage ? " invert" : ""}`}
              >
                <img
                  src={item.icon}
                  alt="dashboard image"
                  className=" w-[100%] "
                />
              </div>
              <p
                className={`font-semibold  ${
                  index === activeDashPage ? "text-white" : ""
                }`}
              >
                {item.title}
              </p>
            </div>
            <div className="flex items-center justify-end">
              <img
                src="/dashboard/dasharrow.png"
                alt="dashboard image"
                className={`invert h-[0.7rem] w-[0.7rem] ${
                  index === activeDashPage ? " invert-0" : ""
                }`}
              />
            </div>
          </div>
        );
      })}
      <div>
        <div
          className={`grid grid-cols-[12.5rem_1rem] gap-3 m-auto group cursor-pointer hover:bg-[#7e61a559]  hover:rounded-xl px-2 py-2 w-[16rem] transition-all ease-in-out duration-300 ${
            [12, 12.0, 12.1, 12.2, 12.3].some((page) => page === activeDashPage)
              ? "bg-[#664198] rounded-xl "
              : ""
          }`}
          onClick={() => {
            setactiveDashPage(12.0);
            setshowChildOfSleepm(!showChildOfSleepm);
          }}
        >
          <div className="flex gap-4 justify-start items-center">
            <div
              className={`h-[1.6rem] w-[1.6rem] 
               `}
            >
              <img
                src="/dashboard/Sleepm.png"
                alt="dashboard image"
                className=" w-[100%] "
              />
            </div>
            <p
              className={`font-semibold ${
                [12, 12.0, 12.1, 12.2, 12.3].some(
                  (page) => page === activeDashPage
                )
                  ? "text-white"
                  : ""
              } `}
            >
              Sleepm
            </p>
          </div>
          <div className="flex items-center justify-end">
            <img
              src="/dashboard/dasharrow.png"
              alt="dashboard image"
              className={`invert h-[0.7rem] w-[0.7rem] `}
            />
          </div>
        </div>
        {showChildOfSleepm ? (
          <div className="text-[0.9rem] mt-2">
            <div
              className={` m-auto group  cursor-pointer hover:bg-[#7e61a559]  hover:rounded-xl px-2 py-2 w-[12rem] transition-all ease-in-out duration-300 ${
                activeDashPage === 12.0 ? "bg-[#664198] rounded-xl " : ""
              }`}
              onClick={() => {
                setactiveDashPage(12.0);
              }}
            >
              <div className="flex gap-4 justify-start items-center">
                <p
                  className={`font-semibold  ${
                    activeDashPage === 12.0 ? "text-white" : ""
                  }`}
                >
                  {">> >> >> Empresa"}
                </p>
              </div>
            </div>
            <div
              className={` m-auto group cursor-pointer hover:bg-[#7e61a559]  hover:rounded-xl px-2 py-2 w-[12rem] transition-all ease-in-out duration-300 ${
                activeDashPage === 12.1 ? "bg-[#664198] rounded-xl " : ""
              }`}
              onClick={() => {
                setactiveDashPage(12.1);
              }}
            >
              <div className="flex gap-4 justify-start items-center">
                <p
                  className={`font-semibold  ${
                    activeDashPage === 12.1 ? "text-white" : ""
                  }`}
                >
                  {">> >> >> Recursos"}
                </p>
              </div>
            </div>
            <div
              className={` m-auto group cursor-pointer hover:bg-[#7e61a559]  hover:rounded-xl px-2 py-2 w-[12rem] transition-all ease-in-out duration-300 ${
                activeDashPage === 12.2 ? "bg-[#664198] rounded-xl " : ""
              }`}
              onClick={() => {
                setactiveDashPage(12.2);
              }}
            >
              <div className="flex gap-4 justify-start items-center">
                <p
                  className={`font-semibold  ${
                    activeDashPage === 12.2 ? "text-white" : ""
                  }`}
                >
                  {">> >> >> Tutoriales"}
                </p>
              </div>
            </div>
            <div
              className={` m-auto group cursor-pointer hover:bg-[#7e61a559]  hover:rounded-xl px-2 py-2 w-[12rem] transition-all ease-in-out duration-300 ${
                activeDashPage === 12.3 ? "bg-[#664198] rounded-xl " : ""
              }`}
              onClick={() => {
                setactiveDashPage(12.3);
              }}
            >
              <div className="flex gap-4 justify-start items-center">
                <p
                  className={`font-semibold  ${
                    activeDashPage === 12.3 ? "text-white" : ""
                  }`}
                >
                  {">> >> >> Mi pagina web"}
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div>
        <div className="flex gap-2 justify-center items-center">
          <div className=" w-[2rem] ">
            <img src="/dashboard/spainflag.png" className=" w-[100%] " lt="" />
          </div>
          <p className="text-[1.4rem] font-bold">Español</p>
        </div>
        <div className="flex justify-center">
          <p>version 1.0.1</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
