import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ReviewCard = ({ myreivew, handleUpdate, handleDelete }) => {
    const notify = () => toast.success("Successfully Deleted!");
    const { customarName, massage, _id, serviceImg, serviceName, rating } = myreivew;


    // console.log(massage);

    return (
        <div>

            <div className="mb-5 dark:bg-indigo-900 text-gray-200 card w-72 bg-base-100 shadow-xl">

                <PhotoProvider>
                    <PhotoView className='w-80 h-full' src={serviceImg}>
                        <img src={serviceImg} alt="serviceImg" />
                    </PhotoView>
                </PhotoProvider>


                <div className="card-body">
                    <h2 className="card-title">
                        {serviceName}
                        <div className="badge  ">
                            <span>
                                <FaStar className='text-2xl text-orange-400'></FaStar>
                            </span>
                            <span className='text-2xl'>
                                {rating}
                            </span>
                        </div>
                    </h2>
                    <p>{massage}</p>
                    <div className="card-actions justify-end">
                        <button
                            onClick={() => handleDelete(_id)}
                            className="bg-red-800 text-white p-4 badge">Delete</button>
                        <button
                            onClick={() => handleUpdate(_id)}
                            className="bg-red-800 text-white p-4 badge">Update</button>

                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default ReviewCard;