const reverseString = function(s) {
    rs = "";
    for (let i=s.length-1; i >= 0; i--) {
        rs += s[i];
    }
    return rs
};

// Do not edit below this line
module.exports = reverseString;
