import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoArrowForwardCircle } from "react-icons/io5";
import { Profile } from "../Profile";
import { useDashContext } from "../../../context/DashboardContext";

const Dashboard = () => {
  const { userData } = useDashContext();

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-1 md:grid md:grid-cols-1 xl:grid-cols-[70%_30%] overflow-hidden">
      <div className="flex flex-col justify-center mt-8 gap-4 mb-4 ">
        <div className="flex  items-center justify-end pr-5 py-2  ">
          <div className="sm:w-[50%] ">
            <div className="w-[15rem] h-[2.4rem]  gap-2 border-[1.8px] rounded-2xl border-[#664198] flex items-center">
              <div>
                <IoIosSearch className="text-xl" />
              </div>
              <div className=" ">
                <input
                  className=" h-[2rem] w-[] md:w-fit outline-none rounded-xl"
                  type="text"
                  placeholder="Buscar de Brilla System"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-fit  py-8 mx-2 relative justify-end md:justify-center sm:w-[95vw] lg:w-[98%]   md:gap-6 border-[1.8px] rounded-2xl border-[#664198] ">
          <div className="flex justify-between w-full  gap-4   h-[9rem] ">
            <div className="w-[25%] hidden sm:flex">
              <div className="h-[15rem] w-[25%] absolute bottom-0 left-0  z-50 ">
                <img
                  className="   h-[100%] w-full object-fill  "
                  src="/dashboard/girl.png"
                  alt=""
                />
              </div>
            </div>
            <div className="sm:w-full md:w-[75%] px-10 sm:px-0   flex flex-col justify-center  ">
              <div className="">
                <p className="font-bold text-md  md:text-xl lg:text-2xl text-[#353564]">
                  ¡Hola {userData?.name} a
                  <span className="text-[#664198] text-md md:text-xl">
                    {" "}
                    Brilla System!
                  </span>
                </p>
              </div>
              <div className="flex mt-2">
                <p className="italic text-[10px] font-semibold">
                  Decido brillar con determinación y excelencia, dejando una
                  huella
                  <br /> imborrable de bondad y inspiración en cada paso."
                </p>
              </div>
              <div className="flex  justify-end mt-2">
                <div className="flex w-fit md:w-[40%] lg:w-fit xl:w-[40%] ">
                  <button className="h-[36px] px-3 w-fit mr-2 font-semibold rounded-2xl border-[1.8px] border-[#664198] text-[1rem]">
                    <p>Ver el paso o paso</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mx-2 gap-3 border-[1.8px] border-[#664198]   rounded-2xl py-2 sm:w-[95vw] lg:w-[98%]">
          <div>
            <p className="font-bold text-2xl text-black">SISTEMA EDUCATIVO</p>
          </div>
          <div className="grid  lg:grid-rows-5 gap-y-4 md:w-[96%] md:h-fit lg:h-[16rem] lg:w-[54rem] xl:w-[45rem] 2xl:w-full md:gap-y-2  px-4">
            <div className="md:grid hidden grid-cols-2 grid-rows-2 md:grid-cols-[25%_25%_25%_25%] lg:grid-cols-[25%_25%_25%_25%] xl:grid-cols-[25%_25%_25%_25%]  gap-[0.5rem] w-[100%] ">
              <div className="h-[2rem] text-[#848484] md:flex hidden font-semibold">
                Nombre del entrenamiento
              </div>
              <div className="h-[2rem] text-[#848484] md:flex hidden font-semibold  ">
                porcentaje
              </div>
              <div className="h-[2rem]"></div>
              <div className="h-[2rem]"></div>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-[25%_25%_25%_25%] lg:grid-cols-[25%_25%_25%_25%] xl:grid-cols-[25%_25%_25%_25%]  gap-[0.5rem] w-[100%] ">
              <p className="font-bold  text-black w-[100%]">
                Crecimiento personal
              </p>
              <div className="flex gap-2  w-[100%] ">
                <div className="w-[100%]  h-[1rem] mt-[6px] rounded-2xl border-[1.8px] bg-white border-[#664198] ">
                  <div className="w-[40%] bg-[#664198] h-[0.65rem] rounded-2xl"></div>
                </div>
                <div className="w-[20%]">
                  <p className="text-[#664198] font-bold text-lg">40%</p>
                </div>
              </div>
              <p className="font-bold text-black flex h-[2rem]  w-[100%]">
                Te espero en la meta
              </p>
              <div>
                <button className="flex items-center justify-center gap-2 border-[1.8px] border-[#664198] w-fit px-2 h-[4vh] rounded-2xl">
                  <div>
                    <p>continuar</p>
                  </div>
                  <div>
                    <IoArrowForwardCircle className="text-[#664198]" />
                  </div>
                </button>
              </div>
              {/*
              
              */}
            </div>
            <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-[25%_25%_25%_25%] lg:grid-cols-[25%_25%_25%_25%] xl:grid-cols-[25%_25%_25%_25%]  gap-[0.5rem] w-[100%]   ">
              <p className="font-bold text-black w-[100%]">En linderazgo</p>
              <div className="flex gap-2  w-[100%] ">
                <div className="md:w-[15vw] mt-[6px] w-[45vw] h-[1rem] rounded-2xl border-[1.8px] bg-white border-[#664198] ">
                  <div className="w-[80%] bg-[#664198] h-[0.65rem] rounded-2xl"></div>
                </div>
                <div className="w-[3rem]">
                  <p className="text-[#664198] font-bold text-lg">80%</p>
                </div>
              </div>
              <p className="font-bold text-black flex h-[2rem]  w-[100%]">
                Hazlo!
              </p>
              <div>
                <button className="flex items-center justify-center gap-2 border-[1.8px] border-[#664198] w-fit px-2 h-[4vh] rounded-2xl">
                  <div>
                    <p>continuar</p>
                  </div>
                  <div>
                    <IoArrowForwardCircle className="text-[#664198]" />
                  </div>
                </button>
              </div>
              {/*
               */}
            </div>
            <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-[25%_25%_25%_25%] lg:grid-cols-[25%_25%_25%_25%] xl:grid-cols-[25%_25%_25%_25%]  gap-[0.5rem] w-[100%]   ">
              <p className="font-bold text-black w-[100%]">En ventas</p>
              <div className="flex gap-2 ">
                <div className="md:w-[15vw] mt-[6px] w-[45vw] h-[1rem] rounded-2xl border-[1.8px] bg-white border-[#664198] ">
                  <div className="w-[80%] bg-[#664198] h-[0.65rem] rounded-2xl"></div>
                </div>
                <div className="w-[3rem]">
                  <p className="text-[#664198] font-bold text-lg">80%</p>
                </div>
              </div>
              <p className="font-bold text-black flex h-[2rem]  w-[100%]">
                Tu puedes!
              </p>
              <div>
                <button className="flex items-center justify-center gap-2 border-[1.8px] border-[#664198] w-fit px-2 h-[4vh] rounded-2xl">
                  <div>
                    <p>continuar</p>
                  </div>
                  <div>
                    <IoArrowForwardCircle className="text-[#664198]" />
                  </div>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-[25%_25%_25%_25%] lg:grid-cols-[25%_25%_25%_25%] xl:grid-cols-[25%_25%_25%_25%]  gap-[0.5rem] w-[100%]   ">
              <p className="font-bold text-black w-[100%]">En marketing</p>
              <div className="flex gap-2 ">
                <div className="md:w-[15vw] mt-[6px] w-[45vw] h-[1rem] rounded-2xl border-[1.8px] bg-white border-[#664198] ">
                  <div className="w-[80%] bg-[#664198] h-[0.65rem] rounded-2xl"></div>
                </div>
                <div className="w-[3rem]">
                  <p className="text-[#664198] font-bold text-lg">80%</p>
                </div>
              </div>
              <p className="font-bold text-black flex h-[2rem]  w-[100%]">
                Felicidades!
              </p>
              <div>
                <button className="flex items-center justify-center gap-2 border-[1.8px] border-[#664198] w-fit px-2 h-[4vh] rounded-2xl">
                  <div>
                    <p>continuar</p>
                  </div>
                  <div>
                    <IoArrowForwardCircle className="text-[#664198]" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center py-2  mx-2 border-[1.8px] rounded-2xl  border-[#664198] h-fit px-10 sm:w-[95vw] lg:w-[98%]">
          <div className="flex items-center gap-2 mt-2 ">
            <div>
              <p className="font-bold text-[1.4rem]"> MI RETO</p>
            </div>
            <div>
              <button className="flex items-center justify-center gap-2 border-[1.8px] border-[#803da1] px-3 h-[4vh] rounded-2xl">
                <div>
                  <p>Ver</p>
                </div>
                <div>
                  <IoArrowForwardCircle className="text-[#803da1]" />
                </div>
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 2xl:grid-cols-3 gap-5 justify-center text-center">
            <div className="border-[1.8px] border-[#803da1]   h-fit md:h-[5rem] rounded-2xl  flex flex-col gap-3 items-center">
              <div>
                <p className="text-gray-600 font-bold text-sm md:text-2xl">
                  Prospectos nuevos
                </p>
              </div>
              <div className="md:flex-row  flex flex-col  h-[100%] justify-between   ">
                <div className="h-[2rem]">
                  <img
                    className=" h-[100%]"
                    src="/dashboard/persons.png"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-[#803da1] font-semibold">4500</p>
                </div>
              </div>
            </div>
            <div className="border-[1.8px] border-[#803da1] w-[12rem] md:w-[17rem] rounded-2xl h-fit md:h-[5rem]  flex flex-col gap-3  items-center">
              <div>
                <p className="text-gray-600 font-bold text-sm md:text-2xl">
                  Preguntas realizadas
                </p>
              </div>
              <div className="md:flex-row  flex flex-col h-[100%] justify-between  w-[10vw] ">
                <div className="h-[2rem] md:w-[1.7rem] w-auto m-auto ">
                  <img
                    className="h-[100%] "
                    src="/dashboard/qnmark.png"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-[#803da1] font-semibold">4500</p>
                </div>
              </div>
            </div>
            <div className="border-[1.8px] border-[#803da1] w-[12rem] md:w-[17rem] rounded-2xl h-fit md:h-[5rem]  flex flex-col gap-3  items-center">
              <div>
                <p className="text-gray-600 font-bold text-sm md:text-2xl">
                  ATM realizados
                </p>
              </div>
              <div className="md:flex-row  flex flex-col h-[100%] justify-between w-[10vw] ">
                <div className="h-[2rem] md:w-[1.7rem] w-auto m-auto">
                  <img className=" h-[100%]" src="/dashboard/ATM.png" alt="" />
                </div>
                <div>
                  <p className="text-[#803da1] font-semibold">4500</p>
                </div>
              </div>
            </div>
            <div className="border-[1.8px] border-[#803da1] w-[12rem]  md:w-[17rem] rounded-2xl h-fit md:h-[5rem]  flex flex-col gap-3  items-center">
              <div>
                <p className="text-gray-600 font-bold md:text-2xl">
                  Prospectos nuevos
                </p>
              </div>
              <div className="md:flex-row  flex flex-col h-[100%] justify-between  w-[10vw] ">
                <div className="h-[2rem]">
                  <img
                    className=" h-[100%]"
                    src="/dashboard/persons.png"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-[#803da1] font-semibold">4500</p>
                </div>
              </div>
            </div>
            <div className="border-[1.8px] border-[#803da1] w-[12rem]  md:w-[17rem] rounded-2xl h-fit md:h-[5rem]  flex flex-col gap-3  items-center">
              <div>
                <p className="text-gray-600 font-bold text-sm md:text-2xl">
                  Prospectos nuevos
                </p>
              </div>
              <div className="md:flex-row  flex flex-col h-[100%] justify-between  w-[10vw] ">
                <div className="h-[2rem]">
                  <img
                    className=" h-[100%]"
                    src="/dashboard/persons.png"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-[#803da1] font-semibold">4500</p>
                </div>
              </div>
            </div>
            <div className="border-[1.8px] border-[#803da1] w-[12rem]  md:w-[17rem] rounded-2xl h-fit md:h-[5rem]  flex flex-col gap-3  items-center">
              <div>
                <p className="text-gray-600 font-bold text-sm md:text-2xl">
                  Prospectos nuevos
                </p>
              </div>
              <div className="md:flex-row  flex flex-col h-[100%] justify-between  w-[10vw] ">
                <div className="h-[2rem]">
                  <img
                    className=" h-[100%]"
                    src="/dashboard/persons.png"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-[#803da1] font-semibold">4500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex w-full ">
        <Profile />
      </div>
    </div>
  );
};

export default Dashboard;
