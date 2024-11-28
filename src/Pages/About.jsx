import React, { useEffect, useRef } from "react";
import AboutImage from "../assets/Home/About.jpg";
import { useLocation, Link } from "react-router-dom";

function About() {
    const location = useLocation();
    const aboutSection = useRef(null);

    useEffect(()=>{
        if(location.hash==="#about" && aboutSection.current)
        {
            aboutSection.current.scrollIntoView({behavior:"smooth"})
        }
    },[location]);

    return (
        <div ref={aboutSection} className="flex items-center justify-center flex-wrap sm:flex-row-reverse px-5 sm:px-7 md:px-10 pb-5 md:pb-10 pt-20 gap-5 font-[Comfortaa]">
            <div className="w-[30rem] sm:w-[20rem] md:w-[25rem] lg:w-[30rem] xl:w-[40rem] flex items-center sm:items-end justify-center flex-col">
                <p className="font-[Montserrat] font-bold text-[#014783] text-2xl md:text-3xl lg:text-4xl text-center sm:text-right">About</p>
                <p className="my-5 text-sm md:text-base text-center sm:text-right">
                    At <span className="font-extrabold text-[#fe3032]">MAYUK Engineering & Infrastructures</span> , we specialize in
                    delivering high-quality contracting services tailored to
                    meet the needs of industries and apartments. With a strong
                    foundation in civil, electrical, and mechanical engineering,
                    we bring expertise, innovation, and commitment to every
                    project we undertake.
                </p>
                <div className="mt-5 md:mt-10">
                    <Link to="/#services" className="bg-[#014783] text-[#fff] font-[Montserrat] font-bold px-5 py-2 rounded-md">Explore</Link>
                </div>
            </div>
            <div>
                <img src={AboutImage} alt="About" className="w-[20rem] sm:w-[15rem] md:w-[15rem] lg:w-[20rem] xl:w-[25rem]"/>
            </div>
        </div>
    );
}

export default About;
