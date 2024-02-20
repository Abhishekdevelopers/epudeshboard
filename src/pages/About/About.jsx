// import React,{useRef, useState} from 'react'
// import Webcam from 'react-webcam'
// import "./About.css"
// import Imageabout from "../../assets/Images/Profile.png"
// import Imagesecimg from '../../assets/Images/Group513798.png'
// import { GoArrowRight } from "react-icons/go";
// import { GoChevronRight } from "react-icons/go";
// import { IoCameraOutline } from "react-icons/io5";
// import { GrGallery } from "react-icons/gr";


// // camera//
// const videoConstraints={
//   facingMode:'enviroment'
// }
// //camera


// // import Webcamimage from '../../components/Webcam'
// // import Uploadimag from './Uploadimag'
// const About = () => {

//  //camera//
//  const webcamRef = useRef(null)
//     const [url,setUrl]=useState(null)
//     const capturePhoto=React.useCallback(async()=>{
//      const imageSrc = webcamRef.current.getScreenshot()
//      setUrl(imageSrc)
//     },[webcamRef])

//     const onUserMedia=(e)=>{
//        console.log(e)
//     }

// // camera//


//   function getData(val){
//     console.log(val.target.value)
//   }
//   console.log(url)
//   return (
//     <>
//     {/* <div className='about_m'>
//      <div className='container'>
//       <div className='about_width row'>
//         <div className='about_pm'>
//           <p className='about_p1'>About Yourself</p>
//           <p className='about_p2'>Some instructions to make the user understand what is the context of the pop-up</p>
//         </div>
//        </div>
//        <div>
//         <div className='row about_main'>
//             <div className='col-md-8'>
//             <p className='about_mainp'>Profile Picture</p>
//             </div>
//             <div className='col-md-4'></div>
//         </div>
//        </div>
//     </div>
//     </div> */}
//     <div className='about_div'>
//       <div className='container'>
//       <div className='row aboutmainpm'>
//         <div className='row ptextcolor'>
//             <p className='abouttext1'>About Yourself</p>
//             <p className='abouttext2'>Some instructions to make the user understand what is the context of the pop-up</p>
//         </div>
//           <div className='row '>
//             <div className='col-md-8 formlr'>
//             <form className='formborder'>
//             <div className='row'> <p className='ptext'>Profile Picture</p></div>

//             <div className='row'>
//             {url &&(
//             <div>
//                 <img src={url} alt="Screenshot" className='aboutimg'/>
//             </div>
//         )
//         }
//             {/* <img src={Imageabout} className='aboutimg'></img> */}
//             <div className='row'>
//              <div className='col-md-6 aboutbtn'>
//              {/* <Webcamimage/> */}
//              <button type="button" className="form-control aboutmain" id="exampleFormControlInput1" onClick={capturePhoto} >
//              OPEN CAMERA <IoCameraOutline size={16} className='btninput'/>
//              </button>
//              </div>
//              <div className='col-md-6 aboutbtn'>
//              {/* <Uploadimag/> */}
//              <button type="button" className="form-control aboutmain" id="exampleFormControlInput1">
//              UPLOAD FROM GALLERY <GrGallery className='btninput'/>
//              </button>
//              </div>

//              </div>

//             <div className='row'>
//                <input type="name" className="form-control aboutmain1" id="exampleFormControlInput1" placeholder="Enter name" onChange={getData}/>
//             </div>
//             {/* <div><Uploadimag/></div> */}
//             {/* <div>
//               <Webcamimage/>
//             </div> */}
//             <div className='row'>
//                <input type="text" className="form-control aboutmain1" id="exampleFormControlInput1" placeholder="Tell us about yourdelf" onChange={getData}/>
//             </div>

//             <div className='row'>
//                 <select className="form-select aboutmain2" aria-label="Default select example">
//                 <option selected>Choose interest</option>
//                <option value="1">One</option>
//                <option value="2">Two</option>
//                <option value="3">Three</option>
//                </select>
//             </div>
//             <div className='row'>
//             <button className='aboutbtn'> + Add More</button>
//             </div>

//             <div className='row'>
//                 <select className="form-select aboutmain2" aria-label="Default select example">
//                 <option selected>Choose language</option>
//                <option value="1">One</option>
//                <option value="2">Two</option>
//                <option value="3">Three</option>
//                </select>
//             </div>
//             <div className='row'>
//             <button className='aboutbtn'> + Add More</button>
//             </div>
//             </div>
//             </form>
//             </div>
//             <div className='col-md-4'>
//               <img src={Imagesecimg} className='aboutsecimg'></img>
//             </div>

