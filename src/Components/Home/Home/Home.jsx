import React from 'react';

const Home = () => {
    return (
        <div>




            <div className="bg-indigo-600">
                <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                    <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                        <div className="flex flex-col sm:text-center sm:mb-0">
                            <a href="/" className="sm:mx-auto">
                                <div className="flex items-center justify-center w-12 h-6 rounded-full bg-teal-accent-400">
                                    <svg
                                        className="w-10 text-white h-5 text-deep-purple-900"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                            </a>
                            <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                                    <span className="relative inline-block">
                                        <svg
                                            viewBox="0 0 52 24"
                                            fill="currentColor"
                                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                        >
                                            <defs>
                                                <pattern
                                                    id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                                                    x="0"
                                                    y="0"
                                                    width=".135"
                                                    height=".30"
                                                >
                                                    <circle cx="1" cy="1" r=".7" />
                                                </pattern>
                                            </defs>
                                            <rect
                                                fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                                                width="52"
                                                height="24"
                                            />
                                        </svg>
                                        <span className="relative">The</span>
                                    </span>{' '}
                                    Give Me Your Review For Better Services
                                </h2>
                                <p className="text-base text-indigo-100 md:text-lg">
                                    In the medical sciences, the importance of review articles is rising. When clinicians want to update their knowledge and generate guidelines about a topic, they frequently use reviews as a starting point. The value of a review is associated with what has been done, what has been found and how these findings are presented.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <div className="carousel w-full h-96">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className=" w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Home;