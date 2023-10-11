/**
 * @typedef {Object} Person
 * @property {string} firstName
 * @property {string} lastName
 * @property {number} age
 */

/**
 * @param {Person} person
 */
function greet ({firstName, lastName, age}) {
  console.log(`hello ${firstName} ${lastName}, you are ${age} years old`)
}

greet({
  firstName: 'Riki',
  lastName: 'Fridrich',
  age: Number.POSITIVE_INFINITY
})
