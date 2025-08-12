import { Router } from "express";
import { deleteGoals, getGoals, setGoals, updateGoals } from "../controllers/goalController.js";

const router = Router();
// @route /api/goals
router.route('/').get(getGoals).post(setGoals);

// @route /api/goals/:id
router.route('/:id').put(updateGoals).delete(deleteGoals);

export default router;