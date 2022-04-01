const ftoc = function(temp) {
  let newtemp = (temp-32)*(5/9);
  console.log(newtemp);
  if ((Number.isInteger(newtemp))==false)  
    return Number(newtemp.toFixed(1));
  else
    return Number(newtemp);
};

const ctof = function(temp) {
  let newtemp = (temp*(9/5))+32;
  console.log(newtemp);
  console.log(Number.isInteger(newtemp));
  if ((Number.isInteger(newtemp))==false) {
    console.log(newtemp.toFixed(1)); 
    return Number(newtemp.toFixed(1));
  } else {
    return Number(newtemp);
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
