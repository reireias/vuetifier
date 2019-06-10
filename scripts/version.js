const fs = require('fs')
const lockfile = require('@yarnpkg/lockfile')

const lock = lockfile.parse(fs.readFileSync('yarn.lock', 'utf8'))

const keys = Object.keys(lock.object).filter(key => key.startsWith('vuetify@'))
console.log(lock.object[keys[0]].version)
