import 'express-async-handler';
import expressAsyncHandler from 'express-async-handler';
import Goal from '../model/goalModel.js';

// @desc Get Goals
// @route GET /api/goals
// @access Private
export const getGoals = expressAsyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

// @desc Set Goals
// @route POST /api/goals
// @access Private 
export const setGoals = expressAsyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add any text feild.');
  }
  const goalCreated = await Goal.create({
    text: req.body.text
  })
  res.status(201).json(goalCreated);
});

// @desc Update Goals
// @route PUT /api/goals
// @access Private
export const updateGoals = expressAsyncHandler(async (req, res) => {
  const goalToUpdate = await Goal.findById(req.params.id);

  if (!goalToUpdate) {
    res.status(404);
    throw new Error('Goal NOT FOUND');
  };

  const updtedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })

  res.status(201).json(updtedGoal);
});

// @desc Delete Goals
// @route DELETE /api/goals
// @access Private
export const deleteGoals = expressAsyncHandler(async (req, res) => {
  const goalToDelete = await Goal.findById(req.params.id);
  if (!goalToDelete) {
    res.status(404);
    throw new Error('Goal NOT FOUND')
  }

  const deletedGoal = await Goal.findByIdAndDelete(req.params.id);
  res.status(200).json({ Message: "Deleted Successfully", goal: deletedGoal });

});




