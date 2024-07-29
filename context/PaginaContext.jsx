"use client";
import { useContext, createContext, useState, useEffect } from "react";
import axios from "@/app/api/axiosintercepter";

const PaginaContext = createContext();

export const PaginaProvider = ({ children }) => {
  const [products, setproducts] = useState([]);
  const [userSocials, setuserSocials] = useState([]);
  const [userId, setuserId] = useState("");
  const [activeTab, setactiveTab] = useState(0);

  const getUserSocial = async (params) => {
    try {
      setuserId(params.slug);
      const resp = await axios.get(`/user/getusersocialpagina/${params.slug}`);
      setuserSocials(resp.data.data);
      console.log(resp.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getProducts = async () => {
    try {
      const resp = await axios.get("/sleepm/getpaginaproducts");
      setproducts(resp?.data?.data);
    } catch (error) {
      console.log(`error gettting products: ${error}`);
    }
  };
  const parseText = (text) => {
    const parts = text?.split(/(\*\*.*?\*\*|\n)/);
    return parts?.map((part, index) => {
      if (part === "\n") {
        return <br key={index} />;
      } else if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      } else {
        return part;
      }
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <PaginaContext.Provider
      value={{
        products,
        userSocials,
        getUserSocial,
        parseText,
        userId,
        setuserId,
        activeTab,
        setactiveTab,
      }}
    >
      {children}
    </PaginaContext.Provider>
  );
};

export const usePaginaContext = () => {
  return useContext(PaginaContext);
};
