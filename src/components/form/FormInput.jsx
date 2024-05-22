import React from "react";

const FormInput = ({title, description, handleChange, inputName, children, defaultValue, disabled}) => {
    console.log("FormInput", title, description, handleChange, inputName, children, defaultValue, disabled)
    return (
        <>
            <div className="Vopros">
                <p className="one">{title}</p>
                <p className="podheader">{description}</p>
                {!children &&
                    <input className="first" type="text" placeholder={!defaultValue ? "Введите ответ" : defaultValue}
                           onChange={handleChange}
                           name={inputName}
                           disabled={disabled}
                    />
                }
                {children}
            </div>
        </>
    )
}

export default FormInput;