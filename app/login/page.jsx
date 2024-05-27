"use client";
import React, { useState } from "react";
import { GoPerson } from "react-icons/go";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import { loginSchema } from "@/schema";
import axios from "../api/axiosintercepter";
import ForgotPassword from "./ForgotPassword";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
const initialValues = {
    username: "",
    password: "",
};

const Page = () => {
    const router = useRouter();
    const [password, setpassword] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [size, setSize] = React.useState();
    const handleOpen = (value) => {
        setSize(value);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: initialValues,
            validationSchema: loginSchema,
            onSubmit: async (values) => {
                const toastId = toast.loading("Sending Otp...");
                try {
                    await axios.post("/user/locallogin", {
                        username: values.username,
                        password: values.password,
                    });
                    toast.success("Log in successful !");
                    await axios.get("/user/paidforbrilla")
                    // router.push("/")
                    toast.dismiss(toastId);
                } catch (error) {
                    toast.error("Login failer");
                    toast.dismiss(toastId);
                }

                // console.log(values);
            },
        });

    return (
        <div>
            <ForgotPassword size={size} open={open} handleClose={handleClose} />
            <div className="h-[100vh] w-[100vw] overflow-hidden relative ">
                <img
                    className=" absolute bottom-[-410px] md:w-[100vw] -z-10"
                    src="/signup/bottomsign.png"
                    alt=""
                />

                <div className="flex flex-col items-center md:items-start gap-8 md:flex-row w-[100%] md:w-[65%]  md:justify-between md:px-10 h-[100vh]  pt-[5%]">
                    <div>
                        <img
                            className="h-[60px]"
                            src="/login/logo.png"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col gap-6 ">
                        <div>
                            <p className="font-bold text-4xl">
                                <span className="text-[#803DA1]">Tu </span>eres
                                Bienvenido
                            </p>
                        </div>
                        <div>
                            <p className=" text-[#803DA1] text-lg">
                                Estamos encantadose de tenerte de
                                <br /> vuelta. Preparate para explorar un
                                <br />
                                mundo de innovacaion excelencia
                                <br /> en cadi inicio de sedion. Adelante y{" "}
                                <br />{" "}
                                <span className="text-[#803DA1] font-bold">
                                    brilla
                                </span>{" "}
                                con nosotros!
                            </p>
                        </div>
                        <form
                            className="flex gap-4 flex-col"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex bg-[#F1F1F1]  w-[90vw] md:w-[360px] items-center rounded-md gap-2">
                                <div className="px-4 w-[10%]">
                                    <IoPersonCircleOutline className="text-[#803DA1]" />
                                </div>
                                <div className="w-[90%]">
                                    <input
                                        className="bg-transparent border-none outline-none h-[60px] w-[100%] rounded text-[#803DA1] placeholder-[#803DA1] text-sm"
                                        type="text"
                                        placeholder="Usuario"
                                        name="username"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                            </div>
                            {errors.username && touched.username ? (
                                <p className="text-red-500">
                                    {errors.username}
                                </p>
                            ) : null}

                            <div className="flex bg-[#F1F1F1] justify-between w-[90vw] md:w-[360px] items-center rounded-md gap-2">
                                <div className="flex  items-center gap-2 w-[90%]">
                                    <div className="px-4 w-[10%]">
                                        <CiLock className="text-[#803DA1]" />
                                    </div>
                                    <div className="w-[90%]">
                                        <input
                                            className="bg-transparent border-none outline-none h-[60px] w-[100%] rounded text-[#803DA1] placeholder-[#803DA1] text-sm"
                                            type={
                                                password ? "text" : "password"
                                            }
                                            placeholder="Contrasena"
                                            name="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </div>
                                </div>

                                <div className="mr-4 w-[10%]">
                                    <FaEyeSlash
                                        onClick={() => {
                                            setpassword(!password);
                                        }}
                                        className="text-[#803DA1]  cursor-pointer"
                                    />
                                </div>
                            </div>
                            {errors.username && touched.username ? (
                                <p className="text-red-500">
                                    {errors.username}
                                </p>
                            ) : null}
                        </form>
                        <div>
                            <button
                                type="submit"
                                // type="button"
                                onClick={handleSubmit}
                                className="bg-[#803DA1] h-[50px] w-[90vw] md:w-[360px] rounded text-white cursor-pointer"
                            >
                                Ingresaa
                            </button>
                        </div>
                        <div>
                            <p className="text-center">
                                Forget your password?{" "}
                                <strong
                                    onClick={() => {
                                        handleOpen("50rem");
                                    }}
                                    className="cursor-pointer"
                                >
                                    Reset Password
                                </strong>
                            </p>
                        </div>

                        <div className="flex  justify-center">
                            <button
                                onClick={() => {
                                    window.open(
                                        // "http://localhost:5000/user/google",
                                        "https://backend.brillasystem.com/user/google",
                                        "_self"
                                    );
                                }}
                                className="w-[180px] h-[50px] border gap-4 rounded border-black  flex justify-center items-center"
                            >
                                <div>
                                    <img
                                        className="h-6"
                                        src="/login/google.png"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <p className="text-black">Google</p>
                                </div>
                            </button>
                        </div>

                        <div className="flex justify-center">
                            <p>
                                ¿tienes una cuenta?{" "}
                                <span
                                    onClick={() => {
                                        router.push("/signup");
                                    }}
                                    className="text-[#803DA1] font-bold cursor-pointer"
                                >
                                    Registrate
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
