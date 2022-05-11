import React,{useEffect,useRef} from 'react'
import Lottie from 'lottie-web'


 const AsInstructor=()=> {

    const container=useRef(null)

    useEffect(()=>{
        Lottie.loadAnimation({
            container:container.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData:require("../JSON/AsInstructor.json")    

        })
    },[])

    





   

    
    



  return (
    <>
    <div className="player-container" ref={container} style={{ transform:`scale(1)`,position:`relative`,}}></div>



    </>
  )

}
 
 

export default AsInstructor

