import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Civil from "../Components/CivilContracting";
import Mech from "../Components/MechanicalContracting";
import Electrical from "../Components/ElectricalContracting";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
    const location=useLocation();
    const serviceSection=useRef(null);
    const [isCivil, setIsCivil] = useState(true);
    const [isMechanical, setIsMechanical] = useState(false);
    const [isElectrical, setIsElectrical] = useState(false);

    useEffect(()=>{
        if(location.hash==="#services" && serviceSection.current)
        {
            serviceSection.current.scrollIntoView({behavior:"smooth"});
        }
    },[location]);

    const handleCivil=()=>{
        setIsCivil(true);
        setIsElectrical(false);
        setIsMechanical(false);
    };
    const handleMechanical=()=>{
        setIsCivil(false);
        setIsElectrical(false);
        setIsMechanical(true);
    };
    const handleElectrical=()=>{
        setIsCivil(false);
        setIsElectrical(true);
        setIsMechanical(false);
    };

    return (
        <>
            <div ref={serviceSection} className="py-10 md:pb-10 pt-20 sm:px-7 md:px-10 flex items-center justify-center flex-col font-[Comfortaa]">
                <div data-aos="fade-up" className="font-[Montserrat] font-bold text-2xl md:text-3xl lg:text-4xl text-[#014783] ">Our Services</div>
                <div data-aos="fade-up" className="flex items-center justify-between flex-row text-[0.7rem] sm:text-sm mt-6 sm:mt-10 md:text-base w-60 sm:w-[20rem] md:w-[25rem]">
                    <div className={`w-min text-center hover:cursor-pointer ${isCivil?"text-[#014783] font-black":"text-gray-500"}`} onClick={handleCivil}>
                        <p>Civil Contracting</p>
                    </div>
                    <div className={`w-min text-center hover:cursor-pointer ${isElectrical?"text-[#014783] font-black":"text-gray-500"}`} onClick={handleElectrical}>
                        <p>Electrical Contracting</p>
                    </div>
                    <div className={`w-min text-center hover:cursor-pointer ${isMechanical?"text-[#014783] font-black":"text-gray-500"}`} onClick={handleMechanical}>
                        <p>Mechanical Contracting</p>
                    </div>
                </div>
                <div data-aos="fade-up" className="flex items-center justify-around relative my-5 w-60 sm:w-[20rem] md:w-[25rem]">
                    <div onClick={handleCivil} className={`${isCivil?"bg-[#8d8dff] shadow-md shadow-[#00000081]":"bg-gray-300"} relative z-[2] rounded-full w-5 h-5 flex items-center justify-center hover:cursor-pointer transition-all duration-500`}>
                        <div className={`${isCivil?"bg-[blue]":"bg-gray-400"} w-2 h-2 rounded-full transition-all duration-500`}></div>
                    </div>
                    <div onClick={handleElectrical} className={`${isElectrical?"bg-[#8d8dff] shadow-md shadow-[#00000081]":"bg-gray-300"} relative z-[2] rounded-full w-5 h-5 flex items-center justify-center hover:cursor-pointer transition-all duration-500`}>
                        <div className={`${isElectrical?"bg-[blue]":"bg-gray-400"} w-2 h-2 rounded-full transition-all duration-500`}></div>
                    </div>
                    <div onClick={handleMechanical} className={`${isMechanical?"bg-[#8d8dff] shadow-md shadow-[#00000081]":"bg-gray-300"} relative z-[2] rounded-full w-5 h-5 flex items-center justify-center hover:cursor-pointer transition-all duration-500`}>
                        <div className={`${isMechanical?"bg-[blue]":"bg-gray-400"} w-2 h-2 rounded-full transition-all duration-500`}></div>
                    </div>
                    <div className="absolute bg-gray-300 h-0.5 w-full rounded-full"></div>
                </div>
                <div className="flex items-center justify-center flex-col">
                    {isCivil &&
                        <Civil />
                    }
                    {isElectrical &&
                        <Electrical />
                    }
                    {isMechanical &&
                        <Mech />
                    }
                </div>
            </div>
        </>
    );
}

export default Services;
