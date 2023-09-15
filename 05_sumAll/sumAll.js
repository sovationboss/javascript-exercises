const sumAll = (a, b) => {
    let sum = 0;

    //returns "ERROR" when the either parameter is not a number
    if(!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";

    //"Orders" the two parameters from mix to max
    let min = Math.min(a, b);
    let max = Math.max(a, b);

    //returns "ERROR" when the either parameter is negative
    if(min < 0 || max < 0) return "ERROR";

    for(let i = min; i <= max; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
