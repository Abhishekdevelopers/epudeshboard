import React, { useState } from "react";
import './Address.css';
import Address1 from '../../assets/Images/address.png'
import { GoArrowRight } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { GrGallery } from "react-icons/gr";
import { RiAttachment2 } from "react-icons/ri";

const Address = () => {

    const [radio, setRadio] = useState();
    const [image, setImage] = useState();
    const handleClick1 = () => {
        console.log(radio)
        console.log(image)
    }
    return (
        <>
            <div className="address_div">
                <div className="container">
                    <div className="container-fluid">
                        <div className="row">
                            <p className='abouttext1'>KYC Verification</p>
                            <p className='abouttext2'>Some instructions to make the user understand what is the context of the pop-up</p>
                        </div>
                        <div className="row maindivadd" >
                            <div className="col-md-8">
                                <form className="addressform">
                                    <div className="row">
                                        <label className="lablecolor">Current Status</label>
                                        <div className="radioadd">
                                            <div class="form-check form-check-inline ">
                                                <input class="form-check-input radiogap" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Driving License" onChange={(e) => setRadio(e.target.value)} />
                                                <label class="form-check-label" for="inlineRadio1">Driving License</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input radiogap" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Passport" onChange={(e) => setRadio(e.target.value)} />
                                                <label class="form-check-label" for="inlineRadio2">Passport</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input radiogap" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Identity Card" onChange={(e) => setRadio(e.target.value)} />
                                                <label class="form-check-label" for="inlineRadio3">Identity Card</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input radiogap" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="Biometric Passport" onChange={(e) => setRadio(e.target.value)} />
                                                <label class="form-check-label" for="inlineRadio4">Biometric Passport</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row addresspadding">
                                        <div className='col-md-6 addressimgbtn'>
                                            <div className='row aboutinput'>
                                                <div className='addressimglable'>
                                                    <label htmlFor='imgs'>ADD A LINK 
                                                    <RiAttachment2     
                                                    size={18}
                                                    className='addressbtninput' /></label>
                                                </div>
                                                <input type='file' id='imgs' onChange={(e) => setImage(e.target.files)} ></input>
                                            </div>
                                        </div>
                                        <div className='col-md-6 addressimgbtn'>
                                            <div className='row aboutinput'>
                                                <div className='addressimglable'>
                                                    <label htmlFor='imgs'>UPLOAD FROM GALLERY <GrGallery className='addressbtninput' /></label>
                                                </div>
                                                <input type='file' id='imgs' onChange={(e) => setImage(e.target.files)} ></input>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='col-md-4'>
                                <img src={Address1} className='addresssecimg'></img>
                            </div>


                        </div>

                        <div className='row pbottom'>

                            <div className='row col-md-8 addbtnposition'>
                                <button className='aboutbtn2'> SKIP <span className='btnspan2'><GoChevronRight size={16} className='btnspan' /><GoChevronRight size={16} className='btnspan1' /></span></button></div>
                            <div className='row col-md-4'>
                                <button className='addressbtn1' onClick={handleClick1}> SAVE & CONTINUE <span className='addressarow'><GoArrowRight size={22} /></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Address