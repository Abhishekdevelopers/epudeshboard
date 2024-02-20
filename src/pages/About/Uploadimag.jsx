import React from 'react'
import Imageabout from "../../assets/Images/Profile.png"
import './Uploadimg.css'
import './Uploadingimg'
const Uploadimag = () => {

  return (
      <div>
        <img src={Imageabout} id='profile-pic'/>
        <label for="imput-file">upload image</label>
        <input type='file' accept='image/jpeg, image/png, image/jpg' id='input-file'></input>
      </div>
  )
}

export default Uploadimag
