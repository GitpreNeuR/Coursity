import React,{useEffect,useRef} from 'react'
import Lottie from 'lottie-web'


 const AsAdmin=()=> {

    const container=useRef(null)

    useEffect(()=>{
        Lottie.loadAnimation({
            container:container.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData:require("../JSON/AsAdmin.json")    

        })
    },[])

    





   

    
    



  return (
    <>
    <div className="player-container" ref={container} style={{ transform:`scale(1)`,position:`relative`}}></div>



    </>
  )

}
 
 

export default AsAdmin

