"use client";
import { useContext, createContext, useState, useEffect } from "react";
import axios from "../app/api/axiosintercepter";

const DashContext = createContext();

export const DashProvider = ({ children }) => {
  const [activeDashPage, setactiveDashPage] = useState(0);
  const [userId, setuserId] = useState("");
  const [userData, setuserData] = useState({});

  const getUsersDetail = async (uid) => {
    try {
      const response = await axios.get(`/user/getuserdetail/${uid}`);
      setuserData(response.data.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    if (userId) {
      getUsersDetail(userId);
    }
  }, [userId]);

  return (
    <DashContext.Provider
      value={{ activeDashPage, setactiveDashPage, userId, setuserId, userData }}
    >
      {children}
    </DashContext.Provider>
  );
};

export const useDashContext = () => {
  return useContext(DashContext);
};
