const sumAll = function(num1, num2) {
    
    if (typeof(num1) != "number" || typeof(num2) != "number") {
        result = 'ERROR'
    } else if (num1 < 0 || num2 < 0) {
        result = 'ERROR'
    } else if (num1 % 1 != 0 || num2 % 1 !=  0) {
        result = 'ERROR'
    } else {
        
        minNum = Math.min(num1, num2)
        maxNum = Math.max(num1, num2)

        array = []
        number = minNum

        while (number < maxNum + 1) {
            array.push(number)
            number++
            
        }

        result = array.reduce((sum, value) => sum + value)

    }
    console.log(result)
    return result
};


sumAll(4,1)

// Do not edit below this line
module.exports = sumAll;
