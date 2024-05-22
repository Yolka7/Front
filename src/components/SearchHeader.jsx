import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext";
import GreenLine from "./GreenLine";

const SearchHeader = ({ page }: { page: 'ticket_for_work' | 'staff' }) => {

    const { user } = useContext(AuthContext);

    return (
        <>
            <div className="header">
                <Link className="qwerty" to="/">QWERTY Solution</Link>
                <div className="login">
                    {
                        user ?
                            <div className="account_header_box">
                                <span>{user.username}</span>
                                <img src="./car.jpg" className="Img" style={{"max-height": "3rem"}}></img>
                            </div>
                            :
                            <>
                                <Link className="login_button" to="/signin">Login</Link>
                                /
                                <Link className="login_button" to="/signup">Register</Link>
                            </>
                    }
                </div>
            </div>
            <GreenLine page={page}/>
        </>
    )
}

export default SearchHeader