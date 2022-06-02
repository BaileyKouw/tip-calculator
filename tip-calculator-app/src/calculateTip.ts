/*
    calculateTip takes in a string of total number of people, total bill, and a desired tip percentage
    returns: a number that is the total tip amount per person
*/

function calculateTip(tipPercentStr:string, peopleStr:string, billStr:string):number {
    let tipPercent:number = +tipPercentStr;
    let people:number = +peopleStr;
    let bill:number = +billStr;

    // change tip percent to decimal and multiply total bill
    tipPercent = tipPercent * .01;
    let tipAmount = bill * tipPercent;

    // Round tip to 2 decimal places for dollar amount formatting
    tipAmount= Math.round(tipAmount * 100) / 100
    tipAmount = tipAmount/people

    return tipAmount;
}

export default calculateTip;