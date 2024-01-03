// controllers/todoController.js
const express = require('express');
const router = express.Router();
const {TodoModel} = require('../models/todoModel');


// Index Route
router.get('/mytodo', async (req, res) => {
	const userId= req.userId
	console.log(userId)
  try {
    const todos = await TodoModel.find( {user:userId});

	if(!todos.length>0){
		return res.send({"msg":"No todo are there"})
	}
    res.status(200).json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//all Todo

router.get("/",async(req,res)=>{
	try{
		const allTodo = await TodoModel.find()
		res.send({"msg":allTodo})
	}catch(err){
		res.status(500).send(err.message)
	}
})

// Create Route
router.post('/create', async (req, res) => {
	const {task,completed} = req.body
    const user = req.userId
  try {
    const newTodo =  new TodoModel({ task,completed,user});
	 await newTodo.save()
    res.status(201).json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Read Route
router.get('/:id', async (req, res) => {
  try {
    const todo = await TodoModel.findById(req.params.id);
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
	const {task, completed}=req.body
  try {
    const updatedTodo = await TodoModel.findByIdAndUpdate(req.params.id, { task, completed }, { new: true });
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
    res.send({"msg":"Deleted Successfully"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
