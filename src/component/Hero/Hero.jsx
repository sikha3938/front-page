import "./Hero.css"
import React from "react"
import play from "../../images/play.jpg"
import pause from "../../images/pause1.png"


function  Hero({herodata,herocount,setHeroCount,playstatus,setPlayStatus}){

    return(

       <div className="hero">

       <div className="text">
        <p>{herodata.text1}</p>
        <p>{herodata.text2}</p>
       </div>
       <div className="explore">

        <p>Explore your bussiness</p>
        <img src="" alt="" />
       </div>

       <div className="dot">
    <ul>

       <li onClick={()=>setHeroCount(0)} className={herocount==0?"dot-white.orange":"dot-white"}></li>
       <li onClick={()=>setHeroCount(1)} className={herocount==1?"dot-white.orange":"dot-white"}></li>
       <li onClick={()=>setHeroCount(2)} className={herocount==2?"dot-white.orange":"dot-white"}></li>

    </ul>
    </div>
    <div className="play">
        <img  onClick={()=>setPlayStatus(!playstatus )}  src={playstatus?pause:play} alt="play/pause" />
        <p>see the video</p>
    </div>


       </div>
    )
 }
 export default Hero;

