"use client";
import "./PageStyle.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";
import axios from "@/app/api/axiosintercepter";

export default function Page({ isActive, params }) {
  console.log(params.slug);
  const [products, setproducts] = useState([]);
  const [paginaVideo, setpaginaVideo] = useState({});
  const [userSocials, setuserSocials] = useState([]);

  const [hamClicked, sethamClicked] = useState(false);

  const getProducts = async () => {
    try {
      const resp = await axios.get("/sleepm/getsleepmproducts");
      setproducts(resp?.data?.data);
    } catch (error) {
      console.log(`error gettting products: ${error}`);
    }
  };

  const getPaginaVideo = async () => {
    try {
      const resp = await axios.get("/sleepm/getpaginavideos");
      setpaginaVideo(resp.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const getUserSocial = async () => {
    try {
      const resp = await axios.get(`/user/getusersocialpagina/${params.slug}`);
      setuserSocials(resp.data.data);
      console.log(resp.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
    getPaginaVideo();
    getUserSocial();
  }, []);

  return (
    <div className="overflow-hidden h-fit flex flex-col gap-8">
      {hamClicked ? <MobileNavPage sethamClicked={sethamClicked} /> : null}

      <div>
        <div className="bg-[#813DA1] h-[5rem] md:h-[4.5rem] xl:h-[5rem] w-screen navclip flex justify-between flex-col md:flex-row items-center md:items-start  ">
          <div className="flex text-white gap-1 mt-[0.5rem] ml-[5%] ">
            <img src="/mail.png" className="w-[1.5rem] h-[1.5rem] " alt="" />
            <p className=" text-[1.1rem] text-center">something@gmail.com</p>
          </div>
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
      </div>

      <div className="flex flex-col gap-8 items-center md:flex-row md:justify-between w-[85vw]  m-auto ">
        <div className="text-[40px] font-bold w-[30rem]">
          Descubre una nueva forma de dormir
          <br />
          <p className="text-[#803DA1]">y vivir mejor</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="relative">
            <img
              className="w-[30rem] lg:w-[21rem] h-[12rem]"
              src="/border.png"
              alt=""
            />
            <p className="absolute top-3 text-[#250F38] text-[20px] w-[18rem] flex  p-4 ml-2">
              Innovación en tecnología del sueño para transformar tu vida
            </p>
          </div>
          <div className="mt-3">
            <img
              className="h-[4rem] w-[15rem] hover:drop-shadow-lg hover:scale-105 cursor-pointer transition-all ease-in-out duration-300"
              src="/arrowbox.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col   md:flex-row md:justify-between w-[85vw]  items-center m-auto gap-4">
        <div>
          <img
            className="  md:w-[40rem] rounded-3xl object-cover"
            src="/bed.png"
            alt=""
          />
        </div>
        <div>
          <img
            className=" md:w-[20rem] rounded-3xl object-cover"
            src="/mattress.png"
            alt=""
          />
        </div>

        <div>
          <img
            className=" md:w-[25rem] rounded-3xl object-cover"
            src="/sleeping.png"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col items-center w-[100vw] m-auto mt-8 gap-6">
        <div className="w-full text-center">
          <p className="text-[28px] lg:text-[38px] font-bold  m-auto">
            Productos Fabricados en <br /> Estados Unidos y
            <span className="text-[#803DA1]"> Canadá</span>
          </p>
        </div>
        <div className="w-[90%] lg:w-[67%] text-center">
          <p className="text-[18px] leading-8">
            Nuestros productos están diseñados y fabricados con materiales de la
            más alta calidad en Estados Unidos y Canadá. Cada artículo pasa por
            un riguroso proceso de control de calidad para asegurar que cumpla
            con los más altos estándares de confort y durabilidad. Utilizamos
            tecnologías avanzadas y materiales de última generación para
            proporcionar un descanso óptimo y saludable.
          </p>
        </div>
        <div>
          <img
            className="w-[10rem] hover:drop-shadow-lg hover:scale-105 cursor-pointer transition-all ease-in-out duration-300"
            src="/techbutton.png"
            alt=""
          />
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <div className="w-[95%] lg:w-[75%] lg:h-[30rem] bg-no-repeat bg-cover relative">
          <div>
            <img
              src="/bubblebg.png"
              className="min-h-[35rem] max-h-[35rem] w-[100%] object-cover rounded-3xl"
              alt=""
            />
          </div>
          <div className="absolute top-0 h-[40rem] left-0 grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-[45%_55%] z-50 w-full rounded-3xl overflow-hidden">
            <div className="h-[35rem] relative hidden lg:flex justify-center items-center mt-0">
              {/* <img
                src="/bedrect.png"
                className="absolute w-[85%] max-w[85%]"
                alt=""
              /> */}
              <iframe
                className=" top-0 left-0 h-[75%] w-[85%] max-w[85%] rounded z-10"
                src={paginaVideo?.videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="lg:mt-[6%] mt-[10%]">
              <p className="font-bold text-[1.7rem] md:text-[2.4rem] xl:text-[2.8rem] text-white lg:pl-[14%] text-center lg:text-left ">
                TECNOLOGÍA
              </p>
              <div className="text-white flex flex-col gap-10  mt-[1.5rem]">
                <div className="flex flex-col gap-5 text-[.9rem]">
                  <div>
                    <p className="font-bold text-[1rem] pl-[7%]">
                      Mezclas de Biocristal
                    </p>
                    <div className="flex gap-3 w-[90%] ">
                      <img
                        src="/star.png"
                        className="w-[2rem] h-[2rem]"
                        alt=""
                      />
                      <p className="text-[1rem]">
                        La última tecnología de los recursos naturales;
                        cristales combinados con la tecnología científica para
                        mejorar la calidad de vida.
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-[1rem] pl-[7%]">
                      Látex Natural Tailandés
                    </p>
                    <div className="flex gap-3 w-[90%] ">
                      <img
                        src="/star.png"
                        className="w-[2rem] h-[2rem]"
                        alt=""
                      />
                      <p className="text-[1rem]">
                        Savia lechosa de los árboles de caucho tailandeses. Esta
                        savia lechosa es hipo alergénica, antimicrobiana,
                        resistente al moho y a los ácaros del polvo.
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-[1rem] pl-[7%]">
                      Carbón activado
                    </p>
                    <div className="flex gap-3 w-[90%] ">
                      <img
                        src="/star.png"
                        className="w-[2rem] h-[2rem]"
                        alt=""
                      />
                      <p className="text-[1rem]">
                        Absorbe los olores y las partículas de aire contaminado.
                        También recoge los iones negativos que promueven la
                        circulación de la sangre mientras bloquea las ondas
                        electromagnéticas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  flex-col lg:flex-row  lg:justify-around lg:items-center  w-[100vw] px-[5vw] m-auto mt-20 py-16 bg-[#F7F5F8]">
        <div className="lg:w-[15%] pt-8 flex justify-center items-center">
          <img className="w-[14rem] lg:w-[100%]" src="/leftimg.png" alt="" />
        </div>
        <div className="lg:w-[70%] mt-3 lg:mt-0">
          <div className="flex flex-col justify-center items-center gap-4">
            <div>
              <p className="text-3xl font-bold text-[38px]">
                Conozca algunos de <br /> nuestros{" "}
                <span className="text-[#803DA1]">testimonios</span>
              </p>
            </div>
            <div className="w-[85%] m-auto mt-5">
              <p className="text-center text-[1.1rem] leading-7 ">
                Descubre cómo los elementos de Biocristal en los productos
                Sleepm han transformado la experiencia de sueño de nuestros
                usuarios. Gracias a la infusión de elementos naturales de la
                madre naturaleza, nuestras frecuencias energéticas promueven el
                equilibrio celular, proporcionando un descanso más profundo y
                revitalizante.
              </p>
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className=" text-xl font-semibold">
                Víctor / Campeón de Bádminton
              </p>
              <div className="w-[65%] text-center">
                Le he contado a muchas personas cómo los colchones y almohadas
                Sleepm me ayudan a lograr resultados consistentes. ¡Esperamos
                que veas muchos más jugadores de bádminton EX usando Sleepm en
                el futuro!
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:w-[15%] pt-8 flex justify-center  items-center">
          <img
            className="h-[100%] w-[14rem] lg:w-[100%]"
            src="/rightimg.png"
            alt=""
          />
        </div>
      </div>

      <div className=" ">
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-[2rem]  ">
            Nuestros <span className="text-[#803DA1]">productos</span>
          </p>
          <div className=" w-[100%] md:w-[80%] py-4">
            <div className="flex flex-col  gap-2 items-center md:grid md:grid-cols-2 xl:grid-cols-3  md:place-items-center gap-y-6 ">
              {products?.map((product, index) => {
                return (
                  <div className="h-[35rem] w-[90%] md:w-[19rem] xl:w-[22rem] 2xl:w-[25rem] bg-white box-shadow rounded-xl shadow-xl px-4">
                    <div className="h-[40%] flex justify-center">
                      <img
                        src={product?.image}
                        className="h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div className="h-fit grid grid-cols-[65%_35%] mt-2">
                      <p className="font-bold">
                        {product?.name ? product.name : "No Name"}
                      </p>
                      <div className="flex justify-end items-end px-[10%] gap-2 pb-2">
                        {product?.rating &&
                          Array.from({ length: product?.rating }).map(
                            (_, index) => (
                              <img
                                src="/rating.png"
                                className="h-[1rem] w-[1rem] "
                                alt=""
                              />
                            )
                          )}
                      </div>
                    </div>
                    <div className="h-[30%] my-[1rem] ">
                      <p className="text-[#2B2B2B]">
                        El grafeno ayuda en la recuperación de lesiones y alivia
                        el dolor muscular. Los biocristales mejoran la energía y
                        el descanso. El infrarrojo lejano mejora la circulación,
                        alivia el dolor y promueve un sueño profundo.
                      </p>
                    </div>
                    <div className="h-[10%] flex justify-center">
                      <button className="flex justify-center gap-2 items-center bg-white h-[3rem] px-5 rounded-3xl border-[2px] border-[#803DA1] hover:drop-shadow-lg hover:scale-105 cursor-pointer transition-all ease-in-out duration-300">
                        <p className="text-[#803DA1] font-bold text-[1rem] lg:text-[1.1rem] ">
                          Lo quiero
                        </p>
                        <img
                          src="/buttonarrow.png"
                          className="w-[1rem] h-[1rem]"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-10 flex justify-center items-center">
        <div className="w-[95%] md:w-[80%] lg:h-[30rem] bg-no-repeat bg-cover relative">
          <div>
            <img
              src="/fourbg.png"
              className="min-h-[30rem] max-h-[30rem] w-[100%] object-cover rounded-3xl"
              alt=""
            />
          </div>
          <div className="absolute top-0 h-[30rem] left-0 grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-[60%_40%] z-50 w-full rounded-3xl overflow-hidden">
            <div className="lg:mt-[6%] mt-[10%]">
              <p className="font-bold text-[1.3rem] md:text-[2rem] text-white lg:pl-[14%] text-center lg:text-left ">
                4 Maneras diferentes de ganar dinero
              </p>
              <div className="text-white flex flex-col gap-10 pl-[12%] mt-[1.5rem]">
                <div className="flex flex-col gap-5 text-[.9rem]">
                  <div className="flex gap-3">
                    <img src="/starfour.png" alt="" />
                    <p>8 NIVELES DE COMISIÓN POR PUNTOS</p>
                  </div>
                  <div className="flex gap-3">
                    <img src="/starfour.png" alt="" />
                    <p>BONO INFINITO</p>
                  </div>
                  <div className="flex gap-3">
                    <img src="/starfour.png" alt="" />
                    <p>BONO DE INCENTIVO</p>
                  </div>
                  <div className="flex gap-3">
                    <img src="/starfourfour.png" alt="" />
                    <p>FONDO DE BONOS GLOBAL </p>
                  </div>
                </div>
                <div className="pl-[5%]">
                  <button className="flex gap-2 bg-white py-3 px-5 rounded-3xl hover:drop-shadow-lg hover:scale-105 cursor-pointer transition-all ease-in-out duration-300">
                    <p className="text-[#803DA1] font-bold text-[1rem] lg:text-[1.1rem] ">
                      Quiero mas información
                    </p>
                    <img src="/buttonarrow.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="h-[30rem] relative hidden lg:flex">
              <img
                src="/manladder.png"
                className="absolute w-[30rem] max-w[30rem] top-[20%] left-[-15%]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[4rem] relative">
        <img
          src="/footerhandshake.png"
          className="absolute md:bottom-[41%] lg:bottom-[81%] w-[13rem] left-[10%] top-[0%] z-50 md:flex hidden h-auto"
          alt=""
        />
        <div className="bg-[#26262C] h-fit py-4 w-screen clipthis  text-center">
          <div className="md:mt-[7%] lg:mt-[5%]">
            <p className="font-bold text-[2.4rem] text-white">
              "Contáctame y será un placer atenderte."
            </p>
          </div>
          <div className="text-white mt-8 w-[95%] lg:w-[40%] m-auto ">
            <p className="md:text-[1.1rem] lg:text-[1.2rem] ">
              Estás a solo un clic de alcanzar el éxito que buscas. Sigue mis
              redes sociales y contáctame por la que te resulte más conveniente.
            </p>
          </div>
          <div className=" flex justify-center mt-5">
            <div className="w-fit flex gap-8">
              <div>
                <img
                  onClick={() => {
                    userSocials?.facebook
                      ? window.open(userSocials?.facebook, "_blank")
                      : null;
                  }}
                  src="/pgfb.png"
                  className="h-[2.4rem] w-[2.4rem] "
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
                  className="h-[2.4rem] w-[2.4rem] "
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
                  className="h-[2.4rem] w-[2.4rem] "
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
                  className="h-[2.4rem] w-[2.4rem] "
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
                  className="h-[2.4rem] w-[2.4rem] "
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-[85%] h-[2px] m-auto mt-4 bg-[#8b8a8a7b] "> </div>
          <div className="mt-4 flex flex-wrap justify-center gap-5 w-[75%] m-auto ">
            <div className=" flex items-center">
              <img src="/sleepmlogo.png" className="h-[2rem]" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center gap-4  text-white text-[1.2rem]">
              <div className="flex gap-3 flex-wrap">
                <p></p>
                <p>Inicio</p>
                <p>Tecnología</p>
                <p>Testimonios</p>
                <p>Productos</p>
                <p>Plan de pagos</p>
              </div>
              <div className="">
                <p>© 2024 Sleepm / Términos & condiciones </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
