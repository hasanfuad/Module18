

function argumentsExample(num1, num2){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
         const num = arguments[i];
         sum = sum + num;
        
    }
    return sum;
}

console.log(argumentsExample(2,3,23,23,99));