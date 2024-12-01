import React ,{ useState } from "react";
import Background from "./component/Background/Background.jsx";
import Navbar from "./component/Navbar/Navbar.jsx";
import Hero from "./component/Hero/Hero.jsx";
const App = ()=>{

let herodata=[
    
    {  text1:"Dive into", text2:" what you love"},
    {  text1:"Indulge", text2:" Your passion"},
    {  text1:" Give in to", text2:"Your passion"}
]
const[herocount,setHeroCount]=useState("2")
const[playstatus,setPlayStatus]=useState(true)
    return(
        <div>
<Background  herocount={herocount} playstatus={playstatus}/>
<Navbar />
<Hero 
 herodata={herodata[herocount]} 
 herocount={herocount}
 setHeroCount={setHeroCount}
 playstatus={playstatus}
 setPlayStatus={setPlayStatus}
/>
        </div>
    )
}
export default App;