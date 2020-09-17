
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./better-file-downloads.cjs.production.min.js')
} else {
  module.exports = require('./better-file-downloads.cjs.development.js')
}
