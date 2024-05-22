import Footer from "../components/Footer";
import Header from "../components/Header";
import React from 'react';

function Kod() {
    return (
        <>
            <Header/>
            <div class="vrop">
                <div class="content">
                    <div class="kod">
                        <div class="window_kod">
                            <p class="header_kod">Код доступа</p>
                            <p class="podheader_kod">Пожалуйста, введите данные код доступа к регистрации в поле</p>
                            <p class="koddos_kod">Код доступа</p>
                            <input type="number" placeholder="Number"/>
                            {/* <input className="*" type="Number" placeholder="Введите ответ" onChange={handleChange} name="theme"/> */}
                            <p class="podtv_kod">Подтвердить</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Kod;