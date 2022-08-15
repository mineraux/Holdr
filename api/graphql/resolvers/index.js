const userListResolver = require('./userList')

const RootResolver = {
  ...userListResolver,
}

module.exports = RootResolver
