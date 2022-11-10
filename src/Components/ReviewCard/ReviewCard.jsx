import React, { useContext, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ReviewCard = ({ myreivew, handleUpdate, handleDelete }) => {
    const notify = () => toast.success("Successfully Deleted!");
    const notifyUpdate = () => toast.success("Successfully Updated!");
    const { customarName, massage, _id, serviceImg, serviceName, rating } = myreivew;


    const handleUpdateInput = (event) => {



        event.preventDefault();
        const form = event.target;
        const rating = form.rating.value;
        const massage = form.massage.value;

        const updateMassage = {
            rating: rating,
            massage: massage
        }
        fetch(`https://dochouse-server.vercel.app/myreviews/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateMassage)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    notifyUpdate()
                    form.reset()
                }
            })
    }


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

                        <label
                            className="bg-red-800 text-white p-4 badge" htmlFor="my-modal-6" >Update</label>
                    </div>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box  bg-black">
                            <h3 className="font-bold text-lg">
                                {serviceName}
                            </h3>
                            <form onSubmit={handleUpdateInput}>
                                <input name='rating'
                                    type="text" placeholder="Type update rating" className="input mb-2 text-black input-info w-full  " />
                                <input name='massage'
                                    type="text" placeholder="Type Updated Massage " className="input text-black input-info w-full  " />
                                <br />
                                <div className='text-center'>
                                    <input
                                        className='btn text-center' type="submit" value="Submit" />
                                </div>
                            </form>


                            <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                        </div>
                    </div>


                </div>
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default ReviewCard;