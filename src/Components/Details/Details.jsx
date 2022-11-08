import React, { useContext } from 'react';
import { FaBookmark, FaCommentDots, FaShareAlt, FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';




const Details = () => {
    const { user } = useContext(AuthContext);
    const details = useLoaderData();
    const { img, _id, name, price, rating, description } = details;

    console.log(user);
    return (
        <div>
            <div className='grid justify-items-center my-5'>
                <div className="max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <div>
                        <PhotoProvider>
                            <PhotoView className='w-80 h-full' src={img}>
                                <img src={img} alt="img" className="object-cover w-full mb-4 h-40 sm:h-52 dark:bg-gray-500" />
                            </PhotoView>
                        </PhotoProvider>
                        <h2 className="mb-1 text-xl font-semibold">{name}</h2>
                        <p className="text-sm dark:text-gray-400"> {description}</p>
                    </div>

                    <div className="flex flex-wrap justify-between">

                        <div className="space-x-2">
                            <button aria-label="Share this post" type="button" className="p-2 text-center">
                                <FaShareAlt></FaShareAlt>
                            </button>
                            <button aria-label="Bookmark this post" type="button" className="p-2">
                                <FaBookmark></FaBookmark>
                            </button>
                        </div>
                        <div>
                            <button className='text-2xl'>price : ${price}</button>
                        </div>
                        <div className="flex space-x-2 text-sm dark:text-gray-400">
                            <button type="button" className="flex items-center p-1 space-x-1.5">
                                <FaCommentDots className='text-xl text-white'></FaCommentDots>
                                <span>{30}</span>
                            </button>
                            <button type="button" className="flex items-center p-1 space-x-1.5">
                                <FaStar className='text-xl text-white'></FaStar>
                                <span>{rating}</span>
                            </button>
                        </div>

                    </div>


                    <div className='grid justify-items-stretch'>
                        {
                            user?.email ?
                                <>
                                    <button className='btn btn-secondary'>Add Review</button>
                                </>
                                :
                                <>
                                    <button className='btn btn-secondary'>Please login to Review</button>
                                </>
                        }



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;