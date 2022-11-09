import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from '../Components/Home/Home/Home';
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Components/Login/Login";
import SignUp from '../Components/SignUp/SignUp';
import Services from '../Components/Services/Services';
import Details from "../Components/Details/Details";
import Review from "../Components/Review/Review";
import Blog from '../Components/Blog/blog';
import PrivateRouter from "../Components/PrivateRouter/PrivateRouter";
import AddServices from "../Components/AddServices/AddServices";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/home/'),
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/myreviews',
                element:
                    <PrivateRouter>
                        <Review></Review>
                    </PrivateRouter>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: '/addservices',
                element:
                    <PrivateRouter>
                        <AddServices></AddServices>
                    </PrivateRouter>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

        ]
    }
])



export default router;
