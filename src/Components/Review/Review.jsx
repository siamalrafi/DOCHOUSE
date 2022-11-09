import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
    const { user } = useContext(AuthContext);
    const [myreivews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data);
                // console.log(data);
            })
    }, [user?.email]);


    return (
        <div>
            <div className='mt-5 my-8 grid lg:grid-cols-3 sm:grid-cols-1 justify-items-center'>
              
                    {
                        myreivews.map(myreivew =>
                            <ReviewCard
                                key={myreivew._id}
                                myreivew={myreivew}
                            >


                            </ReviewCard>)
                    } 
            </div>
        </div>
    );
};

export default Review;