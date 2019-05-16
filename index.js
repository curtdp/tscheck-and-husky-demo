//@ts-check
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

function add(a, b) {
  let sum = a + b
  return sum
}

/**
 * @typedef {Object} User
 * @property {Name} name
 */

/**
 * @typedef {Object} Name
 * @property {string} first
 * @property {string} middle
 * @property {string} last
 */

/**
 * @param {User} user
 * @returns {string}
 */

function getFullName(user) {
  const {
    name: { first, middle, last },
  } = user
  return [first, middle, last].filter(Boolean).join('')
}

getFullName({
  name: {
    first: 'Joe',
    // попробуйте сломать что-нибудь связанное с типизацией
    // first1: 'Joe',
    middle: 'Bud',
    last: 'Matthews',
  },
}) //?
