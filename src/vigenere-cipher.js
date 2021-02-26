const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(flag = true) {
    this.flag = flag;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Error');
    
    let result = '';
    
    key = key.toUpperCase();
    message = message.toUpperCase();

    for (let i = 0, j = 0; i < message.length; i++){
      if (j == key.length) j = 0;
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        result += String.fromCharCode(((message.charCodeAt(i) - 65) + (key.charCodeAt(j) - 65)) % 26 + 65);
        j++;
      }
      else result += message[i];
    }

    return this.flag ? result : result.split('').reverse().join('');

  } 

  decrypt(message, key) {
    if (!message || !key) throw new Error('Error');      
    
    let result = '';

    key = key.toUpperCase();
    message = message.toUpperCase();

    for (let i = 0, j = 0; i < message.length; i++){
      if (j == key.length) j = 0;
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        result += String.fromCharCode(((message.charCodeAt(i) - 65) - (key.charCodeAt(j) - 65) + 26) % 26 + 65);
        j++;
      }
      else result += message[i];
    } 

    return this.flag ? result : result.split('').reverse().join('');
  }    
}

module.exports = VigenereCipheringMachine;
