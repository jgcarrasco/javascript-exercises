const _fibonacci = function(x) {
    if (x <= 1) { return x; }
    else {return fibonacci(x-1) + fibonacci(x - 2);}
}

const fibonacci = function(x) {
    x = Number(x);
    if (x < 0) { return "OOPS"; }
    return _fibonacci(x);
};

// Do not edit below this line
module.exports = fibonacci;
