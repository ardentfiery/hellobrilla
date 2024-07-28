"use client";
import React, { useState, useEffect } from "react";
import { Input } from "rsuite";
import { Label } from "@/components/ui/label";
import { useDashContext } from "@/context/DashboardContext";
import { toast } from "react-hot-toast";
import axios from "@/app/api/axiosintercepter";

const MiPaginaSocial = ({ isActive }) => {
  const { userId } = useDashContext();

  const [userSocials, setuserSocials] = useState([]);
  const [updateValues, setupdateValues] = useState({});

  const getUserSocial = async () => {
    console.log(userId);
    try {
      const resp = await axios.get(`/user/getusersocialpagina/${userId}`);
      setuserSocials(resp.data.data);
      console.log(resp.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUserSocial = async () => {
    const toastId = toast.loading("updating...");
    try {
      await axios.post(`/user/updateusersocialpagina/${userId}`, updateValues);
      getUserSocial();
      setupdateValues({});
      toast.success("Updated successfully!...");
      toast.dismiss(toastId);
    } catch (error) {
      console.log(error);
      toast.error("Error updating!...");
      toast.dismiss(toastId);
    }
  };

  useEffect(
    () => {
      getUserSocial();
    },
    { isActive }
  );
  return (
    <div className="flex flex-col gap-4 items-center jutify-center w-full h-screen ">
      <div className="flex justify-center items-center md:grid md:grid-cols-2 gap-4 flex-col w-full  px-10 h-fit  mt-[10%]">
        <div>
          <Label htmlFor="facebook" className="text-[1.2rem] font-semibold ">
            Facebook
          </Label>
          <Input
            id="facebook"
            placeholder="Escribe algo..."
            defaultValue={userSocials?.facebook ? userSocials?.facebook : ""}
            onChange={(value) => {
              setupdateValues({ ...updateValues, facebook: value });
            }}
          />
        </div>
        <div>
          <Label htmlFor="insta" className="text-[1.2rem] font-semibold ">
            Instagram
          </Label>
          <Input
            id="insta"
            placeholder="Escribe instagram..."
            defaultValue={userSocials?.instagram ? userSocials?.instagram : ""}
            onChange={(value) => {
              setupdateValues({ ...updateValues, instagram: value });
            }}
          />
        </div>
        <div>
          <Label htmlFor="youtube" className="text-[1.2rem] font-semibold ">
            Youtube
          </Label>
          <Input
            id="youtube"
            placeholder="Escribe algo..."
            defaultValue={userSocials?.youtube ? userSocials?.youtube : ""}
            onChange={(value) => {
              setupdateValues({ ...updateValues, youtube: value });
            }}
          />
        </div>
        <div>
          <Label htmlFor="whatsapp" className="text-[1.2rem] font-semibold ">
            WhatsApp
          </Label>
          <Input
            id="whatsapp"
            placeholder="Escribe algo..."
            defaultValue={userSocials?.whatsapp ? userSocials?.whatsapp : ""}
            onChange={(value) => {
              setupdateValues({ ...updateValues, whatsapp: value });
            }}
          />
        </div>
        <div>
          <Label htmlFor="sms" className="text-[1.2rem] font-semibold ">
            SMS
          </Label>
          <Input
            id="sms"
            placeholder="Escribe algo..."
            defaultValue={userSocials?.sms ? userSocials?.sms : ""}
            onChange={(value) => {
              setupdateValues({ ...updateValues, sms: value });
            }}
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-[1.2rem] font-semibold ">
            Email
          </Label>
          <Input
            id="email"
            placeholder="Escribe algo..."
            defaultValue={userSocials?.email ? userSocials?.email : ""}
            onChange={(value) => {
              setupdateValues({ ...updateValues, email: value });
            }}
          />
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            updateUserSocial();
          }}
          className="border-[#813DA1] border-[2px] rounded-2xl py-2 w-[15rem] cursor-pointer hover:bg-[#813DA1] hover:text-white text-[1.1rem] transition-all ease-in-out duration-300 "
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default MiPaginaSocial;
