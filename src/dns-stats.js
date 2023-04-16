const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

let domains = ['code.yandex.ru','music.yandex.ru','yandex.ru'];

function getDNSStats(domains) {
  result = {};
  for (let i = 0; i < domains.length; i ++) {
    let str = '';
    for (let j = domains[i].length - 1; j >= 0; j--) {
      if (domains[i][j]  === '.') {
        str = domains[i].slice(j);
        str = '.' + str.split('.').reverse().join('.').slice(0, str.length - 1);
        if(str in result) {
          result[str] = result[str] + 1;
        }
        else result[str] = 1;
      }
      if (j === 0) {
        str = domains[i].slice(j);
        str = '.' + str.split('.').reverse().join('.').slice(0, str.length);
        if(str in result) {
          result[str] = result[str] + 1;
        }
        else result[str] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
