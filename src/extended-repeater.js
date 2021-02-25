const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {
  repeatTimes = 1,
  separator = "+",
  addition = "",
  additionRepeatTimes = 1,
  additionSeparator = "|",
}) {  
  const repeat = (str, separator, repeatTimes) => repeatTimes <=1 ? str : `${str}${separator}${repeat(str, separator, repeatTimes-1)}`
  return result = repeat(`${str}${repeat(addition, additionSeparator, additionRepeatTimes)}`, separator, repeatTimes);
};
  