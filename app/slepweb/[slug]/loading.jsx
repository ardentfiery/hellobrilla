import React from "react";
  
const MiPaginaLoader = () => {
  return (
    <div className="absolute z-50 top-0 left-0 h-[100vh] w-[100vw] bg-white flex justify-center items-center ">
      <div className="w-[70vw] md:w-[30rem]">
        <img
          src="/sleepmlogo.png"
          className="w-full h-auto  "
          style={{
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
          alt=""
        />
      </div>
    </div>
  );
};

export default MiPaginaLoader;
