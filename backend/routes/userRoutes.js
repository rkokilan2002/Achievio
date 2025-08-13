import { Router } from "express";
import { getMe, loginUser, registerUser } from "../controllers/uesrController.js";
import { protect } from "../middlewares/authMiddleware.js";



const router = Router();


// @route /api/users
router.post('/', registerUser);

// @route /api/users/login
router.post('/login', loginUser);

// @route /api/users/me
router.get('/me',protect, getMe);




export default router;
