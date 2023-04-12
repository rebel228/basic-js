const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

let chain = '';


const chainMaker = {
  getLength() {
    return chain.split('~~').length;
  },
  addLink(value) {
    if(chain) {
      let ch = chain.split('~~');
      ch.push(`( ${value} )`);
      chain = ch.join('~~');
    } else chain += `( ${value} )`;
    console.log(chain);
    return chainMaker;
  },
  removeLink(pos) {
    if (isNaN(pos) || !chain || pos > chain.split('~~').length || pos < 1) {
      chain = '';
      throw Error ("You can't remove incorrect link!");
    }
    if(chain){
      let ch = chain.split('~~');
      ch.splice((pos - 1), 1);
      chain = ch.join('~~');
      console.log(chain);
    }
    return chainMaker;
  },
  reverseChain() {
    chain = chain.split('~~').reverse().join('~~');
    console.log(chain);
    return chainMaker;
  },
  finishChain() {
    console.log(chain);
    let result = chain;
    chain = '';
    return result;
  }
};

module.exports = {
  chainMaker
};
