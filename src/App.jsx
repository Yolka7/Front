import {createBrowserRouter, RouterProvider, ScrollRestoration} from "react-router-dom";

import MainPage from './pages/MainPage.jsx';
import * as PropTypes from "prop-types";
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignUp";
import Redact from "./pages/redact";
import AuthProvider from "./contexts/AuthContext";
import Kod from "./pages/kod";
import ManagePage from "./pages/ManagePage";

import {Suspense} from "react";
import ErrorPage from "./pages/ErrorPage";
import Zaiv from "./pages/zaiv";
import Zapoln from "./pages/zapoln";

RouterProvider.propTypes = {router: PropTypes.any};
const router = createBrowserRouter([
    {
        path: "*",
        element: <ScrollRestoration/>
    },
    {
        path: "/",
        element: <MainPage/>
    },
    {
        path: "/signin",
        element: <SignIn/>,
    },
    {
        path: "/signup",
        element: <SignUp/>,
    },
    {
        path: "/edit",
        element: <Redact/>,
    },
    {
        path: "/new_ticket",
        element: <Zapoln/>,
    },
    {
        path: "/ticket/:id",
        element: <Zaiv/>,
    },
    {
        path: "/kod",
        element: <Kod/>,
    },
    {
        path: "/manage",
        element: <ManagePage/>,
        errorElement: <ErrorPage/>
    }
])

function App() {
    return (
        <AuthProvider>
            <Suspense>
                <RouterProvider router={router}/>
            </Suspense>
        </AuthProvider>
    );
}

export default App;
