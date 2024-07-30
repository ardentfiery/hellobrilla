"use client";
import "./PageStyle.css";
import { usePaginaContext } from "../../../context/PaginaContext";
import { useRouter } from "next//navigation";

const Footer = () => {
  const { userSocials, setactiveTab, userId } = usePaginaContext();
  const router = useRouter();
  return (
    <div className="max-w-[100%] w-[100vw] overflow-hidden ">
      <div className="mt-[4rem] relative">
        <img
          src="/footerhandshake.png"
          className="absolute md:bottom-[41%] lg:bottom-[81%] w-[13rem] left-[10%] top-[0%] z-40 md:flex hidden h-auto"
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
                      ? window.open(`sms:${userSocials?.sms}`, "_blank")
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
              <div className="flex gap-3 flex-wrap justify-center">
                <p></p>
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    setactiveTab(0);
                    router.push(`/slepweb/${userId}`);
                  }}
                >
                  Inicio
                </p>
                <p className="cursor-pointer">Tecnología</p>
                <p className="cursor-pointer">Testimonios</p>
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    setactiveTab(3);
                    router.push(`/slepweb/${userId}/products`);
                  }}
                >
                  Productos
                </p>
                <p className="cursor-pointer">Plan de pagos</p>
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
};

export default Footer;
