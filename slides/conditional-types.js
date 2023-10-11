class Profession {
  constructor (name) {
    this.name = name
  }
}

class Woodworker extends Profession {
  constructor () {
    super('woodworker')
  }
}

class Programmer extends Profession {
  constructor () {
    super('programmer')
  }
}

/**
 * @template Profession
 * @param {string} profession
 * @param {profession extends Woodworker ? boolean : number} fingers
 * @returns {string}
 */
function worker (profession, fingers) {
  return profession === 'woodworker'
    ? `${profession} ${fingers ? 'has' : 'does not have any'} fingers`
    : `${profession} has ${fingers} fingers`;
}

worker('woodworker', true)
worker('programmer', false)
