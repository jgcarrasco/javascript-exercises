const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(xs) {
  return xs.reduce((acc, x) => {
    return acc += x;
  }, 0);
};

const multiply = function(xs) {
  return xs.reduce((acc, x) => {
    return acc *= x;
  }, 1);
};

const power = function(a, b) {
  if (b === 0) {
    return 1;
  } else {
    let acc = a

    for (let i = 0; i < b - 1; i++) {
      acc *= a;
    }
    return acc;
  }
};

const factorial = function(x) {
  if (x < 2) { return 1; }
  else { return x * factorial(x-1); }
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
