const express = require('express');
const Todo = require('./../models/Todo');

const router = express.Router();

// Home page route
router.get('/', async (req, res) => {

    const todos = await Todo.find()
    res.render("todos", {
        tasks: (Object.keys(todos).length > 0 ? todos : {})
    });
});

// POST - Submit Task
router.post('/', (req, res) => {
    const newTask = new Todo({
        task: req.body.task
    });

    newTask.save()
    .then(task => res.redirect('/'))
    .catch(err => console.log(err));
});

// POST - Update todo item
router.post('/todo/update', async (req, res) => {
    const taskKey = req.body._key;
    const updatedTask = (req.body.task || '').trim();

    if (!updatedTask) {
        return res.redirect('/');
    }

    try {
        await Todo.findOneAndUpdate(
            { _id: taskKey },
            { $set: { task: updatedTask } },
            { runValidators: true }
        );
    } catch (err) {
        console.log(err);
    }

    res.redirect('/');
});

// POST - Destroy todo item
router.post('/todo/destroy', async (req, res) => {
    const taskKey = req.body._key;
    const err = await Todo.findOneAndRemove({_id: taskKey})
    res.redirect('/');
});


module.exports = router;