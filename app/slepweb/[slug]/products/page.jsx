"use client";
import { useEffect, useState } from "react";
import { usePaginaContext } from "../../../../context/PaginaContext";
import PaginaPop from "../../../../components/dashboard/sleepm/PaginaPop";

const page = ({ params }) => {
  const { products, userSocials, parseText, getUserSocial, setactiveTab } =
    usePaginaContext();

  const [clickedProduct, setclickedProduct] = useState([]);
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const handleOpen = (value) => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getUserSocial(params);
    setactiveTab(3);
  }, []);

  return (
    <div className="max-w-[100%] w-[100vw] h-auto overflow-hidden ">
      <PaginaPop
        open={open}
        size={size}
        handleClose={handleClose}
        currentProd={clickedProduct}
        userSocials={userSocials}
      />
      <div>
        <img
          src="/producthome.png"
          className="w-[90%] h-[40rem] m-auto my-12 object-cover"
          alt="product home"
        />
        <div className="w-full">
          <p className="font-bold text-[2.4rem]  text-center">
            NUESTROS <span className="text-[#803DA1]">PRODUCTOS</span>
          </p>
          <p className="text-center text-[1.02rem] w-[85%] md:w-[70%] m-auto mt-4 ">
            Combinamos tecnología avanzada y sabiduría ancestral para ofrecerte
            el mejor descanso, usando materiales de la NASA y biocristales
            naturales. Aprovechamos tecnologías nuevas y antiguas para un mundo
            más descansado y saludable.
          </p>
        </div>
      </div>
      <div className=" w-[100%] md:w-[90%] py-4  m-auto mt-10">
        <div className="flex flex-col  gap-2 items-center md:grid md:grid-cols-2 xl:grid-cols-3  md:place-items-center gap-y-6 ">
          {products?.map((product, index) => {
            return (
              <div
                className="h-[39rem] w-[90%] md:w-[19rem] xl:w-[22rem] 2xl:w-[25rem] bg-white box-shadow rounded-xl shadow-xl px-4 cursor-pointer"
                key={index}
              >
                <div className="h-[40%] flex justify-center cursor-pointer">
                  <img
                    src={product?.image[0]}
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
                    {(() => {
                      try {
                        return product.description
                          ? parseText(
                              JSON.parse(product.description.slice(0, 300))
                            )
                          : null;
                      } catch (error) {
                        console.error("Invalid JSON string:", error.message);
                        return parseText(product.description.slice(0, 300));
                      }
                    })()}
                    ...
                  </p>
                </div>
                <div className="h-[15%] flex gap-4 flex-wrap justify-center ">
                  <button
                    onClick={() => {
                      if (userSocials?.priority) {
                        userSocials?.priority == "sms"
                          ? (window.location.href = `sms:${userSocials?.sms}`)
                          : window.open(
                              `https://wa.me/${userSocials?.whatsapp}`
                            );
                      } else {
                        window.open(`https://wa.me/${userSocials?.whatsapp}`);
                      }
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
                      setclickedProduct(product);
                      handleOpen("calc(80%)");
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
