import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import ContactUs from "../pages/ContactUs";

const routes = createBrowserRouter([{
    element: <App />,
    path: '/',
    children: [
        {
            element: <Home />,
            path: '/'
        },
        {
            element: <About />,
            path: '/about'
        },
        {
            element: <Services />,
            path: '/our-services'
        },
        {
            element: <ContactUs />,
            path: '/contact'
        },
    ]
}])

export default routes