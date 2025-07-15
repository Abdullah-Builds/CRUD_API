import express from 'express'
import { v4 as uuidv4 } from 'uuid';
import User from '../models/User_Model.js';

uuidv4();

const router = express.Router()


//=====✳️ GET /users — Fetch all users from DB
router.get('/', async (req, res) => {
  try {
    const users = await User.find(); // fetch from MongoDB
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});



//=====➕ POST /users — Add a new user
router.post('/', async (req, res) => {
  const user = req.body;

  const newUser = new User(user);

  try {
    await newUser.save(); // save to DB
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});




//======🔍 GET /users/:id
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});




//=====🗑️ DELETE /users/:id
router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});



//====✏️PATCH /users/:id
router.patch('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return the updated object
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});





export default router;









