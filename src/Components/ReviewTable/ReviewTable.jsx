import React from 'react';

const ReviewTable = ({ review }) => {
    const { _id, name, email, massage, photoURL, serviceId, } = review;


    const handleDelete = (_id) => {
        const agree = window.confirm('Are you sure you ?');
        if (agree) {



        }
    };


    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th> </th>
                            <th>Identity</th>
                            <th>Review</th>
                            <th>Favorite</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <button
                                    onClick={() => handleDelete(_id)}
                                    className="btn btn-sm btn-primary">Delete</button>
                            </th>
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
                            <th>
                                <button className="btn  btn-sm btn-primary">Edit</button>
                            </th>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ReviewTable;