import * as Yup from "yup"

export const signUpSchema = Yup.object({
    name:Yup.string().min(2).max(25).required("Please enter your name"),
    email:Yup.string().email().required("Please enter your email"),
    password:Yup.string().min(6).required("Please enter your password"),
    phone:Yup.string().min(6).required("Please enter your phone number"),
    username:Yup.string().min(2).max(25).required("Please enter your username")
})
export const loginSchema = Yup.object({
    username:Yup.string().min(2).max(25).required("Please enter your username"),
    password:Yup.string().min(6).required("Please enter your password"),
})