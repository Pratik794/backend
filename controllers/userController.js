const userService = require('../services/userService');

const userController = {
  async signup(req, res) {
    try {
      const { username, email, password } = req.body;
      const newUser = await userService.createUser(username, email, password);
      res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = userController;
