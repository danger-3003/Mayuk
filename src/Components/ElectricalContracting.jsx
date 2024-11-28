import React from "react";
import Image from "../assets/Services/electricalContracting.png";

function CivilContracting() {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className="font-[Montserrat] font-semibold text-[#fe3032] text-xl sm:text-2xl md:text-3xl my-5">Electrical Contracting</div>
            <div className="flex items-center justify-center flex-col xl:flex-row gap-5 py-10">
                <img src={Image} alt="CivilContracting" className="w-60 sm:w-80 lg:w-[20rem] xl:w-[30rem]"/>
                <div className="flex items-start justify-center flex-wrap gap-5 sm:px-10 lg:w-[43rem]">
                    <div className="w-60 lg:w-72 bg-slate-100 hover:border-none hover:bg-[#ffa55b] group hover:text-[#014783] px-3 py-1 h-36 lg:h-44 rounded-2xl transition-all duration-300">
                        <p className="text-[#fe3032] my-3 text-lg font-semibold font-[Montserrat] group-hover:text-black">Industrial Wiring</p>
                        <p className="text-sm lg:text-base">Robust systems for manufacturing plants and factories.</p>
                    </div>
                    <div className="w-60 lg:w-72 bg-slate-100 hover:border-none hover:bg-[#ffa55b] group hover:text-[#014783] px-3 py-1 h-36 lg:h-44 rounded-2xl transition-all duration-300">
                        <p className="text-[#fe3032] my-3 text-lg font-semibold font-[Montserrat] group-hover:text-black">Apartment Electrification</p>
                        <p className="text-sm lg:text-base">Safe, efficient electrical installations for modern residential complexes.</p>
                    </div>
                    <div className="w-60 lg:w-72 bg-slate-100 hover:border-none hover:bg-[#ffa55b] group hover:text-[#014783] px-3 py-1 h-36 lg:h-44 rounded-2xl transition-all duration-300">
                        <p className="text-[#fe3032] my-3 text-lg font-semibold font-[Montserrat] group-hover:text-black">Power Systems</p>
                        <p className="text-sm lg:text-base">Installation of generators, transformers, and distribution networks.</p>
                    </div>
                    <div className="w-60 lg:w-72 bg-slate-100 hover:border-none hover:bg-[#ffa55b] group hover:text-[#014783] px-3 py-1 h-36 lg:h-44 rounded-2xl transition-all duration-300">
                        <p className="text-[#fe3032] my-3 text-lg font-semibold font-[Montserrat] group-hover:text-black">Automation Solutions</p>
                        <p className="text-sm lg:text-base">Advanced systems to enhance operational efficiency.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CivilContracting;
