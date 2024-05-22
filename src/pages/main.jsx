import React, {useContext, useState} from 'react';
import Footer from "../components/Footer";
import SearchHeader from "../components/SearchHeader";
import AuthComponentTest from "../components/AuthComponentTest";

function Main() {

    const numbers = [1, 2, 3, 4, 5, 6];

    const [showContent, setShowContent] = useState(true);
    const [rotate, setRotate] = useState(false);
    
    const handleToggleContent = () => {
        setShowContent(!showContent);
        setRotate(!rotate)
    }

    return (
        <>
            <AuthComponentTest/>
            <SearchHeader/>
            <div className="Zaiav"> Мои заявки</div>
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
                    <p className="Vse"> Все заявки</p>
                </div>
                <hr className="palka"/>
                {/*<div className="Palka">*/}

                <div className={showContent ? "okna" : "hidden okna"}>
                    {
                        numbers.map((num, index) => (
                            <div className="window" key={index}>
                                <div className="window_text">
                                    <p className="windows_title">Сломался стул</p>
                                    <p className="windows_subtitle">Н. А. Абрикосова, Отдел по закупке</p>
                                    <p className="windows_body">Сломанное стуло создает дискомфорт для моей спины и
                                        делает
                                        невозможным длительное пребывание на рабочем месте. Это может </p>
                                    <div className="process_block">
                                        <div className="process_icon">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="9" cy="9" r="9" fill="#FA842B"/>
                                            </svg>
                                        </div>
                                        <p className="process_text">В процессе</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    <div className="window window_add_new">
                        <div className="window_text">

                        </div>
                    </div>
                </div>

                <div className="applications">
                    <div className="applications_logo">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.99997 1.66669L0.999971 1.66669C0.939224 1.66688 0.879679 1.68364 0.827746 1.71515C0.775813 1.74667 0.733458 1.79175 0.705239 1.84554C0.677022 1.89934 0.664009 1.95981 0.667603 2.02045C0.671198 2.0811 0.691263 2.13961 0.725638 2.18969L3.72564 6.52303C3.84997 6.70269 4.1493 6.70269 4.27397 6.52303L7.27397 2.18969C7.3087 2.13971 7.32906 2.08117 7.33285 2.02043C7.33664 1.95969 7.32371 1.89907 7.29547 1.84516C7.26722 1.79125 7.22475 1.74611 7.17265 1.71464C7.12055 1.68318 7.06083 1.6666 6.99997 1.66669Z"
                                fill="black" fillOpacity="0.7"/>
                        </svg>
                    </div>
                    <p className="Vse">Скрыть</p>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default Main;