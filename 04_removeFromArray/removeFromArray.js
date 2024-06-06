const removeFromArray = function(xs) {
    for (let i = 0; i < arguments.length; i++) {
        let index = xs.indexOf(arguments[i]);
        while (index > -1) {
            xs.splice(index, 1);
            index = xs.indexOf(arguments[i]);
        }
    }
    return xs;
};

// Do not edit below this line
module.exports = removeFromArray;
