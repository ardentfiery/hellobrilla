import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoArrowForwardCircle } from "react-icons/io5";
import { Profile } from "./Profile";

const Empresa = () => {
  return (
    <div className="flex md:grid md:grid-cols-[70%_30%]  md:gap-4 overflow-hidden">
      <div className="flex flex-col justify-center mt-8 gap-4 mb-4">
        <div className="flex   items-center ml-[15vw] md:ml-[30vw] w-fit px-2  md:w-[20vw] h-[5vh]   gap-2 border-[3px] rounded-2xl border-[#664198] ">
          <div>
            <IoIosSearch className="text-2xl" />
          </div>
          <div className=" ">
            <input
              className=" h-[30px] w-[250px] outline-none"
              type="text"
              placeholder="Buscar servicios de Brilla System"
            />
          </div>
        </div>

        <div className="flex h-fit md:h-[10rem] mx-2 relative justify-end md:justify-center   md:gap-6 border-[3px] rounded-2xl border-[#664198] ">
          {/* <div className="relative"> */}
          <div className="h-[15rem] md:w-[30vw] absolute bottom-0 left-0  z-50 ">
            <img
              className=" w-[45%]  h-[100%]  "
              src="/dashboard/girl.png"
              alt=""
            />
          </div>

          <div className="flex  w-[55%] md:w-full gap-4   h-[9rem]">
            <div className="w-[25%] "></div>
            <div className="w-[75%] flex flex-col justify-center  ">
              <div className="mr-8">
                <p className="font-bold text-xl md:text-2xl text-[#353564]">
                  ¡Hola Llecenia bienvenida a
                  <span className="text-[#664198] text-xl">
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
              <div className="flex justify-end pr-10">
                <button className="h-[40px] w-[180px] mr-2 font-semibold rounded-2xl border-[3px] border-[#664198]">
                  <p>Ver el paso o paso</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mx-2 gap-8 border-[3px] border-[#664198]   rounded-2xl py-2">
          <div>
            <p className="font-bold text-2xl text-black">SISTEMA EDUCATIVO</p>
          </div>
          <div className="text-[#848484] md:flex hidden font-semibold  gap-12  items-center w-[100%] px-5 ">
            <div>Nombre del entrenamiento</div>
            <div>porcentaje</div>
          </div>
          <div className="flex flex-col gap-6 items-center  md:w-[60vw] w-[90vw]">
            <div className="flex items-center gap-4 md:gap-10">
              <div className="flex flex-col md:flex-row  gap-4">
                <div>
                  <p className="font-bold text-black w-[50vw]  md:w-[10vw]">
                    En ventas
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="md:w-[15vw] w-[45vw] h-[1rem] rounded-2xl border-[3px] bg-white border-[#664198] ">
                    <div className="w-[80%] bg-[#664198] h-[0.65rem] rounded-2xl"></div>
                  </div>
                  <div className="w-[3rem]">
                    <p className="text-[#664198] font-bold text-lg">80%</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-bold hidden md:flex text-black w-[10vw]">
                  Tu peudes!
                </p>
              </div>
              <div>
                <button className="flex items-center justify-center gap-2 border-[2px] border-[#664198] w-[25vw] md:w-[8vw] h-[4vh] rounded-2xl">
                  <div>
                    <p>continuar</p>
                  </div>
                  <div>
                    <IoArrowForwardCircle className="text-[#664198]" />
                  </div>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4 md:gap-10">
              <div className="flex flex-col md:flex-row  gap-4">
                <div>
                  <p className="font-bold text-black w-[50vw]  md:w-[10vw]">
                    Crecimiento personalF
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="md:w-[15vw] w-[45vw] h-[1rem] rounded-2xl border-[3px] bg-white border-[#664198] ">
                    <div className="w-[20%] bg-[#664198] h-[0.65rem] rounded-2xl"></div>
                  </div>
                  <div className="w-[3rem]">
                    <p className="text-[#664198] font-bold text-lg">20%</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-bold hidden md:flex text-black w-[10vw]">
                  Tu peudes!
                </p>
              </div>
              <div>
                <button className="flex items-center justify-center gap-2 border-[2px] border-[#664198] w-[25vw] md:w-[8vw] h-[4vh] rounded-2xl">
                  <div>
                    <p>continuar</p>
                  </div>
                  <div>
                    <IoArrowForwardCircle className="text-[#664198]" />
                  </div>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4 md:gap-10">
              <div className="flex flex-col md:flex-row  gap-4">
                <div>
                  <p className="font-bold text-black w-[50vw]  md:w-[10vw]">
                    En linderazgo
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="md:w-[15vw] w-[45vw] h-[1rem] rounded-2xl border-[3px] bg-white border-[#664198] ">
                    <div className="w-[40%] bg-[#664198] h-[0.65rem] rounded-2xl"></div>
                  </div>
                  <div className="w-[3rem]">
                    <p className="text-[#664198] font-bold text-lg">40%</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-bold hidden md:flex text-black w-[10vw]">
                  Tu peudes!
                </p>
              </div>
              <div>
                <button className="flex items-center justify-center gap-2 border-[2px] border-[#664198] w-[25vw] md:w-[8vw] h-[4vh] rounded-2xl">
                  <div>
                    <p>continuar</p>
                  </div>
                  <div>
                    <IoArrowForwardCircle className="text-[#664198]" />
                  </div>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4 md:gap-10">
              <div className="flex flex-col md:flex-row  gap-4">
                <div>
                  <p className="font-bold text-black w-[50vw]  md:w-[10vw]">
                    En marketing
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="md:w-[15vw] w-[45vw] h-[1rem] rounded-2xl border-[3px] bg-white border-[#664198] ">
                    <div className="w-[5%] bg-[#664198] h-[0.65rem] rounded-2xl"></div>
                  </div>
                  <div className="w-[3rem]">
                    <p className="text-[#664198] font-bold text-lg">5%</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-bold hidden md:flex text-black w-[10vw]">
                  Tu peudes!
                </p>
              </div>
              <div>
                <button className="flex items-center justify-center gap-2 border-[2px] border-[#664198] w-[25vw] md:w-[8vw] h-[4vh] rounded-2xl">
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
        <div className="flex flex-col gap-4 items-center py-2  mx-2 border-[3px] rounded-2xl  border-[#664198] h-fit px-10">
          <div className="flex items-center gap-2 mt-4 ">
            <div>
              <p className="font-bold text-[1.4rem]"> MI RETO</p>
            </div>
            <div>
              <button className="flex items-center justify-center gap-2 border-[2px] border-[#803da1] w-[20vw] md:w-[4vw] h-[4vh] rounded-2xl">
                <div>
                  <p>Ver</p>
                </div>
                <div>
                  <IoArrowForwardCircle className="text-[#803da1]" />
                </div>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5 justify-center text-center">
            <div className="border-[2px] border-[#803da1] w-[27vw] md:w-[17rem] h-fit md:h-[5rem] rounded-2xl  flex flex-col gap-3 items-center">
              <div>
                <p className="text-gray-600 font-bold text-sm md:text-2xl">
                  Prospectos nuevos
                </p>
              </div>
              <div className="md:flex-row  flex flex-col  h-[100%] justify-between  w-[10vw] ">
                <div className="md:h-[2vh] h-[6vh] md:w-[2vw] w-auto">
                  <img
                    className="h-[100%] w-[100%]"
                    src="/dashboard/persons.png"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-[#803da1] font-semibold">4500</p>
                </div>
              </div>
            </div>
            <div className="border-[2px] border-[#803da1] w-[27vw] md:w-[17rem] rounded-2xl h-fit md:h-[5rem]  flex flex-col gap-3  items-center">
              <div>
                <p className="text-gray-600 font-bold text-sm md:text-2xl">
                  Preguntas realizadas
                </p>
              </div>
              <div className="md:flex-row  flex flex-col h-[100%] justify-between  w-[10vw] ">
                <div className="md:h-[1.7rem] h-[6vh] md:w-[1.7rem] w-auto ">
                  <img
                    className="h-[100%] w-[100%]"
                    src="/dashboard/qnmark.png"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-[#803da1] font-semibold">4500</p>
                </div>
              </div>
            </div>
            <div className="border-[2px] border-[#803da1] w-[27vw] md:w-[17rem] rounded-2xl h-fit md:h-[5rem]  flex flex-col gap-3  items-center">
              <div>
                <p className="text-gray-600 font-bold text-sm md:text-2xl">
                  ATM realizados
                </p>
              </div>
              <div className="md:flex-row  flex flex-col h-[100%] justify-between w-[10vw] ">
                <div className="md:h-[1.7rem] h-[6vh] md:w-[1.7rem] w-auto">
                  <img
                    className="h-[90%] w-[100%]"
                    src="/dashboard/ATM.png"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-[#803da1] font-semibold">4500</p>
                </div>
              </div>
            </div>
            <div className="border-[2px] border-[#803da1] w-[27vw] md:w-[17rem] rounded-2xl h-fit md:h-[5rem]  flex flex-col gap-3  items-center">
              <div>
                <p className="text-gray-600 font-bold md:text-2xl">
                  Prospectos nuevos
                </p>
              </div>
              <div className="md:flex-row  flex flex-col h-[100%] justify-between  w-[10vw] ">
                <div className="md:h-[2vh] h-[6vh] md:w-[2vw] w-auto">
                  <img src="/dashboard/persons.png" alt="" />
                </div>
                <div>
                  <p className="text-[#803da1] font-semibold">4500</p>
                </div>
              </div>
            </div>
            <div className="border-[2px] border-[#803da1] w-[27vw] md:w-[17rem] rounded-2xl h-fit md:h-[5rem]  flex flex-col gap-3  items-center">
              <div>
                <p className="text-gray-600 font-bold text-sm md:text-2xl">
                  Prospectos nuevos
                </p>
              </div>
              <div className="md:flex-row  flex flex-col h-[100%] justify-between  w-[10vw] ">
                <div className="md:h-[2vh] h-[6vh] md:w-[2vw] w-auto">
                  <img src="/dashboard/persons.png" alt="" />
                </div>
                <div>
                  <p className="text-[#803da1] font-semibold">4500</p>
                </div>
              </div>
            </div>
            <div className="border-[2px] border-[#803da1] w-[27vw] md:w-[17rem] rounded-2xl h-fit md:h-[5rem]  flex flex-col gap-3  items-center">
              <div>
                <p className="text-gray-600 font-bold text-sm md:text-2xl">
                  Prospectos nuevos
                </p>
              </div>
              <div className="md:flex-row  flex flex-col h-[100%] justify-between  w-[10vw] ">
                <div className="md:h-[2vh] h-[6vh] md:w-[2vw] w-auto">
                  <img src="/dashboard/persons.png" alt="" />
                </div>
                <div>
                  <p className="text-[#803da1] font-semibold">4500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex">
        <Profile />
      </div>
    </div>
  );
};

export default Empresa;
