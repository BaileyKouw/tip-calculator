import React from 'react';
import './Display.css';
import Button from '../Button/Button';

interface Props {
    tipAmount: number;
    totalAmount: number;
}

// formatting USD syntax help from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
// Intl.NumberFormat styles a number in the USD form xxx.xx 
let formatDollars = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

const Display: React.FC<Props> = ({ tipAmount, totalAmount }) => {
    // if amount is NaN or infinity: alert user of error and display ERROR
    const displayTipText = (!isFinite(tipAmount) ? "ERROR" : formatDollars.format(tipAmount));
    const displayTotalText = (!isFinite(totalAmount) ? "ERROR" : formatDollars.format(totalAmount));

    // if the tip amount or total amount exist and are not 0, enable the reset button (disabled until user enters info into app)
    const resetButtonToggle: boolean = tipAmount !== 0 || totalAmount !== 0 ? false : true;

    return (
        <div className="display-wrapper">

            <div className = "results-wrapper">
                <div className="labels">
                    <p className="category-label"> Tip Amount </p>
                    <p className="per-person-label"> / person </p>
                </div>
                <div className="display-text">
                    <div className="result-label tip-label"> {displayTipText} </div>
                </div>
                <div className="labels">
                    <p className="category-label"> Total </p>
                    <p className="per-person-label"> / person </p>
                </div>
                <div className='display-text'>
                    <div className="result-label total-label"> {displayTotalText} </div>
                </div>
            </div>

            <Button 
                onClick={() => {window.location.reload();}} 
                buttonDisabled= {resetButtonToggle}
                buttonClicked="test"
                buttonStyle= "btn-reset"
                buttonWidth="btn-reset-width" >
                    RESET 
            </Button>
        </div>
    );
}

export default Display;