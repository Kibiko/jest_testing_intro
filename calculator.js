const sum = function(a, b){
    return a + b;
};

const subtract = (a,b) => {
    return a-b;
};

const multiply = (a,b) => {
    return a*b;
};

const divide = (a,b) => {
    if(b === 0){
        return NaN;
    }
    return a/b;
};

const modulus = (a,b) => {
    if(b === 0){
        return NaN;
    }
    return a%b;
};

const even = (a) => {
    return !modulus(a,2);
};

const odd = (a) => {
    return modulus(a,2);
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
