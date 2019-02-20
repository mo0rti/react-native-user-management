if (__DEV__ === 'production') {
    module.exports = require('./configure-store.prod')
  } else {
    module.exports = require('./configure-store.dev')
  }
  