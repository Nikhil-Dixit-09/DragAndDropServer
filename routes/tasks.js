const express=require('express');
const router=express.Router();
const tasksController=require('../controllers/tasks_controller');
router.post('/addTask',tasksController.addTask);
router.get('/getTodos',tasksController.getTodos);
router.delete('/deleteTodo/:id',tasksController.deleteTodo);
router.put('/editTask',tasksController.editTask);
router.put('/swapTodos',tasksController.swapTodos);
router.put('/swapDoing',tasksController.swapDoing);
router.put('/swapDone',tasksController.swapDone);
router.put('/changeToDoing',tasksController.changeToDoing);
router.put('/changeToTodo',tasksController.changeToTodo);
router.put('/changeToDone',tasksController.changeToDone);
router.get('/getDoing',tasksController.getDoing);
router.get('/getDone',tasksController.getDone);
module.exports = router;