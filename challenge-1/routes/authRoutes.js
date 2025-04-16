import express from 'express';
import { login } from '../controller/authController.js';
const router = express.Router();

router.post('/login', login);

router.post('/add-user', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      if (!username || !password) {
        return res.status(400).json({ message: 'Username and password required' });
      }
  
      const existing = await User.findOne({ username });
      if (existing) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      const newUser = new User({ username, password });
      await newUser.save();
  
      res.status(201).json({ message: 'User added successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

export default router;
