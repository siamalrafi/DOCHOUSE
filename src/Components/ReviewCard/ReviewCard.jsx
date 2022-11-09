import React from 'react';
import { FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ReviewCard = ({ myreivew }) => {
    const notify = () => toast.success("Successfully Deleted!");
    const { customarName, massage, _id, serviceImg, serviceName, rating } = myreivew;

    const handleDelete = (_id) => {
        const agree = window.confirm('Are you sure you ?');
        if (agree) {
            fetch(`http://localhost:5000/myreviews/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    notify();
                    console.log(data)
                })
        }
    };


    return (
        <div>

            <div className="mb-5 bg-gray-400 card w-72 bg-base-100 shadow-xl">
                <figure><img src={serviceImg} alt="Shoes" /></figure>
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