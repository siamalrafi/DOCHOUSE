import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

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


    console.log(myreivews);



    return (
        <div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 justify-items-center'>
                <div className="card w-72 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Review;