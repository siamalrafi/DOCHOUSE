import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ReviewCard = ({ myreivew, handleDelete }) => {
    const notify = () => toast.success("Successfully Deleted!");
    const { customarName, massage, _id, serviceImg, serviceName, rating } = myreivew;

    return (
        <div>

            <div className="mb-5 bg-black text-white card w-72 bg-base-100 shadow-xl">
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
                                <FaStar className='text-orange-400'></FaStar>
                            </span>
                            {rating}</div>
                    </h2>
                    <p>{massage.slice(0, 100)}</p>
                    <div className="card-actions justify-end">
                        <button
                            onClick={() => handleDelete(_id)}
                            className="bg-red-800 text-white p-4 badge">Delete</button>
                        <button className="badge">Edit</button>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default ReviewCard;