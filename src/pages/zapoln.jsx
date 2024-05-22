import SearchHeader from "../components/SearchHeader";
import FormHeader from "../components/form/FormHeader";
import Footer from "../components/Footer";
import React, {useState} from "react";
import {Button} from "@material-tailwind/react";
import FileInput from "../components/FileInput";
import FormInput from "../components/form/FormInput";
import Dropdown from "../components/Dropdown";
import {handlePostApplication} from "../api/APIServices";
import {useNavigate} from "react-router-dom";

function Zapoln() {

    const [formData, setFormData] = useState({
        theme: '',
        category: '',
        description: '',
        files: []
    });

    const options = [
        { id: 1, value: 'Бухгалтерия' },
        { id: 2, value: 'Отдел кадров' },
        { id: 3, value: 'Отдел инклюзивности' },
    ];

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleFileChange = (files) => {
        setFormData({...formData, files});
    };

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('theme', formData.theme);
        data.append('category', formData.category);
        data.append('description', formData.description);
        for (let i = 0; i < formData.files.length; i++) {
            data.append('files', formData.files[i]);
        }

        handlePostApplication(formData)
        navigate("/")
    };

    return (
        <>
            <SearchHeader/>
            <div className="w-full h-max flex justify-center mt-5">
                <div className="w-10/12 h-max bg-white rounded-b-lg">
                    <FormHeader title={"Заполнение заявки"}/>
                    <div className="redact w-11/12 mb-5">
                        <FormInput title={"1. Тема"}
                                   description={"Опишите свою проблему в размере нескольких слов."}
                                   inputName={"theme"}
                                   handleChange={handleChange}/>
                        <FormInput title={"2. Категория"}
                                   description={"Выберите категорию, которая лучше всего подходит под вашу проблему."}
                                   children={<Dropdown handleChange={handleChange} fieldName={'category'} options={options}/>}/>
                        <FormInput title={"3. Описание"}
                                   description={"Расскажите подробнее о причине вашего обращения."}
                                   inputName={"description"}
                                   handleChange={handleChange}/>
                        <FormInput title={"4. Дополнительные материалы"}
                                   description={"Загрузите дополнительные файлы, которые помогут нам лучше разобраться в ситуации."}
                                   children={<FileInput handleFileChange={handleFileChange}/>}/>

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
            <Footer/>
        </>
    );
}

export default Zapoln;