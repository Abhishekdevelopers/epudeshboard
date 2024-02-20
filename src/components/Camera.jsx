import React,{useRef, useState} from 'react'
import Webcam from 'react-webcam'
const videoConstraints={
    with:540,
    facingMode:'enviroment'
}
const Camera=()=>{
    const webcamRef = useRef(null)
    const [url,setUrl]=useState(null)
    const capturePhoto=React.useCallback(async()=>{
     const imageSrc = webcamRef.current.getScreenshot()
     setUrl(imageSrc)
    },[webcamRef])

    const onUserMedia=(e)=>{
       console.log(e)
    }
    return(
        <>
         <Webcam
         ref={webcamRef}
         audio={false}
         screenshotFormat='image/jpeg'
         videoConstraints={videoConstraints}
         onUserMedia={onUserMedia}
         mirrored={true}
         />
         <button onClick={capturePhoto}>Capture </button>
         <button onClick={()=>setUrl(null)}>Refresh</button>
        {url &&(
            <div>
                <img src={url} alt="Screenshot" />
            </div>
        )
        }
        </>
    )
}
export default Camera;