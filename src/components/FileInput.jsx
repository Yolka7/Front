import React, {useState} from 'react';

const FileInput = ({handleFileChange}) => {
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
        handleFileChange(e.target.files)
    };

    return (
        <label>
            <input className="image-upload" type="file" onChange={handleChange} />
            <div className="file-input-wrapper">
                <svg width="34" height="40" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M33.4531 11.2812L22.5156 0.34375C22.2961 0.123918 21.9982 0.000273519 21.6875 0H2.9375C2.2123 0 1.5168 0.288085 1.00401 0.80088C0.49121 1.31367 0.203125 2.00917 0.203125 2.73438V37.1094C0.203125 37.8346 0.49121 38.5301 1.00401 39.0429C1.5168 39.5557 2.2123 39.8438 2.9375 39.8438H31.0625C31.7877 39.8438 32.4832 39.5557 32.996 39.0429C33.5088 38.5301 33.7969 37.8346 33.7969 37.1094V12.1094C33.7966 11.7987 33.673 11.5008 33.4531 11.2812ZM22.8594 4L29.7969 10.9375H22.8594V4ZM31.0625 37.5H2.9375C2.8339 37.5 2.73454 37.4588 2.66129 37.3856C2.58803 37.3123 2.54688 37.213 2.54688 37.1094V2.73438C2.54688 2.63077 2.58803 2.53142 2.66129 2.45816C2.73454 2.3849 2.8339 2.34375 2.9375 2.34375H20.5156V12.1094C20.5156 12.4202 20.6391 12.7182 20.8589 12.938C21.0786 13.1578 21.3767 13.2812 21.6875 13.2812H31.4531V37.1094C31.4531 37.213 31.412 37.3123 31.3387 37.3856C31.2655 37.4588 31.1661 37.5 31.0625 37.5Z"
                        fill="black" fillOpacity="0.7"/>
                </svg>
                <span>{file ? file.name : 'Выбрать файл'}</span>
            </div>
        </label>
    );
};

export default FileInput;
