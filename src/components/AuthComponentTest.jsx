import {useContext} from "react";
import {AuthContext} from "../contexts/AuthContext";

const AuthComponentTest = () => {
    const { user, logout, token } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    };

    return (
        <div>
            {user ? (
                <div>Привет, {user.username}!</div>
            ) : (
                <div>Твой токен: {token}</div>
            )}
            {user && <button onClick={handleLogout}>Выйти</button>}
        </div>
    );
};


export default AuthComponentTest;