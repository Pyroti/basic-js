const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {    
    let count = 0;
    matrix = matrix.flat();
    matrix.forEach(element =>{
      if(element === '^^') count++;
    });
    return count;
};
