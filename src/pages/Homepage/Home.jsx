import React, { useState } from "react";
import Header from "../../components/Header";
import { GoArrowRight } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import "./Home.css"
import Imagepath from "../../Utils/Imagepath"
import { Formik, Field, Form, ErrorMessage } from 'formik';

import * as Yup from 'yup';
function Home() {
    const [showPassword, setshowPassword] = useState(true);

    const initialValues = {
        // fullname: '',
        // username: '',
        email: '',
        password: '',
        // confirmPassword: '',
        acceptTerms: false,
    };

    const validationSchema = Yup.object().shape({
        // fullname: Yup.string().required('Fullname is required'),
        // username: Yup.string()
        //     .required('Username is required')
        //     .min(6, 'Username must be at least 6 characters')
        //     .max(20, 'Username must not exceed 20 characters'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .required('Password is required'),
        // .min(6, 'Password must be at least 6 characters')
        // .max(40, 'Password must not exceed 40 characters'),
        // confirmPassword: Yup.string()
        //     .required('Confirm Password is required')
        //     .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
        acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
    });


    return (
        <div className='home_pg'>
            <div className="first_sec">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <h1>Unlock <span>Opportunities</span></h1>
                        </div>
                        <div className="row">
                            <div className="col-md-8 form_brd">
                                <h2>Fuel <span>Ambitions</span></h2>
                                <p>The Ultimate Work Marketplace</p>
                                <img src={Imagepath.hm_btmimg} alt="image" />
                            </div>
                            <div className="col-md-4 hom_lgn">
                                <div className="ui devider log_frmn">
                                    <div className="ui form">
                                        <Formik
                                            initialValues={initialValues}
                                            validationSchema={validationSchema}
                                            onSubmit={(values) => console.log(values, 'values')}
                                        >
                                            {({ errors, touched, resetForm }) => (
                                                <Form>
                                                    <h3>Login</h3>
                                                    <p>Don’t have an account? <span>Create an account here</span></p>
                                                    <div className="form-group">
                                                        <label htmlFor="email" style={{ color: '#fff' }} > Email </label>
                                                        <Field
                                                            placeholder="Enter your email id"
                                                            name="email"
                                                            type="email"
                                                            className={
                                                                'form-control' +
                                                                (errors.email && touched.email ? ' is-invalid' : '')
                                                            }
                                                        />
                                                        <ErrorMessage
                                                            name="email"
                                                            component="div"
                                                            className="invalid-feedback"
                                                        />
                                                    </div>

                                                    <div className="form-group">
                                                        <label style={{ color: '#fff' }} htmlFor="password"> Password </label>
                                                        <div style={{ flexDirection: 'row', position: 'relative' }}>
                                                            <Field
                                                                placeholder="Enter your password"
                                                                name="password"
                                                                type={showPassword ? "password" : "text"}
                                                                className={
                                                                    'form-control' +
                                                                    (errors.password && touched.password ? ' is-invalid' : '')
                                                                }
                                                            />
                                                            <span onClick={() => setshowPassword(!showPassword)}>{showPassword ? <IoEyeOffOutline color="#fff" size={'25px'} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', color: '#666', right: '5px' }} /> : <IoEyeOutline color="#fff" size={'25px'} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', color: '#666', right: '5px' }} />}</span>
                                                        </div>

                                                        <ErrorMessage
                                                            name="password"
                                                            component="div"
                                                            className="invalid-feedback"
                                                        />
                                                    </div>
                                                    <div className="form-group form-check">
                                                        <Field
                                                            name="acceptTerms"
                                                            type="checkbox"
                                                            className={
                                                                'form-check-input' +
                                                                (errors.acceptTerms && touched.acceptTerms
                                                                    ? ' is-invalid'
                                                                    : '')
                                                            }
                                                        />
                                                        <label htmlFor="acceptTerms" style={{ color: '#fff' }}>
                                                            Remember Me!
                                                        </label>
                                                        <ErrorMessage
                                                            name="acceptTerms"
                                                            component="div"
                                                            className="invalid-feedback"
                                                        />
                                                    </div>

                                                    <div className="form-group">
                                                        <button type="submit" className="btn btn-primary"  >
                                                            LOG IN
                                                        </button>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container navi_imgg">
                <div className="row">
                    <div className="col-md-8">
                        <img src={Imagepath.Group513801} alt="image" />
                    </div>
                </div>
            </div>
        
        </div>

    )
}


export default Home;