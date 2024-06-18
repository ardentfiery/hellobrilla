"use client";
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "@/app/api/axiosintercepter";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
const page = () => {
  const router = useRouter();
  const [isRequestAlreadySent, setisRequestAlreadySent] = useState(false);

  const [brillaDetails, setbrillaDetails] = useState();
  const paymentFunc = async () => {
    const toastId = toast.loading("processing request...");
    try {
      const datarecieved = await axios.get("/user/authorize");
      try {
        const stripe = await loadStripe(
          "pk_test_51OdbKnSDrQbUV5GODnck4S7qTTAI1C7Cb2IIjJmcb6HLlHymyzQXpfdTUfbn0hFEbzVcu9HijzBuWGKMfch1wU8O00ZTvLKR3G"
        );
        const resp = await axios.post(
          //   "http://localhost:3502/create-checkout-session-brilla",
          "/create-checkout-session-brilla",
          // "http://localhost:5000/create-checkout-session",
          {
            product: {
              name: "Brilla system ",
              price: brillaDetails?.discountPrice
                ? brillaDetails?.discountPrice
                : brillaDetails.originalPrice,
              image:
                "https://res.cloudinary.com/do7fzmdl3/image/upload/q_auto:low/brilla_mfs7nk.png",
              // eventId:currentEvent._id
            },
            data: datarecieved.data,
          }
        );
        const result = await stripe.redirectToCheckout({
          sessionId: resp.data.sessionId,
        });
        toast.dismiss(toastId);
      } catch (error) {
        toast.dismiss(toastId);
        console.log(error);
      }
    } catch (error) {
      console.log(error);
      router.push("/signup");
    }
  };

  const sendVerificationRequest = async () => {
    const toastId = toast.loading("processing request...");
    try {
      await axios.post("/user/addverificationrequestnotstripe");
      toast.dismiss(toastId);
      toast.success("Verification request successfully sent");
      router.push("/buysuccess");
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("Verification request failed to sent");
    }
  };

  const getBrillDetails = async () => {
    try {
      const datarecieved = await axios.get("/landingpage/getbrilla");
      console.log(datarecieved);
      setbrillaDetails(datarecieved.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const alreadyRequestSentCheck = async () => {
    try {
      const datarecieved = await axios.get("/user/alreadyrequestsentcheck");
      setisRequestAlreadySent(true);
    } catch (error) {
      console.log(error);
      setisRequestAlreadySent(false);
    }
  };

  useEffect(() => {
    getBrillDetails();
    alreadyRequestSentCheck();
  }, []);

  return (
    <>
      {isRequestAlreadySent ? (
        <div className="flex flex-col gap-[4rem] mt-[2rem] ">
          <div className="book flex flex-col font-bold text-3xl md:text-5xl items-center">
            <p>Buy System In Order To Access Dashboard</p>
            <div className="flex ">
              <div className="h-[4px] w-[20rem] bg-[#664198] "></div>
              <div className="h-[4px] w-[10rem] bg-[#664198] ml-[30px]"></div>
            </div>
          </div>
          <div className=" flex justify-center gap-[4rem] w-[100vw] items-center">
            <div className="flex flex-col gap-[4rem] h-[30rem] py-2  justify-between">
              <div className="book ml-[-10rem]">
                <img
                  className="md:h-[20rem] "
                  src={brillaDetails?.brillaImage}
                  onError={(e) => {
                    e.target.onerror = null; // Prevent looping
                    e.target.src = "/landing/book.png";
                  }}
                  alt=""
                />
                <div className="flex justify-center font-semibold md:text-3xl text-2xl">
                  <div>
                    <p className="text-3xl font-semibold text-center md:text-left">
                      COSTO:
                      {brillaDetails?.brillaPrice ? (
                        brillaDetails?.brillaPrice
                      ) : brillaDetails?.discountPrice ? (
                        <>
                          {" "}
                          <span className="text-3xl font-light line-through">
                            ${brillaDetails?.originalPrice}
                          </span>{" "}
                          ${brillaDetails?.discountPrice}
                        </>
                      ) : (
                        <p>{brillaDetails?.originalPrice}$</p>
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div
                  onClick={() => {
                    paymentFunc();
                  }}
                  className="flex justify-center mt-2"
                >
                  <button className="border-[#664198] border-[1px] py-2 px-[6rem] font-bold text-[1.2rem] rounded hover:bg-[#664198] hover:text-white transition-all ease-in-out duration-300">
                    Purchase
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[30rem] h-[30rem] bg-slate-300 rounded flex flex-col justify-between py-2">
                <p className="font-bold text-[2rem] text-center">
                  Already done the payment by other means?
                </p>
                <p className="font-lightbold text-[1.2rem] text-center">
                  Click the button below to send verification request to admins.
                </p>
                <div
                  onClick={() => {
                    sendVerificationRequest();
                  }}
                  className="flex justify-center mt-2"
                >
                  <button className="border-[#664198] border-[1px] py-2 px-[6rem] font-bold text-[1.2rem] rounded hover:bg-[#664198] hover:text-white transition-all ease-in-out duration-300">
                    Send Verification Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[100vh] w-[100vw] max-w-[100%] flex justify-center items-center ">
          <p className="text-[2rem] font-semibold">
            Your request has already been sent please wait for verification by
            our admin and check your mail!
          </p>
        </div>
      )}
    </>
  );
};

export default page;
