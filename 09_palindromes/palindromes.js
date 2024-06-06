const _palindromes = function(s) {
    if (s.length <= 1) { return true; }
    else { return (s[0] === s[s.length - 1]) && palindromes(s.slice(1, -1))};
}

const palindromes = function (s) {
    s = s.replace(/[ .,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    return _palindromes(s);
};

// Do not edit below this line
module.exports = palindromes;
