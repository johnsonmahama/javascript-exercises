const removeFromArray = function(array, ...remove) {

    newArray = []
    remove.forEach(element => {
        newArray = array.filter(item => item !== element)
        array = newArray
    });

    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
