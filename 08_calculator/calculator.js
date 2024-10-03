const add = function(addend1, addend2) {
	return addend1 + addend2;
};

const subtract = function(minuend, subtrahend) {
	return minuend - subtrahend;
};

const sum = function(arr) {
	return arr.reduce((TOTAL, current) => TOTAL + current, 0);
};

const multiply = function(arr) {
	return arr.reduce((TOTAL, current) => TOTAL * current, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
	if (num === 0) {
		return 1;
	}
	return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
