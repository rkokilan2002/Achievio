import { Router } from "express";
import { deleteGoals, getGoals, setGoals, updateGoals } from "../controllers/goalController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = Router();
// @route /api/goals
router.route('/').get(protect, getGoals).post(protect, setGoals);

// @route /api/goals/:id
router.route('/:id').put(protect, updateGoals).delete(protect, deleteGoals);

export default router;