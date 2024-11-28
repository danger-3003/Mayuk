import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { faUsers, faLightbulb, faHandshake, faHandsHolding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

    return (
        <div
            ref={whySection}
            className="bg-[#014783] pt-20 sm:px-7 md:px-10 py-10 font-[Comfortaa] flex items-center justify-center flex-col w-full"
        >
            <div>
                <p className="font-[Montserrat] text-white font-bold text-2xl sm:text-3xl md:text-4xl mb-10">
                    Why Choose Us?
                </p>
            </div>
            <div className="flex items-center justify-center flex-wrap gap-5">
                <div className="border-[#44a8ff] hover:border-[#fff] border-2 relative w-60 px-5 py-2 text-sm text-[#fff] group transition-all duration-300">
                    <div className="bg-[#014783] w-10 absolute -top-3 left-3 flex items-center justify-center group-hover:scale-125 transition-all duration-300">
                        <FontAwesomeIcon icon={faUsers} className="text-[#fff] text-xl" />
                    </div>
                    <p className="mt-5 font-[Montserrat] font-bold mb-3 text-base">Experienced Team</p>
                    <p className="text-[#44a8ff] group-hover:text-[#fff] transition-all duration-300">Certified professionals with decades of
                    combined expertise.</p>
                </div>
                <div className="border-[#44a8ff] hover:border-[#fff] border-2 relative w-60 px-5 py-2 text-sm text-[#fff] group transition-all duration-300">
                    <div className="bg-[#014783] w-10 absolute -top-3 left-3 flex items-center justify-center group-hover:scale-125 transition-all duration-300">
                        <FontAwesomeIcon icon={faLightbulb} className="text-[#fff] text-xl" />
                    </div>
                    <p className="mt-5 font-[Montserrat] font-bold mb-3 text-base">Customized Solutions</p>
                    <p className="text-[#44a8ff] group-hover:text-[#fff] transition-all duration-300">Tailored to meet the specific needs of each
                    project.</p>
                </div>
                <div className="border-[#44a8ff] hover:border-[#fff] border-2 relative w-60 px-5 py-2 text-sm text-[#fff] group transition-all duration-300">
                    <div className="bg-[#014783] w-10 absolute -top-3 left-3 flex items-center justify-center group-hover:scale-125 transition-all duration-300">
                        <FontAwesomeIcon icon={faHandshake} className="text-[#fff] text-xl" />
                    </div>
                    <p className="mt-5 font-[Montserrat] font-bold mb-3 text-base">On-Time Delivery</p>
                    <p className="text-[#44a8ff] group-hover:text-[#fff] transition-all duration-300">Commitment to project timelines without
                    compromising on quality.</p>
                </div>
                <div className="border-[#44a8ff] hover:border-[#fff] border-2 relative w-60 px-5 py-2 text-sm text-[#fff] group transition-all duration-300">
                    <div className="bg-[#014783] w-10 absolute -top-3 left-3 flex items-center justify-center group-hover:scale-125 transition-all duration-300">
                        <FontAwesomeIcon icon={faHandsHolding} className="text-[#fff] text-xl" />
                    </div>
                    <p className="mt-5 font-[Montserrat] font-bold mb-3 text-base">Safety Standards</p>
                    <p className="text-[#44a8ff] group-hover:text-[#fff] transition-all duration-300">Adherence to national and international
                    safety protocols.</p>
                </div>

            </div>
        </div>
    );
}

export default WhyUs;
