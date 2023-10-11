/**
 * @param {Object} person
 * @param {string} person.firstName
 * @param {string} person.lastName
 * @param {number} person.age
 */
function greet ({firstName, lastName, age}) {
  console.log(`hello ${firstName} ${lastName}, you are ${age} years old`)
}

greet({
  firstName: 'Riki',
  lastName: 'Fridrich',
  age: Number.POSITIVE_INFINITY
})
