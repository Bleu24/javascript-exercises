const sumAll = function(num1, num2) {
    // Check if inputs are integers and not negative
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    // Find the start and end of the range
    const start = Math.min(num1, num2);
    const end = Math.max(num1, num2);

    // Calculate the sum
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
