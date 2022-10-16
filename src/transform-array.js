const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr ) {

  if(arr.indexOf('--double-next')){
    arr.push(arr.indexOf('--double-next') + 1);
    return arr.filter(item => typeof item === 'number').sort();
  }


  if(arr.indexOf('--double-prev')){
    arr.push(Math.abs(arr.indexOf('--double-next') - 1));
    return arr.filter(item => typeof item === 'number').sort();
  }

  if(arr.indexOf('--discard-prev')){
    let p = arr.indexOf('--discard-prev') - 1;
    arr.splice(p,1)
    return arr.filter(item => typeof item === 'number');
  }

  if(arr.indexOf('--discard-next')){
    let p = arr.indexOf('--discard-prev') + 1;
    arr.splice(p,1)
    return arr.filter(item => typeof item === 'number');
  }

}

module.exports = {
  transform
};
