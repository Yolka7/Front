import {useContext, useEffect, useState} from 'react';
import Header from "../components/Header";
import {Link, useNavigate} from "react-router-dom";
import Footer from "../components/Footer";
import {handleLogin} from "../api/APIServices";
import {AuthContext} from "../contexts/AuthContext";
import Cookies from "js-cookie";

function Authpage() {
    const [error, setError] = useState(false);
    const {user} = useContext(AuthContext);
    const [isLoggedIn, setIsLoggedIn] = useState(user != null);
    const [email, setEmail] = useState("");

    const [errorP, setErrorP] = useState(false);
    const [password, setPassword] = useState("");

    const [submittedValues, setSubmittedValues] = useState({email: "", password: ""});
    const navigate = useNavigate();

    const check = async () => {
        setError(email.length < 3)
        setErrorP(password.length < 8)
        setSubmittedValues({email, password});

        if (error || errorP) return;
        await handleLogin(email, password).then(() => setIsLoggedIn(true))
    }

    useEffect(() => {
        if (isLoggedIn || Cookies.get("token")) {
            navigate("/")
        }
    }, [isLoggedIn]);

    return (
        <>
            <Header/>

            <div className="auth">
                <div className="login_form">
                    <div className="signin_title_block">
                        <p className="login_title">Авторизация</p>
                        <p className="podheader">Пожалуйста, введите данные вашего профиля в полях</p>
                    </div>

                    <div className="ots">
                        <p className="ots_login_text">Логин/Почта</p>

                        <div className="login_box">
                            <div className="login_icon">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.5 23.75V22.5C7.5 19.7386 9.73857 17.5 12.5 17.5H17.5C20.2614 17.5 22.5 19.7386 22.5 22.5V23.75"
                                        stroke="black" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round"/>
                                    <path
                                        d="M15 13.75C12.9289 13.75 11.25 12.0711 11.25 10C11.25 7.92894 12.9289 6.25 15 6.25C17.0711 6.25 18.75 7.92894 18.75 10C18.75 12.0711 17.0711 13.75 15 13.75Z"
                                        stroke="black" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <input className="login_input" type="text" onChange={(e) => setEmail(e.target.value)}
                                   placeholder="Login/Email"/>
                        </div>
                        <p className="Error" style={{display: error === false ? "none" : "block"}}> Некорректные
                            данные </p>

                        <p className="ots_parol">Пароль</p>
                        <div className="login_box">
                            <div className="login_icon">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M28.9816 14.6203C28.9406 14.5277 27.948 12.3258 25.7414 10.1191C22.8012 7.17891 19.0875 5.625 15 5.625C10.9125 5.625 7.19882 7.17891 4.25858 10.1191C2.05194 12.3258 1.05468 14.5312 1.01835 14.6203C0.965043 14.7402 0.9375 14.87 0.9375 15.0012C0.9375 15.1324 0.965043 15.2621 1.01835 15.382C1.05936 15.4746 2.05194 17.6754 4.25858 19.882C7.19882 22.8211 10.9125 24.375 15 24.375C19.0875 24.375 22.8012 22.8211 25.7414 19.882C27.948 17.6754 28.9406 15.4746 28.9816 15.382C29.0349 15.2621 29.0625 15.1324 29.0625 15.0012C29.0625 14.87 29.0349 14.7402 28.9816 14.6203ZM15 22.5C11.393 22.5 8.24179 21.1887 5.63319 18.6035C4.56285 17.5391 3.65224 16.3253 2.92968 15C3.65205 13.6745 4.56268 12.4608 5.63319 11.3965C8.24179 8.81133 11.393 7.5 15 7.5C18.607 7.5 21.7582 8.81133 24.3668 11.3965C25.4392 12.4605 26.3518 13.6743 27.0762 15C26.2312 16.5773 22.5504 22.5 15 22.5ZM15 9.375C13.8875 9.375 12.7999 9.7049 11.8749 10.323C10.9499 10.9411 10.2289 11.8196 9.80317 12.8474C9.37742 13.8752 9.26603 15.0062 9.48307 16.0974C9.70011 17.1885 10.2358 18.1908 11.0225 18.9775C11.8092 19.7641 12.8115 20.2999 13.9026 20.5169C14.9937 20.734 16.1247 20.6226 17.1526 20.1968C18.1804 19.7711 19.0589 19.0501 19.677 18.1251C20.2951 17.2001 20.625 16.1125 20.625 15C20.6234 13.5086 20.0303 12.0788 18.9758 11.0242C17.9212 9.96968 16.4914 9.37655 15 9.375ZM15 18.75C14.2583 18.75 13.5333 18.5301 12.9166 18.118C12.2999 17.706 11.8193 17.1203 11.5354 16.4351C11.2516 15.7498 11.1773 14.9958 11.322 14.2684C11.4667 13.541 11.8239 12.8728 12.3483 12.3483C12.8728 11.8239 13.541 11.4667 14.2684 11.3221C14.9958 11.1774 15.7498 11.2516 16.4351 11.5355C17.1203 11.8193 17.7059 12.2999 18.118 12.9166C18.5301 13.5333 18.75 14.2583 18.75 15C18.75 15.9946 18.3549 16.9484 17.6516 17.6516C16.9484 18.3549 15.9946 18.75 15 18.75Z"
                                        fill="black" fillOpacity="0.5"/>
                                </svg>
                            </div>
                            <input className="login_input" type="password" onChange={(e) => setPassword(e.target.value)}
                                   placeholder="Password"/>
                        </div>
                        <p className="Error" style={{display: errorP === false ? "none" : "block"}}> Некорректные
                            данные </p>

                        <p className="forget">Забыли пароль?</p>
                        <div className="Vhod" onClick={() => check()}>
                            <p className="btn-vhod"> Войти </p>
                        </div>
                        <div className="recovery_text">
                            <span className="reg">У вас еще не создана учетная запись? </span>
                            <Link className="reg-a" to="/signup">Регистрация</Link>
                        </div>
                    </div>
                    {/*<div>*/}
                    {/*    <p>Submitted Email: {submittedValues.email}</p>*/}
                    {/*    <p>Submitted Password: {submittedValues.password}</p>*/}
                    {/*</div>*/}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Authpage;