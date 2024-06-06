
const getAge = function(person) {
    if (!person.yearOfDeath) {
        return new Date().getFullYear() - person.yearOfBirth;
    } else {
        return person.yearOfDeath - person.yearOfBirth;
    }

}

const findTheOldest = function(xs) {
    return xs.reduce((oldest, x) => {
        const oldestAge = getAge(oldest);
        const currentAge = getAge(x);
        return currentAge > oldestAge ? x : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
