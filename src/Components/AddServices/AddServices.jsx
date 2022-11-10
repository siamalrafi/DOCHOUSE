import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';

const AddServices = () => {
    const notify = () => toast.success("Successfully Service Added!");
    const notifyError = () => toast.error("An error in here, Please Try again!");

    const handleAddService = (event) => {
        event.preventDefault();

        const form = event.target;
        const img = form.serviceImg.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const name = form.serviceName.value;
        const description = form.description.value;
        // console.log(img, price, rating, name, description);

        const addService = {
            img: img,
            price: price,
            rating: rating,
            name: name,
            description: description
        };

        fetch('https://dochouse-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    notify();
                    form.reset();
                }
                console.log(data);
            })
            .catch(error => {
                notifyError();
                console.log(error);
            })


    };




    return (
        <div>

            <Helmet>
                <title>Add Service</title>
            </Helmet>
            <div className='bg-gray-500 w-full 	'>
                <form onSubmit={handleAddService}>
                    <h2 className="text-center text-black py-5 font-bold my-5 text-4xl"><b className='text-black'>Add Your Service</b></h2>
                    <div className='grid lg:grid-cols-2 sm:grid-cols-1 justify-items-center'>
                        <input name='serviceName'
                            type="text" placeholder="Type Service Name" className="mt-2 input input-bordered input-error w-full max-w-xs" required />
                        <input name='serviceImg'
                            type="website" placeholder="Service img" className="mt-2 input input-bordered input-error w-full max-w-xs" required />
                        <input name='price'
                            type="number" placeholder="Service Price" className="mt-2 input input-bordered input-error w-full max-w-xs" required />
                        <input name='rating'
                            type="number" placeholder="Give me Rating" className="mt-2 input input-bordered input-error w-full max-w-xs" required />
                    </div>
                    <textarea name='description' required className="textarea w-full mt-3 textarea-secondary" placeholder="Type Your Service Description"></textarea>

                    <div className='text-center py-5'>
                        <input type="submit" className='btn text-center btn-active btn-success' value="Submit" />
                    </div>
                </form>
                <ToastContainer position="top-center" />

            </div>

        </div>
    );
};

export default AddServices;