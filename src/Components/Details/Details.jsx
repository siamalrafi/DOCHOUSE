import React, { useContext } from 'react';
import { FaBookmark, FaCommentDots, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Details = () => {
    const notify = () => toast.success("Successfully Review Added!");
    const { user } = useContext(AuthContext);
    const details = useLoaderData();
    const { img, _id, name, price, rating, description } = details;


    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName;
        const email = user?.email;
        const serviceId = _id;
        const photoURL = user?.photoURL;
        const massage = form.massage.value;
        // console.log(name, email, serviceId, photoURL, massage);

        const review = {
            name,
            email,
            serviceId,
            photoURL,
            massage,
        };

        fetch(`http://localhost:5000/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    notify();
                    form.reset();
                }
                console.log(data)
            })
            .catch(error => console.log(error))
    }


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
                </div>

                <h1 className="text-3xl bg-red-400 my-5 rounded">Some Reivew</h1>

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th> </th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>
                                    <button className="btn btn-sm btn-primary">Delete</button>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Yancy Tear</div>
                                            <div className="text-sm opacity-50">Brazil</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Wyman-Ledner
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                                </td>
                                <td>Indigo</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                        </tbody>

                    </table>
                </div>


                <h1 className="text-3xl bg-green-500 my-10">Your Review</h1>

                <div className='bg-gray-500 w-full'>
                    <form onSubmit={handleReview}>
                        <h2 className="text-center my-5 text-4xl">{name}</h2>
                        <div className='grid justify-items-center'>
                            <input defaultValue={user?.displayName} type="text" placeholder="Type Your Name" className="mt-2 input input-bordered input-error w-full max-w-xs" />
                            <input defaultValue={user?.email} type="text" placeholder="Type Your Email" className="mt-2 input input-bordered input-error w-full max-w-xs" />
                            <input defaultValue={user?.photoURL} type="text" placeholder="Type Your PhotoURL" className="mt-2 input input-bordered input-error w-full max-w-xs" />
                            <input defaultValue={_id} type="text" placeholder="Type here" className="mt-2 input input-bordered input-error w-full max-w-xs" />
                        </div>
                        <textarea name='massage' className="textarea w-full mt-3 textarea-secondary" placeholder="Type Your Massage..."></textarea>
                        <div className='text-center py-5'>

                            {
                                user?.uid ?
                                    <>
                                        <input type="submit" className='btn text-center btn-active btn-success' value="Submit" />
                                    </>
                                    :
                                    <>
                                        <Link to={'/login'} className='btn text-center btn-active btn-success'>Please Login First </Link>
                                    </>
                            }

                        </div>
                    </form>
                    <ToastContainer position="top-center" />

                </div>
            </div>
        </div >
    );
};

export default Details;