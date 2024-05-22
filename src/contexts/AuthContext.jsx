import React, {createContext, useEffect, useState} from "react";
import {getUserInfo} from "../api/APIServices";
import {useCookies} from "react-cookie";
import Cookies from "js-cookie";

export const AuthContext = createContext();

const AuthProvider = (props) => {
    const [user, setUser] = useState(null);

    const [cookies] = useCookies(['token']);
    const [token, setToken] = useState(cookies['token']);

    useEffect(() => {
        setToken(cookies['token']);
    }, [cookies]);

    useEffect(() => {
        if (token) {
            getUserInfo()
                .then(response => {
                    setUser(response.data);
                })
                .catch(error => {
                    console.error('Ошибка при получении данных о пользователе:', error);
                    Cookies.remove('token')
                });
        }
    }, [token]);

    const logout = () => {
        setUser(null);
        Cookies.remove('token')
    };

    return (
        <AuthContext.Provider value={{user, logout, token}}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;