import React, { useContext, useEffect, useState } from 'react';
import { FaBookmark, FaCommentDots, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReviewTable from '../ReviewTable/ReviewTable';
import { Helmet } from 'react-helmet';




const Details = () => {
    const notify = () => toast.success("Successfully Review Added!");
    const { user } = useContext(AuthContext);
    const details = useLoaderData();
    const { img, _id, name, price, rating, description } = details;
    const [reviews, setReviews] = useState([]);
    const [displayRiv, setDisplayRiv] = useState(reviews);

  
  
    useEffect(() => {
        fetch(`https://dochouse-server.vercel.app/reviews?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                // console.log(data);
            })
    }, [_id]);


    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const userName = user?.displayName;
        const email = user?.email;
        const serviceId = _id;
        const photoURL = user?.photoURL;
        const rating = form.rating.value;
        const serviceName = name;
        const serviceImg = img;
        const massage = form.massage.value;
        // console.log(name, email, serviceId, photoURL, massage);

        const review = {
            customarName: userName,
            email,
            serviceId,
            photoURL,
            rating,
            massage,
            serviceName: name,
            serviceImg: img,
        };

        fetch(`https://dochouse-server.vercel.app/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {

                    // setReviews([...review,])
                    notify();
                    form.reset();
                }
                console.log(data)
            })
            .catch(error => console.log(error))
    }


    return (
        <div>

            <div className='grid  justify-items-center my-5'>
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
                                <FaShareAlt className='text-orange-400'></FaShareAlt>
                            </button>
                            <button aria-label="Bookmark this post" type="button" className="p-2">
                                <FaBookmark className='text-orange-400'></FaBookmark>
                            </button>
                        </div>
                        <div>
                            <button className='text-2xl'>price : ${price}</button>
                        </div>
                        <div className="flex space-x-2 text-sm dark:text-gray-400">
                            <button type="button" className="flex items-center p-1 space-x-1.5">
                                <FaCommentDots className='text-xl text-orange-400'></FaCommentDots>
                                <span>{300}</span>
                            </button>
                            <button type="button" className="flex items-center p-1 space-x-1.5">
                                <FaStar className='text-2xl text-orange-400'></FaStar>
                                <span className='text-2xl'>{rating}</span>
                            </button>
                        </div>

                    </div>
                </div>
                <hr />
                <h1 className="text-3xl  text-black font-semibold bg-red-400 my-5 p-5 px-5 rounded">Some Reivew</h1>

                <div>
                    {
                        reviews.map(review => <ReviewTable
                            review={review}
                            key={review._id}
                        >
                        </ReviewTable>)
                    }
                </div>



                <h1 className="text-3xl text-black font-semibold bg-red-400 my-5 p-5 px-5 rounded">Add Reivew</h1>

                <div className='bg-gray-500 w-full 	'>
                    <form onSubmit={handleReview}>
                        <h2 className="text-center text-black font-bold my-5 text-4xl">{name}</h2>
                        <div className='grid lg:grid-cols-2 sm:grid-cols-1 justify-items-center'>
                            <input defaultValue={user?.displayName} type="text" placeholder="Type Your Name" className="mt-2 input input-bordered input-error w-full max-w-xs" />
                            <input defaultValue={user?.email} type="text" placeholder="Type Your Email" className="mt-2 input input-bordered input-error w-full max-w-xs" />
                            <input defaultValue={user?.photoURL} type="text" placeholder="Type Your PhotoURL" className="mt-2 input input-bordered input-error w-full max-w-xs" />
                            <input defaultValue={name} type="text" placeholder="Service name" className="mt-2 input input-bordered input-error w-full max-w-xs" />
                            <input defaultValue={_id} type="text" placeholder="Service id" className="mt-2 input input-bordered input-error w-full max-w-xs" />
                            <input defaultValue={img} type="website" placeholder="Service img" className="mt-2 input input-bordered input-error w-full max-w-xs" />
                            <input name='rating' required type="number" placeholder="Give me Rating" className="mt-2 input input-bordered input-error w-full max-w-xs" />
                        </div>
                        <textarea name='massage' required className="textarea w-full mt-3 textarea-secondary" placeholder="Type Your Massage..."></textarea>
                        <div className='text-center py-5'>
                            {
                                user?.uid ?
                                    <>
                                        <input type="submit" className='btn text-center btn-active btn-success' value="Submit" />
                                    </>
                                    :
                                    <>
                                        <Link to={'/login'} className='btn text-center btn-active btn-warning'>Please Login First </Link>
                                    </>
                            }

                        </div>
                    </form>
                    <ToastContainer position="top-center" />

                </div>
            </div>
            <Helmet>
                <title>{name}</title>
            </Helmet>
        </div >
    );
};

export default Details;