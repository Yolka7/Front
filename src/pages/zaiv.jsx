import Footer from "../components/Footer";
import React, {useContext, useEffect, useState} from 'react';
import Dropdown from "../components/Dropdown";
import SearchHeader from "../components/SearchHeader";
import FormHeader from "../components/form/FormHeader";
import FormInput from "../components/form/FormInput";
import {Button} from "@material-tailwind/react";
import FileInput from "../components/FileInput";
import {useParams} from "react-router-dom";
import {getTicketById, handleUpdateTicket} from "../api/APIServices";
import {AuthContext} from "../contexts/AuthContext";

function Zaiv() {
    const [isLoaded, setIsLoaded] = useState(false);
    const {id} = useParams();
    const {user} = useContext(AuthContext)
    const [ticket, setTicket] = useState(null);
    const [formData, setFormData] = useState({
        id: id,
        status: '',
        answer: ''
    });

    const options = [
        { id: 1, value: 'В процессе' },
        { id: 2, value: 'На рассмотрении' },
        { id: 3, value: 'Закрыто' }
    ];
    const defaultId = options.findIndex(value => value.value === ticket?.status)

    useEffect(() => {
        if (user) {
            getTicketById(id)
                .then(res => {
                    setTicket(res.data)
                    setIsLoaded(true)
                })
                .catch(reason => console.log(reason));
        }
    }, [user]);

    useEffect(() => {
        console.log(ticket)
    }, [ticket]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        console.log(`formData ${JSON.stringify(formData)}`)
        e.preventDefault();

        handleUpdateTicket(formData)
    };

    return (
        <>
            <SearchHeader/>

            {ticket && isLoaded && <div className="w-full h-max flex justify-center mt-5">
                <div className="w-10/12 h-max bg-white rounded-b-lg">
                    <FormHeader title={`Заявка №${id}`}/>
                    <div className="redact w-11/12 mb-5">
                        <FormInput title={"1. Тема"} defaultValue={ticket.theme} disabled={true}/>
                        <FormInput title={"2. Отправитель"} defaultValue={ticket.username} disabled={true}/>
                        <FormInput title={"3. Категория"} defaultValue={ticket.category} disabled={true}/>
                        <FormInput title={"4. Описание"} defaultValue={ticket.description} disabled={true}/>
                        <FormInput title={"5. Дополнительные материалы"}
                                   children={<FileInput/>}
                        />
                        <FormInput title={"6. Статус"}
                                   children={<Dropdown handleChange={handleChange} fieldName={'status'} options={options} defaultId={defaultId}/>}
                        />
                        <FormInput title={"7. Ответ"}
                                   inputName={"answer"}
                                   handleChange={handleChange}
                                   defaultValue={ticket.answer}/>
                        <FormInput title={"8. Файл ответа"}
                                   children={<FileInput/>}
                        />

                        <div className="Knopki">
                            <Button className="text-sm bg-red-900 rounded-md w-36 h-10">
                                Отменить
                            </Button>
                            <Button className="text-sm bg-green-900 rounded-md w-36 h-10" onClick={handleSubmit}>
                                Отправить
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            }

            <Footer/>
        </>
    );
}

export default Zaiv;