import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';





const Card = ({ service }) => {

    const { img, _id, title, name, price, ratice, description } = service;
    console.log(service);

    return (
        <div>
            <div className="card mt-6 mb-3 w-80 bg-gray-300 shadow-xl">
                <figure className="px-5 pt-5">
                    <PhotoProvider>
                        <PhotoView className='w-80 h-full' src={img}>
                            <img src={img} alt="Shoes" className="rounded-xl" />
                        </PhotoView>
                    </PhotoProvider>




                </figure>
                <div className="card-body  ">
                    <h2 className="card-title">{name}</h2>
                    <p>{description.slice(0, 150)}...</p>
                    <p>Price : ${price}</p>
                    <div className="card-actions text-center items-center">
                        <Link to={`/services/${_id}`}>
                            <button className="btn btn-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;