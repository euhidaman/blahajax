import React from "react";
import TypeWriter from "react-typewriter";


const Hero = ({ appType, headLine, description, mainActionText, extraActionText }) => {
    return (
        <div >
            <div style={{ textShadow: '0px 1px 1px gray' }} className="flex h-screen flex-col items-center justify-start font-sans min-h-96 bg-gray-800 lg:pt-10 lg:pb-20 bg-hero lg:bg-cover">
                <div>
                    <p className="p-3 pt-12 text-lg font-bold text-gray-500 lg:text-gray-300">{appType}</p>
                </div>
                <div>
                    <p className="py-2 text-4xl font-mono font-medium text-center text-gray-300 my-5 lg:w-4/6 lg:text-8xl lg:text-gray-100">
                        <TypeWriter typing={0.5}>{headLine}</TypeWriter>
                    </p>
                </div>
                <div className="relative z-50 flex flex-col items-center justify-between h-48 lg:space-x-8 pt-7 lg:pt-0 lg:flex-row lg:justify-between lg:w-90">
                    <button
                        className="pt-3 pb-3 pl-12 pr-12 text-2xl font-semibold text-center text-white transition-all bg-orange-400 rounded-full shadow-2xl lg:ml-5 hover:bg-blue-400 focus:outline-none ring-4 ring-orange-600 lg:ring-2 lg:font-medium "
                    >
                        {mainActionText}
                    </button>
                    <button
                        className="pt-3 pb-3 pl-12 pr-12 text-2xl font-semibold text-center text-white transition-all bg bg-orange-600 rounded-full shadow-2xl lg:ml-5 hover:bg-blue-400 focus:outline-none ring-4 ring-orange-600 lg:ring-2 lg:font-medium "
                    >
                        <a href="/facts"> {extraActionText}</a>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Hero;
