import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { faUsers, faLightbulb, faHandshake, faHandsHolding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos"
import "aos/dist/aos.css"
import Consultation from "../assets/WhyUs/Consultation.jpg"
import Design from "../assets/WhyUs/Design.jpg"
import Execution from "../assets/WhyUs/Execution.jpg"
import Delivery from "../assets/WhyUs/Delivery.jpg"

// #fe3032-red
// #014783
function WhyUs() {
    const location = useLocation();
    const whySection = useRef(null);

    useEffect(() => {
        if (location.hash === "#whyus" && whySection.current) {
            whySection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    useEffect(()=>{
        AOS.init({duration:1000});
        AOS.refresh();
    });

    return (
        <>
            <div
                ref={whySection}
                className="bg-[#014783] pt-20 sm:px-7 md:px-10 py-10 font-[Comfortaa] flex items-center justify-center flex-col w-full"
            >
                <div data-aos="fade-up">
                    <p className="font-[Montserrat] text-white font-bold text-2xl sm:text-3xl md:text-4xl mb-10">
                        Why Choose Us?
                    </p>
                </div>
                <div className="flex items-center justify-center flex-wrap gap-5 mb-10">
                    <div data-aos="fade-left" className="border-[#44a8ff] hover:border-[#fff] border-2 relative w-60 px-5 py-2 text-sm text-[#fff] group transition-all duration-300">
                        <div className="bg-[#014783] w-10 absolute -top-3 left-3 flex items-center justify-center group-hover:scale-125 transition-all duration-300">
                            <FontAwesomeIcon icon={faUsers} className="text-[#fff] text-xl" />
                        </div>
                        <p className="mt-5 font-[Montserrat] font-bold mb-3 text-base">Experienced Team</p>
                        <p className="text-[#44a8ff] group-hover:text-[#fff] transition-all duration-300">Certified professionals with decades of
                        combined expertise.</p>
                    </div>
                    <div data-aos="fade-left" className="border-[#44a8ff] hover:border-[#fff] border-2 relative w-60 px-5 py-2 text-sm text-[#fff] group transition-all duration-300">
                        <div className="bg-[#014783] w-10 absolute -top-3 left-3 flex items-center justify-center group-hover:scale-125 transition-all duration-300">
                            <FontAwesomeIcon icon={faLightbulb} className="text-[#fff] text-xl" />
                        </div>
                        <p className="mt-5 font-[Montserrat] font-bold mb-3 text-base">Customized Solutions</p>
                        <p className="text-[#44a8ff] group-hover:text-[#fff] transition-all duration-300">Tailored to meet the specific needs of each
                        project.</p>
                    </div>
                    <div data-aos="fade-left" className="border-[#44a8ff] hover:border-[#fff] border-2 relative w-60 px-5 py-2 text-sm text-[#fff] group transition-all duration-300">
                        <div className="bg-[#014783] w-10 absolute -top-3 left-3 flex items-center justify-center group-hover:scale-125 transition-all duration-300">
                            <FontAwesomeIcon icon={faHandshake} className="text-[#fff] text-xl" />
                        </div>
                        <p className="mt-5 font-[Montserrat] font-bold mb-3 text-base">On-Time Delivery</p>
                        <p className="text-[#44a8ff] group-hover:text-[#fff] transition-all duration-300">Commitment to project timelines without
                        compromising on quality.</p>
                    </div>
                    <div data-aos="fade-left" className="border-[#44a8ff] hover:border-[#fff] border-2 relative w-60 px-5 py-2 text-sm text-[#fff] group transition-all duration-300">
                        <div className="bg-[#014783] w-10 absolute -top-3 left-3 flex items-center justify-center group-hover:scale-125 transition-all duration-300">
                            <FontAwesomeIcon icon={faHandsHolding} className="text-[#fff] text-xl" />
                        </div>
                        <p className="mt-5 font-[Montserrat] font-bold mb-3 text-base">Safety Standards</p>
                        <p className="text-[#44a8ff] group-hover:text-[#fff] transition-all duration-300">Adherence to national and international
                        safety protocols.</p>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-col w-auto sm:w-[40rem]">
                    <p data-aos="fade-up" className="font-[Montserrat] font-semibold text-xl sm:text-2xl md:text-3xl text-white mb-5">Industries We Serve</p>
                    <div className="flex items-center justify-center flex-wrap gap-5">
                        <div data-aos="fade-right" className="flex items-center justify-start flex-row bg-white rounded-full p-1 w-60 sm:w-72">
                            <div className="flex items-center justify-center bg-[#fe3032] w-10 h-10 rounded-full"><p className="text-white font-bold">1</p></div>
                            <div className="font-bold text-[#014783] pl-2">Manufacturing Plants</div>
                        </div>
                        <div data-aos="fade-right" className="flex items-center justify-start flex-row bg-white rounded-full p-1 w-60 sm:w-72">
                            <div className="flex items-center justify-center bg-[#fe3032] w-10 h-10 rounded-full"><p className="text-white font-bold">2</p></div>
                            <div className="font-bold text-[#014783] pl-2">Commercial Complexes</div>
                        </div>
                        <div data-aos="fade-right" className="flex items-center justify-start flex-row bg-white rounded-full p-1 w-60 sm:w-72">
                            <div className="flex items-center justify-center bg-[#fe3032] w-10 h-10 rounded-full"><p className="text-white font-bold">3</p></div>
                            <div className="font-bold text-[#014783] pl-2">Apartment Buildings</div>
                        </div>
                        <div data-aos="fade-right" className="flex items-center justify-start flex-row bg-white rounded-full p-1 w-60 sm:w-72">
                            <div className="flex items-center justify-center bg-[#fe3032] w-10 h-10 rounded-full"><p className="text-white font-bold">4</p></div>
                            <div className="font-bold text-[#014783] pl-2">Warehouses</div>
                        </div>
                        <div data-aos="fade-right" className="flex items-center justify-start flex-row bg-white rounded-full p-1 w-60 sm:w-72">
                            <div className="flex items-center justify-center bg-[#fe3032] w-10 h-10 rounded-full"><p className="text-white font-bold">5</p></div>
                            <div className="font-bold text-[#014783] pl-2">Educational Institutions</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-10 flex items-center justify-center flex-col ">
                <p data-aos="fade-up" className="font-[Montserrat] text-[#fe3032] font-bold text-2xl sm:text-3xl md:text-4xl mb-10">Our Process</p>
                <div className="flex items-center justify-center flex-wrap gap-5 w-auto md:w-[35rem]">
                    <div data-aos="fade-left" className="w-52 md:w-60 relative">
                        <div className="flex items-center justify-center absolute bg-[#fe3032] w-7 h-7 rounded-full">
                            <p className="text-white font-bold">1</p>
                        </div>
                        <img src={Consultation} alt="Consultation" className="shadow-lg shadow-[#0000003a] rounded-xl"/>
                        <p className="text-center text-xl font-bold mt-5">Consultation</p>
                    </div>
                    <div data-aos="fade-left" className="w-52 md:w-60 relative">
                        <div className="flex items-center justify-center absolute bg-[#fe3032] w-7 h-7 rounded-full">
                            <p className="text-white font-bold">2</p>
                        </div>
                        <img src={Design} alt="Design" className="shadow-lg shadow-[#0000003a] rounded-xl"/>
                        <p className="text-center text-xl font-bold mt-5">Design & Planning</p>
                    </div>
                    <div data-aos="fade-left" className="w-52 md:w-60 relative">
                        <div className="flex items-center justify-center absolute bg-[#fe3032] w-7 h-7 rounded-full">
                            <p className="text-white font-bold">3</p>
                        </div>
                        <img src={Execution} alt="Execution" className="shadow-lg shadow-[#0000003a] rounded-xl"/>
                        <p className="text-center text-xl font-bold mt-5">Execution</p>
                    </div>
                    <div data-aos="fade-left" className="w-52 md:w-60 relative">
                        <div className="flex items-center justify-center absolute bg-[#fe3032] w-7 h-7 rounded-full">
                            <p className="text-white font-bold">4</p>
                        </div>
                        <img src={Delivery} alt="Delivery" className="shadow-lg shadow-[#0000003a] rounded-xl"/>
                        <p className="text-center text-xl font-bold mt-5">Delivery</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WhyUs;
