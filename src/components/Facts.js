import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios'

function Facts() {

    const [resDetail, setResDetail] = useState([]);

    const fetchURL = "https://raw.githubusercontent.com/euhidaman/Fake_APIs/main/sharksInfo.json";

    useEffect(() => {
        getAllResDetails();
    }, [])

    const getAllResDetails = () => {
        axios.get(fetchURL)
            .then(res => {
                const allDetails = res.data.sharksInfo;
                setResDetail(allDetails);
            })
            .catch(err => {
                console.log(err);
            });
    }

    console.log(resDetail);

    return (
        <>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 mx-auto">
                    <div className="py-8">
                        <h1 className="sm:w-2/5 font-mono font-semibold text-white lg:text-right font-medium lg:text-4xl title-font lg:mb-3 text-3xl sm:mb-0">
                            Blahaj Facts
                        </h1>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

                        {resDetail.map((shark) => (
                            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                <div className="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full" src={shark.sharkImage} />
                                </div>
                                <h2 className="text-xl font-medium title-font text-white mt-5">
                                    {shark.sharkName} <span className="italic"> [ {shark.latinName} ]</span>
                                </h2>
                                <h4 className="font-mono" >- {shark.extinction}</h4>
                                <p className="text-base leading-relaxed mt-2">{shark.description}</p>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Facts
