const fibonacci = function(num) {
    num = parseInt(num);
    if (num < 0) return "OOPS";

    let arr = [0, 1];
    for(let i = 2; i < num + 1; i++){
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[num];

    /*
    if (num < 2) return num;
    return fibonacci(num - 1) + fibonacci(num - 2); 
    --> recursion works but gets significantly slower 
    the higher the number gets
    */
};

// Do not edit below this line
module.exports = fibonacci;
