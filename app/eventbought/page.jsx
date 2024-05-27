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
          router.push("/");
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-[60vw]">
        <svg
          className="w-16 h-16 text-purple-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
        <h2 className="text-2xl font-bold mb-2 text-purple-700">Success!</h2>
        <p className="text-gray-700 mb-4 text-[1.2rem] font-semibold">
          The event has been bought successfully. Please check your email for
          the details.
        </p>
        <p className="text-gray-700">
          Redirecting to the landing page in {countdown} seconds...
        </p>
      </div>
    </div>
  );
};

export default page;
