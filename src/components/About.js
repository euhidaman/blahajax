import React from 'react'

function About() {
    return (
        <>
            <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce"
                            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                            src="https://cdn.discordapp.com/attachments/880827536454611014/881090055689625670/5_6147891620005020473.png"
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 className="text-white text-4xl title-font font-medium mb-1">About Blahaj</h1>
                            <p className="leading-relaxed text-lg">
                                Blahajax is a Fun and Informative Website, made for learning and
                                spreading the lore of THE GREAT BLAHAJ.<br />
                                In this website, you can Chill, enjoy, and most importantly learn a lot about Sharks🦈,
                                like the Great Blahaj.<br />
                                And, you can also play a super Interesting Game, called 'Blahaj-Hangman',
                                which is again all about Sharksss !!!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
