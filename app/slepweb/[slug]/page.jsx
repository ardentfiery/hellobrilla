"use client";
import { useState, useEffect } from "react";
import axios from "../../api/axiosintercepter";
import TestimonialSlider from "../../../components/dashboard/sleepm/TestimonialSlider";
import { useRouter } from "next/navigation";
import { usePaginaContext } from "../../../context/PaginaContext";
import PaginaPop from "../../../components/dashboard/sleepm/PaginaPop";
export default function Page({ params }) {
  const router = useRouter();

  const [paginaVideo, setpaginaVideo] = useState({});
  const [paginaTestimonials, setpaginaTestimonials] = useState([]);
  const [randNumber, setrandNumber] = useState([0, 3]);

  const [clickedProduct, setclickedProduct] = useState([]);
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const handleOpen = (value) => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const { products, getUserSocial, userSocials, parseText, setactiveTab } =
    usePaginaContext();

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const getPaginaVideo = async () => {
    try {
      const resp = await axios.get("/sleepm/getpaginavideos");
      setpaginaVideo(resp.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const getPaginaTestimonials = async () => {
    try {
      const resp = await axios.get("/sleepm/getpaginatestimony");
      setpaginaTestimonials(resp.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const generateNumbersWithDifference = (num1, num2) => {
    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);

    // Find all possible pairs with a difference of 3 within the given range
    const possiblePairs = [];

    for (let i = min; i <= max - 3; i++) {
      const j = i + 3;
      if (j <= max) {
        possiblePairs.push([i, j]);
      }
    }

    // Check if there are possible pairs, otherwise return null or an appropriate message
    if (possiblePairs.length === 0) {
      return null; // Or return an appropriate message, e.g., "No pairs found with a difference of 3"
    }

    // Select a random pair from the possible pairs
    const randomIndex = Math.floor(Math.random() * possiblePairs.length);
    setrandNumber(possiblePairs[randomIndex]);
  };

  useEffect(() => {
    getPaginaVideo();
    getPaginaTestimonials();
    getUserSocial(params);
    generateNumbersWithDifference(0, products?.length);
    setactiveTab(0);
  }, [params, products]);

  return (
    <div className="overflow-hidden h-fit flex flex-col gap-8">
      <PaginaPop
        open={open}
        size={size}
        handleClose={handleClose}
        currentProd={clickedProduct}
        whatsapp={userSocials?.whatsapp}
        userSocials={userSocials}
      />

      <div className="flex flex-col gap-8 items-center md:flex-row md:justify-between w-[85vw]  m-auto ">
        <div className="text-[30px] md:text-[40px] font-bold w-[90%] md:w-[30rem]">
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
            <p className="absolute top-3 text-[#250F38] text-[20px] w-[18rem] flex  p-4 ml-2 z-40">
              Innovación en tecnología del sueño para transformar tu vida
            </p>
          </div>
          <div
            className="mt-3"
            onClick={() => {
              router.push(`/slepweb/${params?.slug}/products`);
            }}
          >
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
              className="min-h-[40rem] max-h-[40rem] md:min-h-[35rem] md:max-h-[35rem] w-[100%] object-cover rounded-3xl"
              alt=""
            />
          </div>
          <div className="absolute top-0 h-[40rem] left-0 grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-[45%_55%] z-50 w-full rounded-3xl overflow-hidden">
            <div className="h-[35rem] relative hidden lg:flex justify-center items-center mt-0">
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
            <div className="flex flex-col gap-2 items-center  w-[95%] lg:w-[85%] md:w-[90%]">
              <TestimonialSlider paginaTestimonials={paginaTestimonials} />
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
              {shuffleArray(products.slice(randNumber[0], randNumber[1]))?.map(
                (product, index) => {
                  return (
                    <div
                      className="h-[40rem] py-2 w-[90%] md:w-[19rem] xl:w-[22rem] 2xl:w-[25rem] bg-white box-shadow rounded-xl shadow-xl px-4 cursor-pointer"
                      key={index}
                    >
                      <div className="h-[17rem] flex justify-center cursor-pointer">
                        <img
                          src={product?.image[0]}
                          className="h-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className="h-[4rem] grid grid-cols-[65%_35%] mt-2 ">
                        <p className="font-bold flex items-center">
                          {product?.name ? product.name : "No Name"}
                        </p>
                        <div className="flex justify-end items-end px-[10%] gap-2 pb-3">
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
                      <div className="h-[11rem] ">
                        <p className="text-[#2B2B2B]">
                          {(() => {
                            try {
                              return product.description
                                ? JSON.parse(product.description.slice(0, 200))
                                    .replace(/\\n/g, " ")
                                    .replace(/\*\*/g, "")
                                : null;
                            } catch (error) {
                              console.error(
                                "Invalid JSON string:",
                                error.message
                              );
                              return product.description
                                .slice(0, 200)
                                .replace(/\\n/g, " ")
                                .replace(/\*\*/g, "");
                            }
                          })()}
                          ...
                        </p>
                      </div>
                      <div className="h-[7rem] xl:h-[20%] flex gap-1 flex-wrap justify-center  ">
                        <button
                          onClick={() => {
                            handleOpen("80%");
                            setclickedProduct(product);
                          }}
                          className="flex justify-center gap-2  items-center bg-white h-[3rem] px-5 rounded-3xl border-[2px] border-[#803DA1] hover:drop-shadow-lg hover:scale-105 cursor-pointer transition-all ease-in-out duration-300"
                        >
                          <p className="text-[#803DA1] font-bold text-[1rem] lg:text-[1.1rem] ">
                            Ver producto
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
                }
              )}
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
                    <img src="/starfour.png" alt="" />
                    <p>FONDO DE BONOS GLOBAL </p>
                  </div>
                </div>
                <div className="pl-[5%]">
                  <button
                    onClick={() => {
                      window.open(`https://wa.me/${userSocials?.whatsapp}`);
                    }}
                    className="flex gap-2 bg-white py-3 px-5 rounded-3xl hover:drop-shadow-lg hover:scale-105 cursor-pointer transition-all ease-in-out duration-300"
                  >
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
    </div>
  );
}
