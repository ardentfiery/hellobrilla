"use client";
import { useState, useEffect } from "react";
import axios from "@/app/api/axiosintercepter";

const page = ({ params }) => {
  const [products, setproducts] = useState([]);

  const getProducts = async () => {
    try {
      const resp = await axios.get("/sleepm/getpaginaproducts");
      setproducts(resp?.data?.data);
    } catch (error) {
      console.log(`error gettting products: ${error}`);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="max-w-[100%] w-[100vw] h-auto overflow-hidden">
      <div>
        <img src="/producthome.png" className="w-[90%] h-[40rem] m-auto my-12 " alt="product home" />
        <div className="w-full">
          <p className="font-bold text-[2.4rem]  text-center">
            NUESTROS <span className="text-[#803DA1]">PRODUCTOS</span>
          </p>
          <p className="text-center text-[1.02rem] w-[70%] m-auto mt-4 ">
            Combinamos tecnología avanzada y sabiduría ancestral para ofrecerte
            el mejor descanso, usando materiales de la NASA y biocristales
            naturales. Aprovechamos tecnologías nuevas y antiguas para un mundo
            más descansado y saludable.
          </p>
        </div>
      </div>
      <div className=" w-[100%] md:w-[80%] py-4">
        {console.log(products)}
        <div className="flex flex-col  gap-2 items-center md:grid md:grid-cols-2 xl:grid-cols-3  md:place-items-center gap-y-6 ">
          {products?.map((product, index) => {
            return (
              <div
                className="h-[39rem] w-[90%] md:w-[19rem] xl:w-[22rem] 2xl:w-[25rem] bg-white box-shadow rounded-xl shadow-xl px-4 cursor-pointer"
                key={index}
                onClick={() => {
                  window.open("https://kapilkunwar.com.np");
                }}
              >
                <div className="h-[40%] flex justify-center cursor-pointer">
                  <img
                    src={product?.image}
                    className="h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="h-fit grid grid-cols-[65%_35%] mt-2 ">
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
                    El grafeno ayuda en la recuperación de lesiones y alivia el
                    dolor muscular. Los biocristales mejoran la energía y el
                    descanso. El infrarrojo lejano mejora la circulación, alivia
                    el dolor y promueve un sueño profundo.
                  </p>
                </div>
                <div className="h-[10%] flex gap-4 flex-wrap justify-center z-50">
                  <button
                    onClick={() => {
                      window.open(`https://wa.me/${userSocials?.whatsapp}`);
                    }}
                    className="flex justify-center gap-2 items-center bg-white h-[3rem] px-5 rounded-3xl border-[2px] border-[#803DA1] hover:drop-shadow-lg hover:scale-105 cursor-pointer transition-all ease-in-out duration-300"
                  >
                    <p className="text-[#803DA1] font-bold text-[1rem] lg:text-[1.1rem] ">
                      Lo quiero
                    </p>
                    <img
                      src="/buttonarrow.png"
                      className="w-[1rem] h-[1rem]"
                      alt=""
                    />
                  </button>
                  <button
                    onClick={() => {
                      window.open(`https://wa.me/${userSocials?.whatsapp}`);
                    }}
                    className="flex justify-center gap-2 items-center bg-white h-[3rem] px-5 rounded-3xl border-[2px] border-[#803DA1] hover:drop-shadow-lg hover:scale-105 cursor-pointer transition-all ease-in-out duration-300"
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
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
