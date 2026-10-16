const reverseString = function(string) {
    stringLength = string.length

    count = 0
    newString = ""
    times = stringLength - 1

    while (count < stringLength) {
        letter = string[times]
        newString = newString + letter
        times--
        count++
    }

    return newString
};

// Do not edit below this line
module.exports = reverseString;