//           </div>
//           <div className='row'>
//                <div className='col-md-8 btnposition'><button className='aboutbtn'> SKIP <span className='btnspan'><GoChevronRight size={16} /><GoChevronRight size={16}/></span></button></div>
//                <div className='col-md-4'>
//                <button className='aboutbtn1'> CONTINUE <span className='arow'><GoArrowRight  size={24}/></span></button>
//                </div>
//           </div>

//           {/* //camera// */}
//           <div>

//          <Webcam
//          ref={webcamRef}
//          audio={false}
//          screenshotFormat='image/jpeg'
//          videoConstraints={videoConstraints}
//          onUserMedia={onUserMedia}
//          mirrored={true}
//          />
//          {/* <button onClick={capturePhoto}>Capture </button> */}
//          <button onClick={()=>setUrl(null)}>Refresh</button>
//         {/* {url &&(
//             <div>
//                 <img src={url} alt="Screenshot" />
//             </div>
//         )
//         } */}
//           </div>
//              {/* //camera// */}
//       </div>
//       </div>
//     </div>
//     </> 
//   )
// }

// export default About





import React, { useRef, useState } from 'react'
import Webcam from 'react-webcam'
import "./About.css"
import Imagesecimg from '../../assets/Images/Group513798.png'
import { RxCross2 } from "react-icons/rx";
import { GoArrowRight } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { IoCameraOutline } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import MultiSelect from 'react-multiple-select-dropdown-lite'
import 'react-multiple-select-dropdown-lite/dist/index.css'

// camera//
// const videoConstraints = {
//   facingMode: 'enviroment'
// }
//camera

