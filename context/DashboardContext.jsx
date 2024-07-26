"use client";
import { useContext, createContext, useState } from "react";

const DashContext = createContext();

export const DashProvider = ({ children }) => {
  const [activeDashPage, setactiveDashPage] = useState(0);
  const [userId, setuserId] = useState("");

  return (
    <DashContext.Provider value={{ activeDashPage, setactiveDashPage, userId, setuserId }}>
      {children}
    </DashContext.Provider>
  );
};

export const useDashContext = () => {
  return useContext(DashContext);
};
