"use client";
import React, { useState, useEffect } from "react";
import axios from "../api/axiosintercepter";
import { MdDoneOutline } from "react-icons/md";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const [savedUserId, setsavedUserId] = useState();
  const [savedUserEmail, setsavedUserEmail] = useState();
  const authorizeUser = async () => {
    try {
      const isAuthorized = await axios.get("/user/authorize");
      setsavedUserEmail(isAuthorized.data.email)
      savedUserId(isAuthorized.data.id)
      try {
        const data = await axios.get("/user/userotpverified");
        router.push("/");
      } catch (error) {
        // router.push(");
        console.log(error);
      }
    } catch (error) {
      router.push("/login");
    }
  };

  useEffect(() => {
    authorizeUser();
  }, []);

  const [verified, setverified] = useState(false);
  const [otp, setotp] = useState("");

  const initialTimer = 180; // 3 minutes = 180 seconds
  const [isDisabled, setIsDisabled] = useState(true);
  const [timer, setTimer] = useState(initialTimer);

  const resendOtp = async (values) => {
    const toastId = toast.loading("Resending otp...");
    try {
      const resp = await axios.post("/user/resendotp", {
        email: savedUserEmail,
        userId: savedUserId,
      });
      toast.success("Sent otp!");
      toast.dismiss(toastId);
    } catch (error) {
      toast.error("Error resending otp");
      toast.dismiss(toastId);
    }
  };

  useEffect(() => {
    let interval;
    if (isDisabled) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 0) {
            clearInterval(interval);
            setIsDisabled(false);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isDisabled]);

  const handleClick = () => {
    setIsDisabled(true);
    setTimer(initialTimer); // 3 minutes = 180 seconds
  };

  const verifyOtp = async () => {
    const toastId = toast.loading("Verifying OTP");
    try {
      await axios.post("/user/verifysignupotp", {
        otp,
        email,
      });
      setverified(true);
      toast.success("OTP verified");
      toast.dismiss(toastId);
      router.push("/login");
    } catch (error) {
      toast.error("Error sending otp");
      toast.dismiss(toastId);
    }
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center">
        <div>
          <div className="   flex gap-6 flex-col items-center   ">
            {/* <div className="px-4">
                            <GoPerson className="text-[#5F5D9C]" />
                        </div> */}
            {verified === true ? (
              <div className="flex flex-col items-center gap-6">
                <p className="font-extrabold  text-4xl text-[#803da1]">
                  Tu registro ha sido verificado.
                </p>
                <MdDoneOutline className="text-6xl text-green-700" />
              </div>
            ) : (
              <>
                <div>
                  <p className="text-xl  text-[#803da1] text-center">
                    Hemos enviado un código a tu correo electrónico: {savedUserEmail}
                    <br /> Por favor, verifica tu correo y coloca el código
                    aquí.
                  </p>
                </div>
                <div className="bg-[#edd6e8] flex items-center">
                  <input
                    className=" border-none bg-[#edd6e8] outline-none h-[50px] w-[360px] rounded px-4 text-[#5F5D9C] placeholder-[#6e6adf] text-sm"
                    type="text"
                    placeholder="Coloca el código."
                    name="name"
                    onChange={(e) => {
                      setotp(e.target.value);
                    }}
                    // value={values.name}
                  />
                  <div className=" ">
                    <button
                      onClick={() => {
                        handleClick();
                        resendOtp();
                      }}
                      disabled={isDisabled}
                      className={`px-4 py-2 text-white font-bold rounded  h-[50px] ${
                        isDisabled
                          ? "bg-gray-500"
                          : "bg-blue-500 hover:bg-blue-700"
                      }`}
                    >
                      {isDisabled
                        ? `Reenviar OTP en: ${Math.floor(timer / 60)}:${(
                            "0" +
                            (timer % 60)
                          ).slice(-2)}`
                        : "Reenviar OTP"}
                    </button>
                  </div>
                </div>
                <div>
                  <button
                    onClick={verifyOtp}
                    className="h-[40px] w-[160px] bg-[#e782c0] text-[#803da1]"
                  >
                    Verifica
                  </button>
                </div>
              </>
            )}
          </div>
          <div>
            <button>Go to login page</button>
          </div>
        </div>
    </div>
  );
};

export default page;
