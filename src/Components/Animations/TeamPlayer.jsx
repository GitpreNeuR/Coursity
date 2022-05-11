import React,{useEffect,useRef} from 'react'
import Lottie from 'lottie-web'


 const TeamPlayer=()=> {

    const container=useRef(null)

    useEffect(()=>{
        Lottie.loadAnimation({
            container:container.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData:require('../JSON/team.json')    

        })
    },[])

    





   

    
    



  return (
    <>
    <div className="team-container" ref={container}></div>



    </>
  )

}
 
 

export default TeamPlayer

