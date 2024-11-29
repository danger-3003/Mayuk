import {useEffect} from "react";
import AOS from "aos"
import "aos/dist/aos.css"
import Image from "../assets/Services/CivilContracting.png";

function CivilContracting() {
    useEffect(()=>{
        AOS.init({duration:1000});
        AOS.refresh();
    });
    return (
        <div className="flex items-center justify-center flex-col">
            <div data-aos="fade-up" className="font-[Montserrat] font-semibold text-[#fe3032] text-xl sm:text-2xl md:text-3xl my-5">Civil Contracting</div>
            <div className="flex items-center justify-center flex-col xl:flex-row gap-5 py-10">
                <img  data-aos="fade-right" src={Image} alt="CivilContracting" className="w-60 sm:w-80 lg:w-[20rem] xl:w-[30rem]"/>
                <div className="flex items-start justify-center flex-wrap gap-5 sm:px-10 lg:w-[43rem]">
                    <div data-aos="fade-left" className="w-60 lg:w-72 bg-slate-100 hover:border-none hover:bg-[#014783] group hover:text-white px-3 py-1 h-36 lg:h-44 rounded-2xl transition-all duration-300">
                        <p className="text-[#fe3032] my-3 text-lg font-semibold font-[Montserrat] group-hover:text-cyan-300">Industrial Construction</p>
                        <p className="text-sm lg:text-base">From foundations to finishing, we build facilities designed to meet industrial standards</p>
                    </div>
                    <div data-aos="fade-left" className="w-60 lg:w-72 bg-slate-100 hover:border-none hover:bg-[#014783] group hover:text-white px-3 py-1 h-36 lg:h-44 rounded-2xl transition-all duration-300">
                        <p className="text-[#fe3032] my-3 text-lg font-semibold font-[Montserrat] group-hover:text-cyan-300">Roads and Pavements</p>
                        <p className="text-sm lg:text-base">Durable solutions for industrial and residential access.</p>
                    </div>
                    <div data-aos="fade-left" className="w-60 lg:w-72 bg-slate-100 hover:border-none hover:bg-[#014783] group hover:text-white px-3 py-1 h-36 lg:h-44 rounded-2xl transition-all duration-300">
                        <p className="text-[#fe3032] my-3 text-lg font-semibold font-[Montserrat] group-hover:text-cyan-300">Apartment Complexes</p>
                        <p className="text-sm lg:text-base">Structurally sound, aesthetically pleasing, and cost-efficient residential buildings.</p>
                    </div>
                    <div data-aos="fade-left" className="w-60 lg:w-72 bg-slate-100 hover:border-none hover:bg-[#014783] group hover:text-white px-3 py-1 h-36 lg:h-44 rounded-2xl transition-all duration-300">
                        <p className="text-[#fe3032] my-3 text-lg font-semibold font-[Montserrat] group-hover:text-cyan-300">Renovation & Repair</p>
                        <p className="text-sm lg:text-base">Comprehensive civil upgrades, retrofitting, and structural repairs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CivilContracting;
