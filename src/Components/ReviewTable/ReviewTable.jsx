import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const ReviewTable = ({ review }) => {
    const notify = () => toast.success("Successfully Deleted!");
    const { user } = useState(AuthContext)
    const { _id, name, email, massage, photoURL, serviceId, } = review;


    // const handleDelete = (_id) => {
    //     const agree = window.confirm('Are you sure you ?');
    //     if (agree) {
    //         fetch(`http://localhost:5000/reviews/${_id}`, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 notify();
    //                 console.log(data)
    //             })
    //     }
    // };


    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr className='flex justify-around'>
                            <th>Identity</th>
                            <th>Review</th>
                            <th className='mr-[-30px]'>Favorite</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='flex justify-items-center justify-between'>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{name}</div>
                                        <div className="text-sm opacity-50">{email}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Overall Okay
                                <br />
                                <span className="badge badge-ghost badge-sm">{massage.slice(0, 50)}</span>
                            </td>
                            <td>Good</td>



                        </tr>
                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default ReviewTable;