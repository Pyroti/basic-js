const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, rec = 1) {
    let res = rec;
    for (let elem of arr) {
      if (Array.isArray(elem)) {
        let subDepth = this.calculateDepth(elem, rec+1);
        if (subDepth > res) res = subDepth;       
      }
    }
    return res;
  }
};