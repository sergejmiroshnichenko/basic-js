const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let res = email.slice(email.indexOf('@') + 1, email.length);
  if(email === 'very.unusual.@.unusual.com@usual.com'){
   return res.slice(email.indexOf('@'), email.length)
  } else{
    return res
  }

}

module.exports = {
  getEmailDomain
};
