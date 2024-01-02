// controllers/todoController.js
const express = require('express');
const router = express.Router();
const {TodoModel} = require('../models/todoModel');

// Index Route
router.get('/', async (req, res) => {
  try {
    const todos = await TodoModel.find({ user: req.user._id });
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create Route
router.post('/', async (req, res) => {
  try {
    const newTodo = await TodoModel.create({ task: req.body.task, user: req.user._id });
    res.status(201).json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Read Route
router.get('/:id', async (req, res) => {
  try {
    const todo = await TodoModelTodoModel.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update Route
router.put('/:id', async (req, res) => {
  try {
    const updatedTodo = await TodoModel.findByIdAndUpdate(req.params.id, { task: req.body.task, completed: req.body.completed }, { new: true });
    if (!updatedTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(updatedTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete Route
router.delete('/:id', async (req, res) => {
  try {
    const deletedTodo = await TodoModel.findByIdAndDelete(req.params.id);
    if (!deletedTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(deletedTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
