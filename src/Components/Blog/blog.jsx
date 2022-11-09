import React from 'react';

const blog = () => {
    return (
        <div>
            {/* <section className=" bg-gray-300"> */}
            <section className=" dark:bg-gray-600">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl mb-8 font-semibold sm:text-4xl"><b className='text-orange-100'>
                        Our blog are ready to you.
                    </b></h2>

                    <div className="space-y-4">
                        <details className="w-full border border-purple-500 rounded-lg">
                            <summary className="px-4 py-6 text-white focus:outline-none focus-visible:ring-violet-400"><b className='text-orange-200'>
                                Difference between SQL and NoSQL ?
                            </b></summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-white bg-black">
                                SQL stands for 'Structured Query Language'. It is the most common programming language used for executing queries, and handling data by using CRUD (create, read, update and delete) operation on a Relational Database Management System (RDMS).
                                SQL databases are cross-platform, more secure, free, and open source with better and stronger community support.
                                <br />  <br />
                                NoSQL stands for 'Not-Only SQL'. These types of databases are Non-Relational or non-tabular. A No-SQL database does not require a specific schema and hence is schema-less, and all the entries/documents are JSON documents. Examples − MongoDB, DynamoDB, Redis, etc.
                                NoSQL databases are very flexible, easy to use, developer-friendly, and provide higher performance
                            </p>
                        </details>
                        <details className="w-full  border-purple-500  border rounded-lg">
                            <summary className="px-4 text-white py-6 focus:outline-none focus-visible:ring-violet-400">
                                <b className='text-orange-200'>
                                    What is JWT, and how does it work?
                                </b>

                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-white bg-black">
                                JSON Web Token or JWT, as it is more commonly called, is an open Internet standard (RFC 7519) for securely transmitting trusted information between parties in a compact way. The tokens contain claims that are encoded as a JSON object and are digitally signed using a private secret or a public key/private key pair. They are self-contained and verifiable as they are digitally signed. JWT's can be signed and/or encrypted. The signed tokens verify the integrity of the claims contained in the token, while the encrypted ones hide the claims from other parties.
                            </p>
                        </details>
                        <details className="w-full  border-purple-500  border rounded-lg">
                            <summary className="text-white px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                                <b className='text-orange-200'>

                                    What is the difference between javascript and NodeJS ?

                                </b>
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-white bg-black">
                                JavaScript is a programming language, which runs in web browsers. Whereas Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries and all. JavaScript is basically one standard defining programming language; it can run any browser with a default browser running environment. It is a very strong language normally used for a web application on any verification or any specific business logic. We need to append in the screen without page refreshing.
                                <br /><br />
                                Node.js also holds a lot of relative libraries, which we normally use in javascript for general purpose programming language. It is actually a kind of environment or interpreter that can represent JavaScript or run any javascript program.

                            </p>
                        </details>
                        <details className="w-full  border-purple-500  border rounded-lg">
                            <summary className="text-white px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                                <b className='text-orange-200'>
                                    How does NodeJS handle multiple requests at the same time  ?
                                </b>
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-white bg-black">
                                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                                If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallels using the NodeJS cluster module or worker_threads module.

                            </p>
                        </details>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default blog;