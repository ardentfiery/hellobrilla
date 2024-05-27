"use client";
import React, { useState } from "react";
import { GoPerson } from "react-icons/go";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import { signUpSchema } from "@/schema";
import axios from "../api/axiosintercepter";
import { Modal, ButtonToolbar, Button, Placeholder } from "rsuite";
import { MdDoneOutline } from "react-icons/md";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const initialValues = {
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
};

const Page = () => {
    const router = useRouter()
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
            validationSchema: signUpSchema,
            onSubmit: async (values) => {
                const toastId = toast.loading("Signing up...");
                try {
                    await axios.post("/user/signup", values);
                    console.log("sign up done");
                    handleOpen("md");
                    toast.success("Signed up !");
                    toast.dismiss(toastId);
                } catch (error) {
                    toast.error("Error sending otp");
                    toast.dismiss(toastId);
                }
            },
        });

    return (
        <div className="h-[100vh] w-[100vw] overflow-x-hidden relative">
            <VerifyOtp
                size={size}
                open={open}
                handleClose={handleClose}
                email={values.email}
            />
            <img
                className="h-[200px] w-[200px] absolute right-[-100px] md:top-0 top-[-30px] md:right-[0px]"
                src="/login/topright.png"
                alt=""
            />

            <img
                className="h-[200px] w-[200px] absolute left-[-20px] bottom-[-50px]   md:bottom-[0px] md:left-[10px]]"
                src="/login/bottomleft.png"
                alt=""
            />

            <div className="flex flex-col gap-4 md:flex-row w-[65%]   md:justify-around h-[100vh] pt-[2%]  md:pt-[5%]">
                <div className="md:w-[40%] w-[100vw] flex justify-center md:justify-start">
                    <img className="h-[40px] md:h-[60px]" src="/login/logo.png" alt="" />
                </div>
                <div className="flex flex-col items-center md:items-start gap-3  w-[100vw] md:w-auto md:gap-6 md:mr-10">
                    <div className=" md:w-auto w-[90vw]">
                        <p className="font-bold  text-3xl">Crea una cuenta</p>
                    </div>
                    <div className="w-[90vw] md:w-auto"> 
                        <p className=" text-[#5F5D9C]">
                            Sigue las instrucciones lleha esta <br />
                            <span>formulario</span>
                        </p>
                    </div>
                    <form
                        className="flex gap-4 flex-col"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex bg-[#F1F1F1] w-[90vw] md:w-[360px] items-center  rounded-md gap-2">
                            <div className="px-4 w-[10%]">
                                <GoPerson className="text-[#5F5D9C]" />
                            </div>
                            <div className="w-[90%] ">
                                <input
                                    className="bg-transparent border-none outline-none h-[60px] w-[100%] rounded text-[#5F5D9C]  text-sm"
                                    type="text"
                                    placeholder="Nombre"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>
                        {errors.name && touched.name ? (
                            <p className="text-red-500">{errors.name}</p>
                        ) : null}
                        <div className="flex bg-[#F1F1F1] w-[90vw] md:w-[360px] items-center rounded-md gap-2">
                            <div className="px-4 w-[10%]">
                                <IoPersonCircleOutline className="text-[#5F5D9C]" />
                            </div>
                            <div className="w-[90%]">
                                <input
                                    className="bg-transparent  border-none outline-none h-[60px] w-[100%] rounded text-[#5F5D9C]  text-sm"
                                    type="text"
                                    placeholder="Usuario"
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>
                        {errors.username && touched.username ? (
                            <p className="text-red-500">{errors.username}</p>
                        ) : null}
                        <div className="flex bg-[#F1F1F1] w-[90vw] md:w-[360px] items-center rounded-md gap-2">
                            <div className="px-4 w-[10%]">
                                <MdOutlinePhone className="text-[#5F5D9C]" />
                            </div>
                            <div className="w-[90%]">
                                <input
                                    className="bg-transparent  border-none outline-none h-[60px] w-[100%] rounded text-[#5F5D9C]  text-sm"
                                    type="text"
                                    placeholder="Celular"
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>
                        {errors.phone && touched.phone ? (
                            <p className="text-red-500">{errors.phone}</p>
                        ) : null}

                        <div className="flex bg-[#F1F1F1] w-[90vw] md:w-[360px] items-center rounded-md gap-2">
                            <div className="px-4 w-[10%]">
                                <CiLock className="text-[#5F5D9C]" />
                            </div>
                            <div className="w-[90%]">
                                <input
                                    className="bg-transparent  border-none outline-none h-[60px] w-[100%] rounded text-[#5F5D9C]  text-sm"
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>
                        {errors.email && touched.email ? (
                            <p className="text-red-500">{errors.email}</p>
                        ) : null}
                        <div className="flex bg-[#F1F1F1] justify-between w-[90vw] md:w-[360px] items-center rounded-md gap-2">
                            <div className="flex  items-center gap-2 w-[90%]">
                                <div className="px-4 w-[10%]">
                                    <CiLock className="text-[#5F5D9C]" />
                                </div>
                                <div className="w-[90%]">
                                    <input
                                        className="bg-transparent  border-none outline-none h-[60px] w-[100%] rounded text-[#5F5D9C] text-sm"
                                        type={password ? "text" : "password"}
                                        placeholder="Contrasena"
                                        name="password"
                                        vallue={values.password}
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
                        {errors.password && touched.password ? (
                            <p className="text-red-500">{errors.password}</p>
                        ) : null}
                    </form>

                    <div>
                        <button
                            onClick={handleSubmit}
                            className="bg-[#6C22A6] h-[50px] w-[90vw] md:w-[360px] rounded text-white"
                        >
                            Crea una cuenta
                        </button>
                    </div>

                    <div className="flex justify-center w-[100%] ">
                        <button
                            onClick={() => {
                                window.open(
                                    // "http://localhost:3502/user/google",
                                    "https://backend.brillasystem.com/user/google",
                                    "_self"
                                );
                            }}
                            className="w-[180px] h-[50px] border rounded border-black  flex justify-center gap-4 items-center"
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
                    <div className="flex justify-center w-[100%]">
                        <p>
                            ¿tienes una cuenta?{" "}
                            <span onClick={()=>{
                                router.push("/login")
                            }} className="text-[#6C22A6] font-bold cursor-pointer">
                                Ingresa
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
const VerifyOtp = ({ size, open, handleClose, email }) => {
    const [verified, setverified] = useState(false);
    const [otp, setotp] = useState("");
    const verifyOtp = async () => {
        const toastId = toast.loading("Verifying OTP");
        try {
            await axios.post("/user/verifysignupotp", {
                otp,
                email,
            });
            console.log("verify bhayo");
            setverified(true);
            toast.success("OTP verified");
            toast.dismiss(toastId);
        } catch (error) {
            toast.error("Error sending otp");
            toast.dismiss(toastId);
        }
    };
    return (
        <div>
            <Modal size={size} open={open} onClose={handleClose}>
                <Modal.Header>
                    {/* <Modal.Title>Modal Title</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <div className="   flex gap-6 flex-col items-center   ">
                        {/* <div className="px-4">
                            <GoPerson className="text-[#5F5D9C]" />
                        </div> */}
                        {verified === true ? (
                            <div className="flex flex-col items-center gap-6">
                                <p className="font-extrabold  text-4xl text-[#803da1]">
                                    Your sign up is verified.
                                </p>
                                <MdDoneOutline className="text-6xl text-green-700" />
                            </div>
                        ) : (
                            <>
                                <div>
                                    <p className="text-xl  text-[#803da1] text-center">
                                        OTP has been sent to your email:{email}
                                        <br /> Please verify OTP.
                                    </p>
                                </div>
                                <div>
                                    <input
                                        className=" border-none bg-[#edd6e8] outline-none h-[60px] w-[360px] rounded px-4 text-[#5F5D9C] placeholder-[#6e6adf] text-sm"
                                        type="text"
                                        placeholder="Enter OTP"
                                        name="name"
                                        onChange={(e) => {
                                            setotp(e.target.value);
                                        }}
                                        // value={values.name}
                                    />
                                </div>
                                <div>
                                    <button
                                        onClick={verifyOtp}
                                        className="h-[40px] w-[160px] bg-[#e782c0] text-[#803da1]"
                                    >
                                        Verify OTP
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Page;
