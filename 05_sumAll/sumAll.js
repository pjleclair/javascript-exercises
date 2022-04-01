const sumAll = function(start, end) {
    /*initial definitions*/
    let sum = 0;
    /*check to see if larger number first*/
    if ((start < 0) || (end < 0)) {
        return('ERROR');
    } else if ((Number.isInteger(start)==false) || (Number.isInteger(end) == false)) {
        return ('ERROR');
    }
    if (start > end) {
        /*loop and sum numbers between end points*/
        for (start; start >= end; start--) {
            sum += start;
        }
    } else {
        /*loop and sum numbers between end points*/
        for (start; start <= end; start++) {
            sum += start;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
