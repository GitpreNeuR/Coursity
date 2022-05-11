import React,{useEffect,useRef} from 'react'
import Lottie from 'lottie-web'


 const PlayerTwo=()=> {

    const container=useRef(null)

    useEffect(()=>{
        Lottie.loadAnimation({
            container:container.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData:require("../JSON/header2.json")    

        })
    },[])

    





   

    
    



  return (
    <>
    <div className="playerTwo-container" ref={container} style={{ transform:`scale(1)`,position:`relative`}}></div>



    </>
  )

}
 
 

export default PlayerTwo