import { useState} from "react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    const [menu,setMenu] = useState(false);

    const handleMenu=()=>{
        setMenu(!menu);
    }

    return (
        <div className="bg-[#fff] fixed z-[5] w-full h-max py-1 flex items-center justify-center md:justify-between font-[Comfortaa] sm:px-5 md:px-10 shadow-md shadow-[#00000015]">
            <div>
                <img src={Logo} alt="Logo" className="w-40 sm:h-14 pl-0 md:-pl-5"/>
            </div>
            <div className="absolute z-[7] left-5 block md:hidden" onClick={handleMenu}>
                <FontAwesomeIcon icon={menu?faTimes:faBars} className="text-[#014783] text-lg"/>
            </div>
            <div className={`flex items-start md:items-center justify-center flex-col md:flex-row text-sm font-black gap-5 w-max h-screen bg-white px-10 md:px-0 ${!menu?"-left-60 md:left-0":"left-0"} md:bg-transparent transition-all duration-500 top-0 md:top-1 md:right-0 md:h-auto shadow-xl md:shadow-transparent shadow-[#00000034] text-[#014783] z-[6] absolute md:relative`}>
                <Link className="px-5 md:px-0 py-1 text-center w-full md:w-auto hover:text-[#fe3032]" to="/#home" onClick={handleMenu}>Home</Link>
                <Link className="px-5 md:px-0 py-1 text-center w-full md:w-auto hover:text-[#fe3032]" to="/#about" onClick={handleMenu}>About</Link>
                <Link className="px-5 md:px-0 py-1 text-center w-full md:w-auto hover:text-[#fe3032]" to="/#services" onClick={handleMenu}>Services</Link>
                <Link className="px-5 md:px-0 py-1 text-center w-full md:w-auto hover:text-[#fe3032]" to="/#whyus" onClick={handleMenu}>WhyUs</Link>
                {/* <Link className="px-5 md:px-0 py-1 text-center w-full md:w-auto hover:text-[#fe3032]" to="/#gallery" onClick={handleMenu}>Gallery</Link> */}
                <Link className="px-5 md:px-0 py-1 text-center w-full md:w-auto hover:text-[#fe3032]" to="/#contact" onClick={handleMenu}>Contact US</Link>
            </div>
        </div>
    );
}

export default NavBar;
