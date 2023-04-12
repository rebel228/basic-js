const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let separator = '+';
  let additionSeparator = '|';
  if(options.separator) separator = options.separator;
  if(options.additionSeparator) additionSeparator = options.additionSeparator.toString();
  let string = '';
  let additionString = '';
  try {
    if(typeof(str) === 'null') string = 'null';
    if(typeof(options.addition) === 'null') additionString = 'null';
    if(typeof(str) === 'object') string = `${str}`;
      else string = str.toString();
    if(typeof(options.addition) === 'object') additionString = `${options.addition}`;
     else additionString = options.addition.toString();
  }
  catch {

  }
  let finalString = '';
  if (!options.additionRepeatTimes) string += additionString;
  if (!options.repeatTimes) finalString += string;

  for (let i = 0; i < options.repeatTimes; i++) {
    finalString += string;
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      finalString += additionString;
      if (j < options.additionRepeatTimes - 1) finalString += additionSeparator;
    }
    if(i < options.repeatTimes - 1) finalString += separator;
  }
  return finalString;

}

module.exports = {
  repeater
};
