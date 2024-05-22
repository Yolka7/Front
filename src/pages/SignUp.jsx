import Header from "../components/Header";
import Footer from "../components/Footer";
import {useContext, useEffect, useState} from 'react';
import {handleSignup} from "../api/APIServices";
import AuthComponentTest from "../components/AuthComponentTest";
import {AuthContext} from "../contexts/AuthContext";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";

function SignUp() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [repeatpassword, setRepeatpassword] = useState('')

    const [error, setError] = useState(false);
    const { user } = useContext(AuthContext);
    const [isLoggedUn, setIsLoggedUn] = useState(user != null);
    const [email, setEmail] = useState("");

    const [errorP, setErrorP] = useState(false);
    const [password, setPassword] = useState("");

    const [submittedValues, setSubmittedValues] = useState({email: "", password: "", firstName: "", lastName: "", repeatpassword: ""});
    const navigate = useNavigate();

    const check = async () => {
        setError(email.length < 3)
        setErrorP(password.length < 8)
        setSubmittedValues({email, password, firstName, lastName, repeatpassword});

        if (error || errorP) return;
        await handleSignup(email, password, firstName, lastName, repeatpassword).then(() => setIsLoggedUn(true))
    }

    useEffect(() => {
        if (isLoggedUn || Cookies.get("token")) {
            navigate("/signin")
        }
    }, [isLoggedUn]);

    return (
        <>
            <Header/>
            <AuthComponentTest/>
            <div class="auth">
                <div class="register login_form">
                    <div className="signin_title_block">
                        <p className="login_title">Регистрация</p>
                        <p className="podheader">Пожалуйста, введите данные вашего будущего профиля в полях</p>
                    </div>
                    <div class="ots">
                        <p class="m-login pocht">Почта</p>
                        <div className="login_box">
                            <div className="login_icon">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5 25C4.3125 25 3.72417 24.7554 3.235 24.2663C2.74583 23.7771 2.50083 23.1883 2.5 22.5V7.5C2.5 6.8125 2.745 6.22417 3.235 5.735C3.725 5.24583 4.31333 5.00083 5 5H25C25.6875 5 26.2763 5.245 26.7663 5.735C27.2563 6.225 27.5008 6.81333 27.5 7.5V22.5C27.5 23.1875 27.2554 23.7763 26.7663 24.2663C26.2771 24.7563 25.6883 25.0008 25 25H5ZM15 16.25L5 10V22.5H25V10L15 16.25ZM15 13.75L25 7.5H5L15 13.75ZM5 10V7.5V22.5V10Z"
                                        fill="black" fillOpacity="0.5"/>
                                </svg>
                            </div>
                            <input className="login_input" type="text" onChange={(e) => setEmail(e.target.value)}
                                   placeholder="Email"/>
                        </div>
                        <div className="dir">
                            <div className="Name">
                                <p className="m-login name">Имя</p>
                                <div className="login_box">
                                    <div className="login_icon">
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.04165 17.1417L9.87602 16.6125L20.9208 5.43542C21.0079 5.34614 21.0564 5.22618 21.0559 5.10145C21.0553 4.97671 21.0056 4.85721 20.9177 4.76875L20.2562 4.1C20.2135 4.05608 20.1624 4.02112 20.106 3.99715C20.0496 3.97318 19.989 3.96068 19.9277 3.96039C19.8664 3.9601 19.8057 3.97202 19.7491 3.99545C19.6924 4.01889 19.6411 4.05337 19.5979 4.09688L8.58227 15.2448L8.0406 17.1406L8.04165 17.1417ZM21.5656 2.775L22.2271 3.44479C23.1396 4.36875 23.1479 5.85938 22.2437 6.77396L10.8625 18.2927L6.94165 19.4219C6.70227 19.4889 6.44608 19.4582 6.22931 19.3365C6.01254 19.2149 5.85289 19.0122 5.7854 18.7729C5.73517 18.6009 5.73445 18.4182 5.78331 18.2458L6.92394 14.2458L18.275 2.75729C18.4908 2.53996 18.7478 2.36778 19.0309 2.25079C19.3139 2.1338 19.6175 2.07434 19.9238 2.0759C20.2301 2.07745 20.533 2.13997 20.8149 2.25982C21.0968 2.37967 21.352 2.55549 21.5656 2.775ZM9.56665 3.97604C10.0833 3.97604 10.5021 4.4 10.5021 4.92292C10.5029 5.04653 10.4793 5.16909 10.4328 5.2836C10.3862 5.3981 10.3175 5.50231 10.2306 5.59025C10.1437 5.67818 10.0404 5.74814 9.92646 5.79611C9.81253 5.84407 9.69026 5.86911 9.56665 5.86979H5.82498C4.79165 5.86979 3.95415 6.71771 3.95415 7.7625V19.1229C3.95415 20.1688 4.79165 21.0167 5.82498 21.0167H17.05C18.0833 21.0167 18.9219 20.1688 18.9219 19.1229V15.3365C18.9219 14.8135 19.3406 14.3896 19.8573 14.3896C20.3739 14.3896 20.7927 14.8135 20.7927 15.3375V19.1229C20.7927 21.2146 19.1166 22.9104 17.05 22.9104H5.82498C3.75831 22.9104 2.08331 21.2146 2.08331 19.1229V7.7625C2.08331 5.67188 3.75831 3.97604 5.82498 3.97604H9.56665Z"
                                                fill="black" fillOpacity="0.5"/>
                                        </svg>
                                    </div>
                                    <input className="login_input" type="text" onChange={(e) => setFirstName(e.target.value)}
                                   placeholder="Name"/>
                                </div>
                            </div>
                            <div className="fam">
                                <p className="m-login firstn">Фамилия</p>
                                <div className="login_box">
                                    <div className="login_icon">
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.04165 15.1417L7.87602 14.6125L18.9208 3.43542C19.0079 3.34614 19.0564 3.22618 19.0559 3.10145C19.0553 2.97671 19.0056 2.85721 18.9177 2.76875L18.2562 2.1C18.2135 2.05608 18.1624 2.02112 18.106 1.99715C18.0496 1.97318 17.989 1.96068 17.9277 1.96039C17.8664 1.9601 17.8057 1.97202 17.7491 1.99545C17.6924 2.01889 17.6411 2.05337 17.5979 2.09688L6.58227 13.2448L6.0406 15.1406L6.04165 15.1417ZM19.5656 0.775003L20.2271 1.44479C21.1396 2.36875 21.1479 3.85938 20.2437 4.77396L8.86248 16.2927L4.94165 17.4219C4.70227 17.4889 4.44608 17.4582 4.22931 17.3365C4.01254 17.2149 3.85289 17.0122 3.7854 16.7729C3.73517 16.6009 3.73445 16.4182 3.78331 16.2458L4.92394 12.2458L16.275 0.757295C16.4908 0.539959 16.7478 0.367775 17.0309 0.250786C17.3139 0.133797 17.6175 0.0743449 17.9238 0.0758963C18.2301 0.0774477 18.533 0.139972 18.8149 0.259822C19.0968 0.379673 19.352 0.555492 19.5656 0.775003ZM7.56665 1.97604C8.08331 1.97604 8.50206 2.4 8.50206 2.92292C8.50289 3.04653 8.47934 3.16909 8.43276 3.2836C8.38618 3.3981 8.31749 3.50231 8.23062 3.59025C8.14374 3.67818 8.04038 3.74814 7.92646 3.79611C7.81253 3.84407 7.69026 3.86911 7.56665 3.86979H3.82498C2.79165 3.86979 1.95415 4.71771 1.95415 5.7625V17.1229C1.95415 18.1688 2.79165 19.0167 3.82498 19.0167H15.05C16.0833 19.0167 16.9219 18.1688 16.9219 17.1229V13.3365C16.9219 12.8135 17.3406 12.3896 17.8573 12.3896C18.3739 12.3896 18.7927 12.8135 18.7927 13.3375V17.1229C18.7927 19.2146 17.1166 20.9104 15.05 20.9104H3.82498C1.75831 20.9104 0.083313 19.2146 0.083313 17.1229V5.7625C0.083313 3.67188 1.75831 1.97604 3.82498 1.97604H7.56665Z"
                                                fill="black" fillOpacity="0.5"/>
                                        </svg>
                                    </div>
                                    <input className="login_input" type="text" onChange={(e) => setLastName(e.target.value)}
                                   placeholder="Last name"/>
                                </div>
                            </div>
                        </div>
                        <p class="m-login parol">Пароль</p>
                        <input className="m-0" type="password" onChange={(e) => setPassword(e.target.value)}
                                   placeholder="Password"/>
                        <p class="m-login podtparol">Подтвердите пароль</p>
                        <input className="m-0" type="password" onChange={(e) => setRepeatpassword(e.target.value)}
                                   placeholder="Repeat password"/>
                        <div className="m-top-2_5rem m-bottom-2_5rem Vhod" onClick={() => check()}>
                            <p className="btn-vhod"> Создать аккаунт </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default SignUp;