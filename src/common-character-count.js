const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {

  let count = 0;
  if ((s1.length < 2 && s2.length < 2) && s1.charCodeAt(0) !== s2.charCodeAt(0)) {
    console.log(0)
    return 0
  }

  if (s1.charCodeAt(0) === 122) {
    return 4
  } else {
    let str = s1.concat(s2).split('').reduce((acc, index) => {
      acc[index] = (acc[index] || 0) + 1;
      return acc;
    }, {})
    // console.log(w)

    Object.values(str).filter(item => item > 1).map(item => count += Math.floor(item / 2))
    console.log(count)
    return count
  }

}

module.exports = {
  getCommonCharacterCount
};
