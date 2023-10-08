const palindromes = function (str) {
    const regex = /[\W_]/g;
    const lowRegStr = str.toLowerCase().replace(regex, '');
    return lowRegStr.split('').reverse().join('') == lowRegStr;
};

// Do not edit below this line
module.exports = palindromes;
