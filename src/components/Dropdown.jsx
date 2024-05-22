import React, {useEffect, useState} from 'react';

const Dropdown = ({ handleChange, fieldName, options, defaultId, disabled }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [customSet, setCustomSet] = useState(false);

    const handleToggleDropdown = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
        }
    };

    const handleSelectOption = (option) => {
        if (!disabled) {
            setCustomSet(true)
            setSelectedOption(option);
            setIsOpen(false);
            if (handleChange) {
                handleChange({ target: { name: fieldName, value: option.value } });
            }
        }
    };

    useEffect(() => {
        console.log(`def ${defaultId}`)
        if (defaultId !== undefined && !customSet) {
            console.log('sset')
            setSelectedOption(options[defaultId]);
        }
    }, [options, defaultId, customSet]);

    return (
        <div className="dropdown">
            <button onClick={handleToggleDropdown} className="dropdown-toggle" disabled={disabled}>
                {selectedOption? selectedOption.value : 'Введите ответ'}
            </button>
            {!disabled && isOpen && (
                <div className="dropdown-options">
                    {options.map((option) => (
                        <div
                            key={option.id}
                            onClick={() => handleSelectOption(option)}
                            className="dropdown-option"
                        >
                            {selectedOption != null && selectedOption.id === option.id? <CheckedIcon selectedOption={selectedOption} option={option} /> : <CheckboxIcon selectedOption={selectedOption} option={option} />}
                            {option.value}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};


const CheckboxIcon = ({selectedOption, option}) => (
    <div className="dropdown-option-icon" style={{background: selectedOption != null && selectedOption.id === option.id ? "" : "none"}}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="10" height="10" rx="1" fill="#F5F6F7"/>
            <rect x="0.75" y="0.75" width="10.5" height="10.5" rx="1.25" stroke="black" stroke-opacity="0.7"
                  stroke-width="0.5"/>
        </svg>
    </div>
)

const CheckedIcon = ({selectedOption, option}) => (
    <div className="dropdown-option-icon">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.41959 2.83049C8.4977 2.90863 8.54158 3.01459 8.54158 3.12507C8.54158 3.23556 8.4977 3.34152 8.41959 3.41966L4.46126 7.37799C4.38312 7.4561 4.27716 7.49998 4.16667 7.49998C4.05619 7.49998 3.95023 7.4561 3.87209 7.37799L1.99709 5.50299C1.92119 5.42441 1.87919 5.31916 1.88014 5.20991C1.88109 5.10066 1.92491 4.99615 2.00217 4.9189C2.07942 4.84165 2.18392 4.79783 2.29317 4.79688C2.40242 4.79593 2.50767 4.83792 2.58626 4.91382L4.16667 6.49424L7.83042 2.83049C7.90856 2.75238 8.01452 2.7085 8.12501 2.7085C8.23549 2.7085 8.34145 2.75238 8.41959 2.83049Z"
                  fill="#F5F6F7"/>
        </svg>
    </div>
)

export default Dropdown;