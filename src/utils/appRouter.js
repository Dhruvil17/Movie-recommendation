import App from "../App";
import Body from "../components/Body";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import CompanyInfo from "../components/CompanyInfo";
import { createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/signin",
                element: <SignIn />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: "/company-info",
                element: <CompanyInfo />,
            },
        ],
    },
]);

export default appRouter;
