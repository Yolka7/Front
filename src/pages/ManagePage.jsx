import React, {useEffect, useState} from 'react';
import Footer from "../components/Footer";
import SearchHeader from "../components/SearchHeader";
import {useNavigate} from "react-router-dom";
import {getUserInfo} from "../api/APIServices";
import {Button} from "@material-tailwind/react";

const ManagePage = () => {

    const numbers = [1, 2, 3, 4, 5, 6];

    const [showContent, setShowContent] = useState(true);
    const [rotate, setRotate] = useState(false);

    const handleToggleContent = () => {
        setShowContent(!showContent);
        setRotate(!rotate)
    }

    const navigate = useNavigate();
    useEffect(() => {
        async function checkAdmin() {
            try {
                const response = await getUserInfo();

                if (response.data.username !== 'admin1') {
                    console.log(response.data)
                    throw new Error('wrong user');
                }
            } catch (error) {
                console.log(error);
                navigate('/');
            }
        }

        checkAdmin();
    }, [navigate]);

    return (
        <>
            <SearchHeader page={'staff'}/>
            <div className="main">
                <div className="applications" onClick={handleToggleContent}>
                    <div className="applications_logo">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"
                             style={{transform: rotate ? 'rotate(-90deg)' : 'rotate(0deg)'}}>
                            <path
                                d="M6.99997 1.66669L0.999971 1.66669C0.939224 1.66688 0.879679 1.68364 0.827746 1.71515C0.775813 1.74667 0.733458 1.79175 0.705239 1.84554C0.677022 1.89934 0.664009 1.95981 0.667603 2.02045C0.671198 2.0811 0.691263 2.13961 0.725638 2.18969L3.72564 6.52303C3.84997 6.70269 4.1493 6.70269 4.27397 6.52303L7.27397 2.18969C7.3087 2.13971 7.32906 2.08117 7.33285 2.02043C7.33664 1.95969 7.32371 1.89907 7.29547 1.84516C7.26722 1.79125 7.22475 1.74611 7.17265 1.71464C7.12055 1.68318 7.06083 1.6666 6.99997 1.66669Z"
                                fill="black" fillOpacity="0.7"/>
                        </svg>
                    </div>
                    <p className="text-xs text-slate-700">Бухгалтерия</p>
                </div>
                <hr className="palka"/>
                {/*<div className="Palka">*/}

                <div className={showContent ? "okna" : "hidden okna"}>
                    {
                        numbers.map((num, index) => (
                            <div className="window flex" key={index}>
                                <img src="./papich.jpeg" className="h-full w-1/3 rounded-l-lg"></img>
                                <div className="flex flex-col w-11/12 pt-2 pb-2 pl-4 pr-4 justify-between">
                                    <div className="text-slate-700">
                                        <p className="text-sm">Папачий папаний</p>
                                        <p className="text-xs">Бухгалтерия</p>
                                        <p className="text-xs">02.10.1869, 154 года </p>
                                    </div>
                                    <div className="text-white">
                                        <Button
                                            className="w-full bg-green-900 rounded-md h-10"
                                            style={{marginBottom: "5px"}}
                                        >
                                            Сменить должность
                                        </Button>
                                        <Button className="w-full bg-red-900 rounded-md h-10">
                                            Уволить
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default ManagePage;