const removeFromArray = function(arr, ...args) {
    for(const arg of args) {
        if(arr.includes(arg)){  //same as: if(arr.indexOf(arg) >= 0)
            let indexToRemove = arr.indexOf(arg);
            arr.splice(indexToRemove, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
