import React from 'react';
import './Input.css';

interface Props {
    onChange: (e: any) => void;
    inputStyle: string;
    value: string ;
    placeholderText: string;
    errorMsg: string;
}

const Input: React.FC<Props> = ({ inputStyle, onChange, value, placeholderText, errorMsg }) => {
    // change class to reflect "error style" if user enters 0  -- displays hidden div
    if (value === "0" && inputStyle === "input-people") {
        inputStyle = "input-people-error";
        errorMsg = "";
    } else {
        errorMsg="none";
    }

    const INPUT_STYLES = [
        "input-standard",
        "input-custom",
        "input-people",
        "input-people-error",
    ];

    // if the style entered is not on the list of possible classes, default to the standard input
    const checkStyle = INPUT_STYLES.includes(inputStyle) ? inputStyle : INPUT_STYLES[0];

    return(
        <>
            <div className="input-people-error-msg" style={{display: `${errorMsg}`}} > Can't be zero </div>
            <input className={`input ${checkStyle}`} 
                type="input"
                value={value}
                onChange={onChange}
                placeholder={placeholderText}
            ></input>
        </>
    );
  }

  export default Input;