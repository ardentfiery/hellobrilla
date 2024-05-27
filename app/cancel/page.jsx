"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {

  const [countdown, setCountdown] = useState(10);
  const router = useRouter();
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          router.push("/login");
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-[60vw]">
        <svg
          className="w-16 h-16 text-red-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
        <h2 className="text-2xl font-bold mb-2 text-red-700">
          Payment Cancelled
        </h2>
        <p className="text-gray-600 mb-4 text-[1.2rem] font-semibold">
          Your payment has been cancelled. Please contact support if you need
          further assistance.
        </p>
        <p className="text-gray-600">
          Redirecting to the landing page in {countdown} seconds...
        </p>
      </div>
    </div>
  );
};

export default page;
