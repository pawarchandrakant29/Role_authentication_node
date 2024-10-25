// controllers/authController.js
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  try {
    const { name ,username, password, role } = req.body;
    const user = new User({ name, username, password, role });
    await user.save();
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password)))
      return res.status(401).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { register, login };
