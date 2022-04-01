const removeFromArray = function(array, ...vals) {
    let filter=vals;
    for (let i = 0; i < filter.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] === filter[i]) {
                array.splice(j,1);
            }
        }
    }
    console.log(array);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
