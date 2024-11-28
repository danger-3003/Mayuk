import React from "react";
import Image from "../assets/Services/mechContracting.svg";

function CivilContracting() {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className="font-[Montserrat] font-semibold text-[#fe3032] text-xl sm:text-2xl md:text-3xl my-5">Mechanical Contracting</div>
            <div className="flex items-center justify-center flex-col xl:flex-row gap-5 py-10">
                <img src={Image} alt="CivilContracting" className="w-60 sm:w-80 lg:w-[20rem] xl:w-[30rem]"/>
                <div className="flex items-start justify-center flex-wrap gap-5 sm:px-10 lg:w-[43rem]">
                    <div className="w-60 lg:w-72 bg-slate-100 hover:border-none hover:bg-[#014783] group hover:text-white px-3 py-1 h-36 lg:h-44 rounded-2xl transition-all duration-300">
                        <p className="text-[#fe3032] my-3 text-lg font-semibold font-[Montserrat] group-hover:text-cyan-300">HVAC Systems</p>
                        <p className="text-sm lg:text-base">Heating, ventilation, and air conditioning solutions for industries and apartments.</p>
                    </div>
                    <div className="w-60 lg:w-72 bg-slate-100 hover:border-none hover:bg-[#014783] group hover:text-white px-3 py-1 h-36 lg:h-44 rounded-2xl transition-all duration-300">
                        <p className="text-[#fe3032] my-3 text-lg font-semibold font-[Montserrat] group-hover:text-cyan-300">Plumbing & Fire Systems</p>
                        <p className="text-sm lg:text-base">Reliable water management and fire protection systems.</p>
                    </div>
                    <div className="w-60 lg:w-72 bg-slate-100 hover:border-none hover:bg-[#014783] group hover:text-white px-3 py-1 h-36 lg:h-44 rounded-2xl transition-all duration-300">
                        <p className="text-[#fe3032] my-3 text-lg font-semibold font-[Montserrat] group-hover:text-cyan-300">Industrial Machinery Setup</p>
                        <p className="text-sm lg:text-base">Installation of generators, transformers, and distribution networks.</p>
                    </div>
                    <div className="w-60 lg:w-72 bg-slate-100 hover:border-none hover:bg-[#014783] group hover:text-white px-3 py-1 h-36 lg:h-44 rounded-2xl transition-all duration-300">
                        <p className="text-[#fe3032] my-3 text-lg font-semibold font-[Montserrat] group-hover:text-cyan-300">Iping Solutions</p>
                        <p className="text-sm lg:text-base">High-quality pipelines for various industrial and residential needs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CivilContracting;
