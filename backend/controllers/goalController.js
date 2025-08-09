// @desc Get Goals
// @route GET /api/goals
// @access Private
export const getGoals = (req, res) => {
  res.status(200).json({ message: "Get Goals" });
};

// @desc Set Goals
// @route POST /api/goals
// @access Private
export const setGoals = (req, res) => {
  res.status(200).json({ message: "Set Goals" });
};

// @desc Update Goals
// @route PUT /api/goals
// @access Private
export const updateGoals = (req, res) => {
   res.status(200).json({message : `Update Goals for ID: ${req.params.id}`}); 
};

// @desc Delete Goals
// @route DELETE /api/goals
// @access Private
export const deleteGoals = (req, res) => {
   res.status(200).json({message : `Delete Goals for ID: ${req.params.id}`}); 
};




