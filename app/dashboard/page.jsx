"use client";
import React, { useEffect, useState } from "react";
import Left from "../../components/dashboard/Left"
import axios from "../../app/api/axiosintercepter";
import Right from "../../components/dashboard/Right";
import { useRouter } from "next/navigation";
import BrillaLoader from "../../utils/BrillaLoader";
import { useDashContext } from "../../context/DashboardContext";

const Page = () => {
  const [isLoading, setisLoading] = useState(false);
  const { setuserId } = useDashContext();

  const router = useRouter();

  const checkAuthorization = async () => {
    try {
      const isAuthorized = await axios.get("/user/authorize");
      try {
        const data = await axios.get("/user/paidforbrilla");
        setisLoading(false);
        setuserId(isAuthorized.data.id);
      } catch (error) {
        router.push("/payment");
      }
    } catch (error) {
      router.push("/login");
      console.log(error);
    }
  };

  useEffect(() => {
    // checkAuthorization();
  }, []);
  return (
    <>
      {isLoading ? (
        <BrillaLoader />
      ) : (
        <div className="h-[100vh] overflow-hidden">
          <div className="lg:grid  lg:grid-cols-[1fr_4fr] gap-4">
            <div className="lg:px-2 lg:py-4 lg:h-[100vh] h-fit  lg:w-[17rem] xl:w-[20rem]  ">
              <Left />
            </div>
            <div className="h-[100vh] lg:w-[calc(100vw-17rem)] xl:w-[calc(100vw-20rem)]  overflow-y-scroll no-scrollbar">
              <Right />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
