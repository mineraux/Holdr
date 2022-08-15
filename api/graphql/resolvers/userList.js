const User = require('../../models/user')

module.exports = {
  userList: async () => {
    try {
      const userList = await User.find()
      return userList.map(user => {
        return {
          ...user._doc,
          _id: user.id,
          name: user.name,
          email: user.email,
        }
      })
    } catch (error) {
      throw error
    }
  },
  singleUser: async args => {
    try {
      const user = await User.findById(args.userId)
      return user
    } catch (error) {
      throw error
    }
  },
  createUser: async args => {
    const user = new User({
      name: args.userInput.name,
      email: args.userInput.email,
    })

    try {
      const existingUser = await User.findOne({ email: args.userInput.email })

      if (existingUser) {
        return existingUser
      }

      const result = await user.save()
      return {
        ...result._doc,
        _id: result._doc._id.toString(),
      }
    } catch (error) {
      throw error
    }
  },
  deleteUser: async args => {
    try {
      const user = await User.findById(args.userId)
      await User.deleteOne({
        _id: args.userId,
      })
      return user
    } catch (error) {
      throw error
    }
  },
}
