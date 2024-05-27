"use client";
import React, { useState } from "react";
import TreeNode from "./TreeNode";
import { List } from "@mui/material"; // Material UI for components
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosLogOut } from "react-icons/io";
import axios from "@/app/api/axiosintercepter";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const Left = () => {
  const router = useRouter();

  const logOutUser = async () => {
    try {
      console.log(
        "logout maa aayo"
      )
      await axios.get("/user/logout");
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const menuData = [
    {
      label: "Dashboard",
      icon: "/dashboard/Dashboard.png", // Optional icon name
      children: [{ label: "Profile" }, { label: "Security" }],
    },
    // Add more menu items here
    {
      label: "Enternamiento en crecimiento personal",
      icon: "/dashboard/Crecimientopersonal.png", // Optional icon name
      children: [{ label: "Profile" }, { label: "Security" }],
    },
    // Add more menu items here
    {
      label: "Entrenamiento en Liderazgo",
      icon: "/dashboard/Liderazgo.png", // Optional icon name
      children: [{ label: "Profile" }, { label: "Security" }],
    },
    // Add more menu items here
    {
      label: "Entrenamiento en ventas",
      icon: "/dashboard/Ventas.png", // Optional icon name
      children: [{ label: "Profile" }, { label: "Security" }],
    },
    // Add more menu items here
    {
      label: "Entrenamiento en marketing",
      icon: "/dashboard/Marketing.png", // Optional icon name
      children: [{ label: "Profile" }, { label: "Security" }],
    },
    // Add more menu items here
    {
      label: "Mi reto",
      icon: "/dashboard/Retos.png", // Optional icon name
      children: [{ label: "Profile" }, { label: "Security" }],
    },
    // Add more menu items here
    {
      label: "Podcast",
      icon: "/dashboard/Podcast.png", // Optional icon name
      children: [{ label: "Profile" }, { label: "Security" }],
    },
    // Add more menu items here
    {
      label: "Cursos",
      icon: "/dashboard/Cursos.png", // Optional icon name
      children: [{ label: "Profile" }, { label: "Security" }],
    },
    // Add more menu items here
    {
      label: "Conferencias",
      icon: "/dashboard/Conferencias.png", // Optional icon name
      children: [{ label: "Profile" }, { label: "Security" }],
    },
    // Add more menu items here
    {
      label: "Referidos",
      icon: "/dashboard/Referidos.png", // Optional icon name
      children: [{ label: "Profile" }, { label: "Security" }],
    },
    // Add more menu items here
    {
      label: "Ganacias",
      icon: "/dashboard/Ganancias.png", // Optional icon name
      children: [{ label: "Profile" }, { label: "Security" }],
    },
    // Add more menu items here
    {
      label: "Mi perfit",
      icon: "/dashboard/Miperfil.png", // Optional icon name
      children: [{ label: "Profile" }, { label: "Security" }],
    },
    // Add more menu items here
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
    <div className="relative">
      {hamclicked ? (
        <Secondary
          menuData={menuData}
          handleSelect={handleSelect}
          sethamclicked={sethamclicked}
        />
      ) : null}

      <div className="absolute z-50 ">
        <RxHamburgerMenu
          onClick={() => {
            sethamclicked(true);
          }}
          className="text-3xl text-[#664198] ml-4 md:hidden  "
        />
      </div>
      <div className="md:flex flex-col hidden items-center border-[3px] border-[#664198] rounded-3xl h-[97vh] ">
        <div className="w-[100%] px-[10%] flex items-center justify-between">
          <div className="h-[10vh] w-[8vw] mt-2 flex justify-between  ">
            <img
              className="h-[100%] w-[100%]"
              src="/landing/logo.png
            "
              alt=""
            />
          </div>
          <div
            onClick={logOutUser}
            className="flex justify-center items-center group flex-col cursor-pointer"
          >
            <IoIosLogOut className="text-[2.5rem] group-hover:text-red-400  font-bold" />
            <p className="font-bold group-hover:text-red-400">Logout</p>
          </div>
        </div>
        <div className="overflow-x-hidden no-scrollbar h-fit">
          <List>
            {menuData.map((item, index) => {
              return (
                <>
                  <TreeNode item={item} index={index} onSelect={handleSelect} />
                </>
              );
            })}
          </List>
        </div>
      </div>
    </div>
  );
};

export default Left;

const Secondary = ({ menuData, handleSelect, sethamclicked }) => {
  return (
    <div className="h-[100vh] w-[100vw] ">
      <div className="flex flex-col items-center  h-[97vh] ">
        <div className="h-[4rem] w-[20rem] mt-2 flex justify-between items-center  ">
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
        <div className="overflow-x-hidden no-scrollbar h-fit">
          <List>
            {menuData.map((item, index) => {
              return (
                <>
                  <TreeNode item={item} index={index} onSelect={handleSelect} />
                </>
              );
            })}
          </List>
        </div>
      </div>
    </div>
  );
};
