import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link className="qwerty" to="/">QWERTY Solution</Link>
        </div>
    )
}

export default Header