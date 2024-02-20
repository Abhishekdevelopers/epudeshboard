import * as Yup from "yup";
export const signUpSchema = Yup.object({
    firstname: Yup.string().min(2).max(25).matches(/^[a-z,A-Z]+$/, 'Only alphabetic characters allowed').required("Please enter your firstname") ,
  lastname: Yup.string().min(2).max(25).matches(/^[a-z,A-Z]+$/, 'Only alphabetic characters allowed').required("Please enter your lastname"),
  name: Yup.string().min(2).max(25).matches(/^[a-z,A-Z]+$/, 'Only alphabetic characters allowed').required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
    CheckMeOut: Yup.bool()
    .oneOf([true], 'You need to accept the  Check me out'),
  
});