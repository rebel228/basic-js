const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (straight) {
    this.straight = straight;
  }
  encrypt(str, key) {
    if(!str || !key) throw new Error('Incorrect arguments!');
    let string = str.toUpperCase();
    let keystring = key.toUpperCase();
    let result = '';
    for (let i = 0, j = 0; i < string.length; i++) {
      if (string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90) {
        let letter = ((string[i].charCodeAt() - 65) + (keystring[j%keystring.length].charCodeAt() - 65)) % 26;
        result += String.fromCharCode(letter + 65);
        j++;
      } else {
        result += string[i];
      }
    }
    if (this.straight === false) {
      return result.split('').reverse().join('');
    }
    else return result;
  }
  decrypt(str, key) {
    if(!str || !key) throw new Error('Incorrect arguments!');
    let string = str.toUpperCase();
    let keystring = key.toUpperCase();
    let result = '';
    for (let i = 0, j = 0; i < string.length; i++) {
      if (string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90) {
        let letter = ((string[i].charCodeAt() - 65) - (keystring[j%keystring.length].charCodeAt() - 65)) % 26;
        if (letter >= 0) {
          result += String.fromCharCode(letter + 65);
        } else {
          result += String.fromCharCode(letter + 26 + 65);
        }
        j++;
      } else {
        result += string[i];
      }
    }
    if (this.straight === false) {
      return result.split('').reverse().join('');
    }
    else return result;
  }
}
module.exports = {
  VigenereCipheringMachine
};
