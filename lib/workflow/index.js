const signale = require('signale')

module.exports = class {
  constructor() {
    this.scripts = []
  }

  register(...fns) {
    for (let i = 0; i < fns.length; i += 1) {
      const fn = fns[i]
      if (typeof fn === 'function') {
        this.scripts.push(fn)
      } else {
        signale.error('Function register error, no a function')
      }
    }
  }
}