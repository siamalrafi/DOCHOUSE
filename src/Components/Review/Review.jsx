import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import ReviewCard from '../ReviewCard/ReviewCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import SingleService from '../Services/SingleService/SingleService';


const Review = () => {
    const notify = () => toast.success("Successfully Deleted!");
    const notifyUpdate = () => toast.success("Successfully Updated!");

    const { user, logOut } = useContext(AuthContext);
    const [myreivews, setMyReviews] = useState([]);


    useEffect(() => {
        fetch(`https://dochouse-server.vercel.app/myreviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('access_token')}`
            },
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut();
                }
                return res.json()
            })
            .then(data => {
                setMyReviews(data)

            })
    }, [user?.email]);


    const handleDelete = (id) => {
        const agree = window.confirm('Are you sure you ?');
        if (agree) {
            fetch(`https://dochouse-server.vercel.app/myreviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaingReview = myreivews.filter(rev => rev._id !== id)
                        setMyReviews(remaingReview)
                    }
                    notify();
                    console.log(data)
                })
        }
    };

 

    return (
        <div>
            <div className=' dark:bg-gray-600 pt-10  grid lg:grid-cols-3 md:grid-cols-2 gap-3 sm:grid-cols-1 justify-items-center'>




                {
                    myreivews.length !== 0 ?
                        <>
                            {
                                myreivews.map(myreivew =>
                                    <ReviewCard
                                        key={myreivew._id}
                                        myreivew={myreivew}
                                        handleDelete={handleDelete}
                                    >
                                    </ReviewCard>)
                            }
                        </>
                        :
                        <>
                            <div className='flex grid-cols-1'>
                                <h1 className='p-10 h-96 w-full  font-bold text-2xl text-gray-200 '>No Review Added</h1>
                            </div>
                        </>
                }
                

            </div>
            <Helmet>
                <title>My reviews</title>
            </Helmet>
        </div>
    );
};

export default Review;