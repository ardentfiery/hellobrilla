"use client";
import React, { useEffect } from "react";
import Left from "@/components/dashboard/Left";
import axios from "@/app/api/axiosintercepter";
import Right from "@/components/dashboard/Right";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const checkAuthorization = async () => {
    try {
      const isAuthorized = await axios.get("/user/authorize");
      try {
        const data = await axios.get("/user/paidforbrilla");
        router.push("/dashboard");
      } catch (error) {
        router.push("/payment");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkAuthorization();
  }, []);
  return (
    <div className="h-[100vh] overflow-hidden">
      <div className="md:grid md:grid-cols-[1fr_4fr] gap-4">
        <div className="md:px-2 md:py-4 md:h-[100vh] h-fit  w-[21rem]">
          <Left />
        </div>
        <div className="h-[100vh] w-[calc(100vw-21rem)]  overflow-y-scroll no-scrollbar">
          <Right />
          {/* <Right/> */}
        </div>
      </div>
    </div>
  );
};

export default Page;
