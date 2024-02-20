import React, {useState} from "react";
import './Signup.css'
import { useFormik } from "formik";
import * as Yup from "yup";
// import { signUpSchema } from "../../Schemas";
import Logo1 from '../../assets/Images/Logo1.png'
import Ficone from '../../assets/Images/fiicon.png'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import Popup from "reactjs-popup";
import { RiArrowDropDownLine } from "react-icons/ri";
import {useTranslation} from "react-i18next"           // for translation
const Signup = () => {
    const initialValues = {
        firstname: "",
        lastname: "",
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        CheckMeOut: "",
    };
    const signUpSchema = Yup.object({
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
    const [showPassword, setshowPassword] = useState(true);
    const [showConfirmPassword, setshowConfirmPassword] = useState(true);

    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: signUpSchema,
            validateOnChange: true,
            validateOnBlur: false,
      
            onSubmit: (values, action) => {
                console.log("🚀 val", values);
                action.resetForm();
            },
        });

// for translation start
        const [t, i18n] = useTranslation("global")

        const handleChangeLanguage = (lang ) => {
            i18n.changeLanguage(lang);
        }
// for translation end

    console.log(errors);
    return (
        <>
            <div className="container-fluid">
                <div className="constainer maindiv">
                    <div className="row  btndiv">
                        <div className="col-md-10"></div>
                        <div className="col-md-2 btnleft">
                            <Popup trigger={<button className="btnsignup"><img src={Ficone} className="ficone" />English<span className="iconebtn"><RiArrowDropDownLine color="white" size={30} /></span></button>} position="bottom center">
                                <div className="englishkey">
                                    <ul className="englishkeylist">
                                        {/* for translation start */}
                                        <button onClick={()=> handleChangeLanguage("en")}>English</button>
                                        <button onClick={()=> handleChangeLanguage("gr")}>German</button>
                                           {/* for translation end */}
                                        {/* <li>English</li>
                                        <li>Spanish</li> */}
                                    </ul>
                                </div>

                            </Popup>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-7">
                            <img src={Logo1} className='signupimg'></img>
                            <p className="ptextsigup">
                                <span className="ptextsigup1">{t("form.Unlock")} </span>{t("form.Opportunities")} <br /><span className="ptextsigup1"> {t("form.Fuel")} </span> {t("form.Ambitions")}
                            </p>
                            <p className="texth3">{t("form.The")} {t("form.Ultimate")} {t("form.Work")} {t("form.Marketplace")}
                            </p>
                            <p className="ptext2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="col-md-5 formdiv">
                            <form onSubmit={handleSubmit}>
                                <div className="formhdiv">
                                    <h2 className="formh">{t("form.Create")} {t("form.account")}</h2>
                                    <p className="formp">{t("form.Already")} {t("form.have")} {t("form.an")} {t("form.account")} ? <span className="formpspam">{t("form.Login")} {t("form.here")}</span></p> 
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-6 formfield">
                                        <label for="firstname1">{t("form.First")} {t("form.Name")}</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="firstname"
                                            id="firstname1"
                                            placeholder={t("form.firstnameplace")} 
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        {touched.firstname && errors.firstname ? (
                                            <p className="form-error">{errors.firstname}</p>) : null}
                                    </div>
                                    <div class="form-group col-md-6 formfield1">
                                        <label for="lastname1">{t("form.Last")} {t("form.Name")}</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="lastname"
                                            id="lastname1"
                                            placeholder={t("form.lastnameplace")}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        {touched.lastname && errors.lastname ? (
                                            <p className="form-error">{errors.lastname}</p>
                                        ) : null}
                                    </div>
                                    {/* <div class="form-group col-md-6 formfield1">
                                        <label for="lastname1">Last Name</label>
                                        <textarea
                                            type="textarea"
                                            class="form-control"
                                            name="lastname"
                                            id="lastname1"
                                            placeholder="Enter your last name"
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        {touched.lastname && errors.lastname ? (
                                            <p className="form-error">{errors.lastname}</p>
                                        ) : null}
                                    </div> */}
                                </div>

                                <div class="form-group">
                                    <label for="username1">{t("form.User")} {t("form.Name")}</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="username1"
                                        placeholder={t("form.enterusernameplace")}
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                    {touched.name && errors.name ? (
                                        <p className="form-error">{errors.name}</p>
                                    ) : null}
                                </div>

                                <div class="form-group">
                                    <label for="inputEmail4">{t("form.Email")}</label>
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="inputEmail4"
                                        placeholder={t("form.enteruseremailplace")}
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                    {errors.email && touched.email ? (
                                        <p className="form-error">{errors.email}</p>
                                    ) : null}
                                </div>
                                <div className="row">
                                    <div class="form-group col-md-6 ">
                                        <label for="password">{t("form.Password")}</label>
                                        <input
                                            type={showPassword ? "password" : "text"}
                                            class="form-control"
                                            id="password"
                                            placeholder="**********"
                                            name="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        {errors.password && touched.password ? (
                                            <p className="form-error">{errors.password}</p>
                                        ) : null}
                                        <span onClick={() => setshowPassword(!showPassword)}>{showPassword ? <IoEyeOffOutline color="#fff" size={'25px'} style={{ position: 'absolute', top: '70%', transform: 'translateY(-50%)', color: '#666', right: '25px' }} /> : <IoEyeOffOutline color="#fff" size={'25px'} style={{ position: 'absolute', top: '70%', transform: 'translateY(-50%)', color: '#666', right: '25px' }} />}</span>
                                    </div>

                                    <div class="form-group col-md-6 ">
                                        <label for="password1">{t("form.Confirm")} {t("form.password")}</label>
                                        <input
                                             type={showConfirmPassword ? "password" : "text"}
                                             class="form-control"
                                            id="password1"
                                            placeholder="**********"
                                            name="confirm_password"
                                            value={values.confirm_password}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        {errors.confirm_password && touched.confirm_password ? (
                                            <p className="form-error">{errors.confirm_password}</p>
                                        ) : null}
                                         <span onClick={() => setshowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword ? <IoEyeOffOutline color="#fff" size={'25px'} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', color: '#666', right: '5px' }} /> : <IoEyeOutline color="#fff" size={'25px'} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', color: '#666', right: '5px' }} />}</span>
                                    </div>
                                </div>


                                <div class="form-group">
                                    <div class="form-check">
                                        <input
                                            className="form-check-input maincheckbox"
                                            type="checkbox"
                                            id="gridCheck"
                                            name="CheckMeOut"
                                            value={values.CheckMeOut}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <label className="form-check-label checkb" for="gridCheck">
                                            {t("form.I")} {t("form.hereby")} {t("form.confirm")} {t("form.that")} {t("form.I’m")} {t("form.above")} {t("form.the")} {t("form.legal")} {t("form.age")} {t("form.of")} 18.
                                        </label>
                                        {errors.CheckMeOut && touched.CheckMeOut ? (
                                            <p className="form-error">{errors.CheckMeOut}</p>
                                        ) : null}
                                    </div>
                                </div>
                                <button class="btnsignup1">{t("form.SIGN")} {t("form.UP")}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup;