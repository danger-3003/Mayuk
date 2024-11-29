import { useEffect, useState, useRef } from "react";
import Bg from "../assets/Home/Header.jpg";
import Hanger from "../assets/Home/HangerLong.png";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import AOS from "aos"
import "aos/dist/aos.css"

function Home() {
    const [bgPositionY, setBgPositionY] = useState(0);
    const homeSection=useRef(null);
    const location=useLocation();

    const handleScroll = () => {
        const scrollY = window.scrollY;
        setBgPositionY(scrollY * 0.3); // Adjust the multiplier to control the speed
    };

    useEffect(()=>{
        if(location.hash==="#home" && homeSection.current)
        {
            homeSection.current.scrollIntoView({behavior:"smooth"});
        }
    },[location]);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    useEffect(()=>{
        AOS.init({duration:1000})
        AOS.refresh();
    });

    return (
        <div
            ref={homeSection}
            className="md:pb-10 pt-20 px-5 md:px-7 lg:px-10</span> flex items-center justify-center flex-col font-[Montserrat]"
            style={{
                background: `linear-gradient(to bottom,rgba(207,250,254,0.6),rgba(207,250,254,0.3)), url(${Bg})`,
                backgroundAttachment: "fixed",
                backgroundPositionX:"left",
                backgroundPositionY: `-${bgPositionY}px`, // Use state for vertical position
                backgroundSize: "cover",
            }}
        >
            <div className="relative flex items-center justify-center text-center flex-col w-full h-full py-28">
                <p data-aos="fade-up" className="text-[#014783] relative z-[2] font-bold text-2xl sm:text-3xl md:text-4xl text-center tracking-[0.4rem]">Welcome</p>
                <p data-aos="fade-up" className="text-[#fe3032] relative z-[2] font-bold text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] tracking-[0.8rem] sm:tracking-[1rem] md:tracking-[1.5rem] -mr-5">MAYUK</p>
                <p data-aos="fade-up" className="text-lg relative z-[2] sm:text-xl md:text-2xl font-medium text-[#014783] -mt-4">Engineering & Infrastructures</p>
                <p data-aos="fade-up" className="text-base relative z-[2] sm:text-lg md:text-2xl text-[#fe3032] font-[Comfortaa] mt-5 font-bold">Your Trusted Partner in <span className="text-[#014783]">Civil, Electrical,</span> and <span className="text-[#014783]">Mechanical Contracting.</span></p>
                <div data-aos="zoom-out" className="mt-10">
                    <Link to="/#services" className="border-2 border-[#014783] text-[#014783] font-bold hover:font-medium rounded-md px-4 py-1 hover:bg-[#014783] hover:text-[#fff] transition-all duration-500">Explore</Link>
                </div>
                <img src={Hanger} alt={Hanger} className="absolute -top-10 right-[85%] md:right-0 h-[110%] md:h-[115%] opacity-75" style={{filter:"drop-shadow(0px 0px 10px #00000081)"}}/>
            </div>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=8247092491" className="bg-emerald-500 flex items-center justify-center p-2 rounded-full h-10 w-10 fixed bottom-10 right-5 sm:right-10 z-[10] shadow-md shadow-[#00000077] animate-bounce">
                <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-white"/>
            </a>
        </div>
    );
}

export default Home;
