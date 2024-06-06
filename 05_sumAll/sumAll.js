const sumAll = function(a, b) {
    if ((typeof(a) != "number") || (typeof(b) != "number")) {
        return "ERROR";
    }
    if ((a < 0) | (b < 0)) {
        return "ERROR";
    }

    let result = 0;
    
    if (a > b) {
        let aux = a;
        a = b;
        b = aux;
    }

    for (let x=a; x <= b; x++) {
        result += x;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
