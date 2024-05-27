"use client";
import React from "react";
import Left from "@/components/dashboard/Left";
import axios from "@/app/api/axiosintercepter";
import Right from "@/components/dashboard/Right";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const checkAuthorization = async () => {
    try {
      const isAuthorized = await axios.get("/user/authorized");
      // console.log(isAuthorized);
    } catch (error) {
      router.push("/login");
    }
  };

  useEffect(() => {
    checkAuthorization();
  }, []);
  return (
    <div className="h-[100vh] overflow-hidden">
      <div className="md:grid md:grid-cols-[1fr_4fr] gap-4">
        <div className="md:px-2 md:py-4 md:h-[100vh] h-fit">
          <Left />
        </div>
        <div className="h-[100vh] w-[100%]  overflow-y-scroll no-scrollbar">
          <Right />
          {/* <Right/> */}
        </div>
      </div>
    </div>
  );
};

export default Page;
