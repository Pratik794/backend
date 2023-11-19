const User = require('../models/user');

const userService = {
  async createUser(username, email, password) {
    try {
      const newUser = new User({ username, email, password });
      await newUser.save();
      return newUser;
    } catch (error) {
      throw new Error('Could not create user');
    }
  },
};

module.exports = userService;
