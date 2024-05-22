import React from 'react';
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

function ErrorPage() {

    return (
        <>
            <h1>
                404 PAGE NOT FOUND
            </h1>

            <Link to="/">Home</Link>
            <Footer/>
        </>
    );
}

export default ErrorPage;