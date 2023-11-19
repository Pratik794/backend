const express = require('express');
const connectDB = require('./db');
const userController = require('./controllers/userController');

const app = express();
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.post('/signup', userController.signup);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
