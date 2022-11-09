import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({ myreivew }) => {
    const { customarName, massage, _id, serviceImg, serviceName, rating } = myreivew;

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
                        <button className="badge">Delete</button>
                        <button className="badge">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;