"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { IoMdNotificationsOutline } from "react-icons/io";
import Popup from "./Popup";
import MenuItems from "./MenuItems";
const Left = () => {
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState();
  const handleOpen = (value) => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const router = useRouter();


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
      icon: "/dashboard/Conferencias.png", // Optional icon name
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
    {
      label: "Sleepm",
      icon: "/dashboard/Sleepm.png", // Optional icon name
      children: [
        { label: "Empresa", index: 0 },
        { label: "Recursos", index: 1 },
        { label: "Tutoriales" },
        { label: "Mi pagina web" },
      ],
    },
    // Add more menu items here
  ];
  const handleSelect = (item) => {
    // Handle menu item selection here

    console.log("Selected item:", item);
  };

  const [hamclicked, sethamclicked] = useState(false);
  return (
    <div className="relative ">
      {hamclicked ? (
        <Secondary
          menuData={menuData}
          handleSelect={handleSelect}
          sethamclicked={sethamclicked}
        />
      ) : null}

      <div className=" z-10 pt-2 lg:pt-0  w-[100vw]">
        <RxHamburgerMenu
          onClick={() => {
            sethamclicked(true);
          }}
          className="text-3xl text-[#664198] ml-4 lg:hidden  "
        />
      </div>
      <div className="absolute right-8 flex gap-2 top-1" style={{
        display: hamclicked ? "none" : "flex",
      }}>
        <div className=" right-20 lg:hidden visible">
          <IoMdNotificationsOutline className="text-3xl" />
        </div>

        <Popup size={size} open={open} handleClose={handleClose} />
        <div
          onClick={() => {
            handleOpen("full");
          }}
          className="h-[30px] w-[30px] z-0  right-10 lg:hidden"
        >
          <img
            className="h-[100%] w-[100%] rounded-full"
            src="/dashboard/girlie.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="lg:flex flex-col hidden items-center border-[1.8px] border-[#664198] rounded-3xl h-[97vh] lg:w-[17rem] xl:w-[20rem]">
        <div className="w-[100%] px-[10%] flex items-center justify-center">
          <div className="h-[4rem] mt-2 flex justify-between  ">
            <img
              className="h-[100%] "
              src="/landing/logo.png
            "
              alt=""
            />
          </div>
        </div>
        <div className="overflow-x-hidden no-scrollbar w-[100%] mt-5">
          <MenuItems />
        </div>
      </div>
    </div>
  );
};

export default Left;

const Secondary = ({ menuData, handleSelect, sethamclicked }) => {
  return (
    <div className="h-[100vh] w-[100vw]  ">
      <div className="flex flex-col items-center  h-[97vh] ">
        <div className=" h-[4rem] w-[20rem] mt-2 flex justify-between items-center  ">
          <img
            className="h-[100%] "
            src="/landing/logo.png
            "
            alt=""
          />
          <RxCross2
            onClick={() => {
              sethamclicked(false);
            }}
            className="text-[#664198] text-3xl"
          />
        </div>
        <div className="overflow-x-hidden  no-scrollbar h-fit hide-scrollbar">
          <MenuItems mobile={true} sethamclicked={sethamclicked} />
        </div>
      </div>
    </div>
  );
};
