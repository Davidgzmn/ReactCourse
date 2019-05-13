//Regular es5 function
const square = function(x){
    return x*x;
};

function square2(x){
    return x*x;
};

console.log(square(8));

//ES6 arrow function
const squareArrow = (x) => {
    return x*x;
}
console.log(squareArrow(9));

//ES6 arrow function expression

const squareArrowExp = (x) => x * x;
 console.log(squareArrowExp(4));

 const firstName = (name) => name.split(" ")[0];
 console.log(firstName("David Guzman"));