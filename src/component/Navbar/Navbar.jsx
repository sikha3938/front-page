import "./Navbar.css"
function  Navbar(){

    return(

       <div className="navbar">
        <div className="navlogo">EV-olution</div>
        <div className="navmenu">
            <ul>
                <li>home</li>
                <li>explore</li>
                <li>about</li>
                <li className="nav-contact">contact</li>
            </ul>
        </div>
       </div>
    )
 }
 export default Navbar;