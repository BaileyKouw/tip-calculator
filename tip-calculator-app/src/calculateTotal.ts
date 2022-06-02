/*
    calculateTotal takes in a string of total number of people, total bill, and a tip result as a number
    returns: a number that is the total bill (including tip) per person
*/
function calculateTotal(peopleStr:string, billStr:string, tipResult:number):number{
    let people:number = +peopleStr;
    let bill:number = +billStr;

    let finalResult:number = (bill + tipResult) / people;
    return finalResult;
}

export default calculateTotal;