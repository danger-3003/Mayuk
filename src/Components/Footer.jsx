import React from "react";
import Logo from "../assets/Logo.svg";
import Bg from "../assets/Footer/Footer.jpeg";
import { Link } from "react-router-dom";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
    faMapLocation,
    faMobileAlt,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <div
            className="text-[#014783] font-[Comfortaa] font-black py-10 px-5 md:px-7 lg:px-10"
            style={{
                background: `linear-gradient(to bottom,rgba(207, 250,254,0.7),rgba(207, 250,254,0.7)),url(${Bg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="flex flex-wrap flex-row items-center justify-center mb-10 gap-4 font-black">
                <Link className="text-center hover:text-[#fe3032]" to="/#home">
                    Home
                </Link>
                <Link className="text-center hover:text-[#fe3032]" to="/#about">
                    About
                </Link>
                <Link
                    className="text-center hover:text-[#fe3032]"
                    to="/#services"
                >
                    Services
                </Link>
                <Link className="text-center hover:text-[#fe3032]" to="/#whyus">
                    WhyUs
                </Link>
                <Link
                    className="text-center hover:text-[#fe3032]"
                    to="/#gallery"
                >
                    Gallery
                </Link>
                <Link
                    className="text-center hover:text-[#fe3032]"
                    to="/#contact"
                >
                    Contact US
                </Link>
            </div>
            <div className="flex items-center justify-center flex-col sm:flex-row sm:gap-[8rem] md:gap-[17rem] lg:gap-[25rem] xl:gap-[30rem]">
                <div>
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-56 sm:w-44 md:w-44 lg:w-60"
                    />
                </div>
                <div className="w-[16rem] mt-5 sm:mt-0">
                    <p className="text-[#fe3032] font-semibold text-xl sm:text-2xl my-2 text-center sm:text-left">
                        Contact Us
                    </p>
                    <div className="flex items-start justify-center text-sm sm:text-base flex-col gap-2">
                        <div className="text-center sm:text-left">
                            <FontAwesomeIcon
                                icon={faMapLocation}
                                className=" mr-3"
                            />
                            <a
                                href="https://maps.app.goo.gl/jRJvMaCVj99bm3nd6"
                                target="_blank"
                            >
                                D.NO 38-19-10/2/14, Flat NO 504, Varahalureddy
                                Hights, Jyothi Nagar,104 Area, Visakhapatnam-
                                530018
                            </a>
                        </div>
                        <div className="text-center sm:text-left w-full">
                            <FontAwesomeIcon
                                icon={faWhatsapp}
                                className="text-green-800 mr-3"
                            />
                            <a
                                href="https://api.whatsapp.com/send?phone=964246489"
                                target="_blank"
                            >
                                +91 964246489
                            </a>
                        </div>
                        <div className="text-center sm:text-left w-full">
                            <FontAwesomeIcon
                                icon={faMobileAlt}
                                className=" mr-3"
                            />
                            <a href="tel:964246489">+91 964246489</a>
                        </div>
                        <div className="text-center sm:text-left w-full flex items-center justify-center">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className=" mr-3"
                            />
                            <a href="mailto:mayuk.enginfra@gmail.com">mayuk.enginfra@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
