import 'express-async-handler';
import expressAsyncHandler from 'express-async-handler';

// @desc Get Goals
// @route GET /api/goals
// @access Private
export const getGoals = expressAsyncHandler( async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

// @desc Set Goals
// @route POST /api/goals
// @access Private
export const setGoals = expressAsyncHandler( async (req, res) => {
  if(!req.body.text){
    res.status(400);
    throw new Error('Please add any text feild.');
  }
  res.status(200).json({ message: "Set Goals" });
});

// @desc Update Goals
// @route PUT /api/goals
// @access Private
export const updateGoals = expressAsyncHandler( async (req, res) => {
   res.status(200).json({message : `Update Goals for ID: ${req.params.id}`}); 
});

// @desc Delete Goals
// @route DELETE /api/goals
// @access Private
export const deleteGoals = expressAsyncHandler( async (req, res) => {
   res.status(200).json({message : `Delete Goals for ID: ${req.params.id}`}); 
});




