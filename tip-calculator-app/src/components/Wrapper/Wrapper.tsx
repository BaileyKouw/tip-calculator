import React, {useState} from 'react';
import './Wrapper.css';
import DollarIcon from '../../images/icon-dollar.svg';
import PersonIcon from '../../images/icon-person.svg';
import Display from '../Display/Display';
import Input from '../Input/Input';
import calculateTip from '../../calculateTip';
import calculateTotal from '../../calculateTotal';
import Button from '../Button/Button';

const Wrapper: React.FC= () => {
    // People and Bill Input States
    const [bill, setBill] = useState<string>("");
    const [people, setPeople] = useState<string>("1");

    // keep track of tip percentage -- also used for button toggle and custom tip display value
    const [tipAmount, setTipAmount] = useState<string>("");
    const [customTip, setCustomTip] = useState<string>("");

    // get the amount of tip per person and use this to calculate the total per person
    var tipRslt = calculateTip(tipAmount, people, bill);
    var totalRslt = calculateTotal(people, bill, tipRslt);

    return(
    <div className="wrapper"> 
        <div className = "wrap-left">

            {/* total bill input */}
            <p className="label"> Bill </p>
            <img src={DollarIcon} className="dollar-icon" width="12px" alt="dollar icon"></img>
            <Input 
                onChange = {(e: React.FormEvent<HTMLInputElement>) => {
                    setBill(e.currentTarget.value)
                }}
                value = {bill}
                inputStyle="input-standard"
                placeholderText="0.00"
                errorMsg=""
            />

            {/* tip selection buttons */}
            <p className="label"> Select Tip % </p>
            <div className="btn-row">
                <Button
                    onClick= {()=> {
                        setTipAmount("5");
                    }} 
                    buttonClicked = { tipAmount === "5" ? "on" : "off" }
                    buttonDisabled= { false }
                    buttonStyle="btn-tips"
                    buttonWidth="btn-tips-width">
                        5% 
                </Button>

                <Button
                    onClick= {()=> {
                        setTipAmount("10");
                    }} 
                    buttonClicked = { tipAmount === "10" ? "on" : "off" }
                    buttonDisabled= { false }
                    buttonStyle="btn-tips"
                    buttonWidth="btn-tips-width">
                        10% 
                </Button>

                <Button
                    onClick= {()=> {
                        setTipAmount("15");
                    }} 
                    buttonClicked = { tipAmount === "15" ? "on" : "off" }
                    buttonDisabled= { false }
                    buttonStyle="btn-tips"
                    buttonWidth="btn-tips-width">
                        15% 
                </Button>
            

            <div className="btn-row">
            <Button
                    onClick= {()=> { setTipAmount("25"); }} 
                    buttonClicked = { tipAmount === "25" ? "on" : "off" }
                    buttonDisabled= { false }
                    buttonStyle="btn-tips"
                    buttonWidth="btn-tips-width">
                        25% 
            </Button>

                <Button
                    onClick={()=> { setTipAmount("50"); }} 
                    buttonClicked = { tipAmount === "50" ? "on" : "off" }
                    buttonDisabled= {false}
                    buttonStyle="btn-tips"
                    buttonWidth="btn-tips-width">
                        50% 
                </Button>

                <Input
                    onChange= {(e:React.FormEvent<HTMLInputElement>) => {
                        setTipAmount(e.currentTarget.value);
                        setCustomTip(e.currentTarget.value);
                    }}
                    value = {`${customTip}`}
                    inputStyle="input-custom"
                    placeholderText="Custom"
                    errorMsg=""
                ></Input>
                </div>
            </div>   

            {/* total people input */}
            <p className="label"> Number of People </p>
            <img src={PersonIcon} className="person-icon" width="12px" alt="person icon"></img>
            <Input
                onChange = {(e: React.FormEvent<HTMLInputElement>) => {
                    setPeople(e.currentTarget.value)
                }}
                value={people}
                inputStyle="input-people"
                placeholderText="1"
                errorMsg=""
            />
        </div>

        {/* right side display box */}
        <div className = "wrap-right">
            <Display 
               tipAmount =  {tipRslt}
               totalAmount = {totalRslt}
            />
        </div>
    </div>
    );
  }
  
  export default Wrapper;