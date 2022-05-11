import React,{useEffect,useRef} from 'react'
import Lottie from 'lottie-web'


 const PlayerOne=()=> {

    const container=useRef(null)

    useEffect(()=>{
        Lottie.loadAnimation({
            container:container.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData:require("../JSON/headerOne.json")    

        })
    },[])

    





   

    
    



  return (
    <>
    <div className="player-container" ref={container} style={{ transform:`scale(1)`,position:`relative`,}}></div>



    </>
  )

}
 
 

export default PlayerOne

