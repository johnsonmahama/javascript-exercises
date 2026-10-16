const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR"
    }
    
    count = 0
    newString = ""
    while (count < num) {
        newString = newString + string
        count++
    }

    return newString
};

// Do not edit below this line
module.exports = repeatString;
