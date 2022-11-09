import React, { useState } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const ReviewTable = ({ review }) => {
    const { user } = useState(AuthContext);
    const { rating, customarName, email, massage, photoURL, serviceId, } = review;

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr className='flex justify-around'>
                            <th><b>Identity</b></th>
                            <th><b>Review</b></th>
                            <th className='mr-[-35px]'><b>Rating</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='flex  justify-items-center justify-between'>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{customarName}</div>
                                        <div className="text-sm opacity-50">{email}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Overall Okay
                                <br />
                                <span className="badge badge-ghost badge-sm">{massage}</span>
                            </td>
                            <td className='ml-5'>Rating : {rating}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReviewTable;