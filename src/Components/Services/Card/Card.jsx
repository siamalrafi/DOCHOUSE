import React from 'react';




const Card = ({ service }) => {

    const { img, title, name, price, ratice, description } = service;
    // console.log(service);

    return (
        <div>
            <div className="card mt-6 mb-3 w-80 bg-gray-300 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center ">
                    <h2 className="card-title">{name}</h2>
                    <p>{description.slice(0, 150)}...</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;