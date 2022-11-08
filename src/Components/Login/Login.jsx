import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Login = () => {
    const { googleSignIn, signIn } = useContext(AuthContext);

    const handleSignIn = (event) => {
        event.preventDefault();

        const form = event.target
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    const handleGoogleSign = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            });

    }




    return (
        <div className='grid justify-items-center my-5'>
            <div className="w-full max-w-md p-8 rounded-xl dark:bg-gray-900 dark:text-gray-100">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form
                    onSubmit={handleSignIn}

                    className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-gray-400">Email</label>
                        <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        <div className="flex justify-end text-xs dark:text-gray-400">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Sign in</button>
                </form>



                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center ">
                    <button
                        onClick={handleGoogleSign}
                        aria-label="Log in with Google" className="p-3 rounded-sm">
                        <FaGoogle className='text-3xl' title='Google Sign In'> </FaGoogle>
                    </button>

                </div>
                <p className="text-xs text-center dark:text-gray-400">Don't have an account?
                    <Link rel="noopener noreferrer" to='/signup' className="underline text-green-400 text-xl m-5">Sign up</Link>
                </p>
            </div>

        </div>
    );
};

export default Login;