const About = () => {
  const [About, setAbout] = useState('')
  const [username, setUsername] = useState('')
  const [image, setImage] = useState();


  // dropdown value start end//

  const [value, setvalue] = useState(0)

  console.log(value.length);

  const handleOnchange = val => {
    const newval = val.split(',');
    console.log(newval, '..val')
    setvalue(newval)

  }
  const options = [
    { label: "Lorem Ipsum", value: 'Lorem Ipsum' },
    { label: "Sed auctor", value: 'Sed auctor' },
    { label: "Phasellus", value: 'Phasellus' },
    { label: "Proinet velit", value: 'Proinet velit' },
    { label: "Vivamus", value: 'Vivamus' },
  ]

  // dropdown//
  // dropdown value start end//

  const [value1, setvalue1] = useState(0)
  console.log(value1.length);

  const handleOnchange1 = val => {
    const newval = val.split(',');
    console.log(newval, '..val')
    setvalue1(newval)
  }
  const options1 = [
    { label: "English", value: 'English' },
    { label: "Spanish", value: 'Spanish' },
    { label: "French", value: 'French' },
    { label: "Hindi", value: 'Hindi' },
  ]

  // dropdown//

  // const  handleDropdownChange1 = (event) => {
  // 	setSelectedOption1(event.target.value);
  // };
  // const handleDropdownChange2=(event)=>{
  //  setSelectedOption2(event.target.value);
  // }
  const handleClick = () => {
    console.log(url)
    console.log(image)
    console.log(username);
    console.log(About);
  }

  //camera//
  const webcamRef = useRef(null)
  const [url, setUrl] = useState(null)
  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot()
    setUrl(imageSrc)
  }, [webcamRef])

  const onUserMedia = (e) => {
    console.log(e)
  }


  // camera//






  return (
    <>


      <div className='container about_div'>
        <div className='row aboutmainpm'>


          <div className="row felxdiv">
            <div className="col-md-11 abouttext">
              <p className="aboutsubdivtext">About Yourself</p>
            </div>
            <div className="col-md-1 abouttexticon">
              <RxCross2 color="#FFFFFF" size={24} />
            </div>
          </div>
          <div className="row ">
            <p className="aboutsubdivtext1">Some instructions to make the user understand what is the context of the pop-up</p>
          </div>


          {/* <div className='row ptextcolor'>
            <p className='abouttext1'>About Yourself</p>
            <p className='abouttext2'>Some instructions to make the user understand what is the context of the pop-up</p>
          </div> */}
          <form>
            <div className='row '>
              <div className='col-md-8 formlr'>
                <form className='formborder'>
                  <div className='row'>
                    <p className='ptext'>Profile Picture</p>
                  </div>


                  <div className='row formpadding'>
                    <div >
                      {url && (
                        <div>
                          <img src={url} alt="Screenshot" className='aboutimg' />
                        </div>
                      )
                      }
                    </div>

                    <div className='row '>
                      <div className='col-md-6 aboutbtn'>
                        <button type="button" className="form-control aboutmain" id="exampleFormControlInput1" onClick={capturePhoto} >
                          OPEN CAMERA <IoCameraOutline size={16} className='btninput' />
                        </button>
                      </div>
                      <div className='col-md-6 aboutbtn'>
                        <div className='row aboutinput'>
                          <div className='imglable'>
                            <label htmlFor='imgs'>UPLOAD FROM GALLERY <GrGallery className='btninput' /></label>
                          </div>
                          <input type='file' id='imgs' onChange={(e) => setImage(e.target.files)} ></input>
                        </div>
                        {/* <button type="button" className="form-control aboutmain" id="exampleFormControlInput1">
             UPLOAD FROM GALLERY <GrGallery className='btninput'/>
             </button> */}
                      </div>

                    </div>
                    {/* <div className='row aboutinput'>
              <div className='imglable'>
                <label htmlFor='imgs'>UPLOAD FROM GALLERY</label>
              </div>
               <input type='file' id='imgs' onChange={(e)=>setImage(e.target.value)} ></input>
             </div> */}

                    <div className='row'>
                      <label className='lablecolor'>Headline</label>
                      <input type="name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-control aboutmain1 inputheight" id="exampleFormControlInput1" placeholder="Enter name" />
                    </div>

                    <div className='row'>
                      <label className='lablecolor'>Bio (100 words)</label>
                      <input type="text" className="form-control aboutmain1 aboutwidth" id="exampleFormControlInput1"
                        value={About}
                        placeholder="Tell us about yourdelf"
                        onChange={(e) => setAbout(e.target.value)} />
                    </div>

                    {/* <div className='row'>
                    <select value={selectedOption1} onChange={(e) => setSelectedOption1(e.target.value)} className="form-select aboutmain2" aria-label="Default select example">
                      <option selected>Choose interest</option>
                      <option value="one">One</option>
                      <option value="two">Two</option>
                      <option value="three">Three</option>
                    </select>
                  </div> */}

                    {/* // dropdown value start start// */}
                    {/* <div className="preview-values">
            <h4>Values</h4>
            {value}
          </div> */}
                    <div >
                      <label className='lablecolor1'>Interest (Maximum: {value.length ? value.length : '0'}/5)</label>
                      <MultiSelect
                        onChange={(i) => handleOnchange(i)}
                        options={options}
                        placeholder="Choose interest"
                        className='dropdownitem'
                      />
                    </div>

                    {/* // dropdown value start end// */}
                    <div className='row'>
                      <button className='aboutbtn2'> + Add More</button>
                    </div>

                    {/* <div className='row'>
                    <select value={selectedOption2} onChange={(e) => setSelectedOption2(e.target.value)} className="form-select aboutmain2" aria-label="Default select example">
                      <option selected>Choose language</option>
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                      <option value="Hindi">Hindi</option>
                    </select>
                  </div> */}

                    {/* // dropdown value start start// */}
                    {/* <div className="preview-values">
            <h4>Values</h4>
            {value}
          </div> */}
                    <div>
                      <label className='lablecolor1'>Languages you know (Maximum: {value1.length ? value1.length : '0'}/5)</label>
                      <div >
                        <MultiSelect
                          onChange={handleOnchange1}
                          options={options1}
                          placeholder="Choose languages"
                          className='dropdownitem'
                        />
                      </div>
                    </div>

                    {/* // dropdown value start end// */}
                    <div className='row'>
                      <button className='aboutbtn2'> + Add More</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className='col-md-4'>
                <img src={Imagesecimg} className='aboutsecimg'></img>
              </div>

            </div>
          </form>

          <div className='row pbottom'>

            <div className='col-md-8 btnposition'><button className='aboutbtn2'> SKIP TO HOME <span ><GoChevronRight size={16} className='btnspan' /><GoChevronRight size={16} className='btnspan1' /></span></button><button className='aboutbtn2'> SKIP <span className='btnspan2'><GoChevronRight size={16} className='btnspan' /><GoChevronRight size={16} className='btnspan1' /></span></button></div>
            <div className='col-md-4'>
              <button className='aboutbtn1' onClick={handleClick}> SAVE & CONTINUE <span className='arow'><GoArrowRight size={22} /></span></button>
            </div>
          </div>



          {/* //camera// */}
          <div className='webnone'>

            <Webcam
              ref={webcamRef}
              audio={false}
              screenshotFormat='image/jpeg'
              //  videoConstraints={videoConstraints}
              onUserMedia={onUserMedia}
              mirrored={false}
            />
            {/* <button onClick={()=>setUrl(null)}>Refresh</button> */}
          </div>
          {/* //camera// */}
        </div>
      </div>


    </>
  )
}

export default About
