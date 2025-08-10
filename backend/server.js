import express from "express";
import 'colors';
import "dotenv/config";
import { connectDb } from "./config/db.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import goalRoutes from "./routes/goalRoutes.js"

const port = process.env.PORT || 5000;
connectDb();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/api/goals',goalRoutes);
app.use(errorHandler); 

app.listen(port,()=>{
    console.log(`Server Running on ${port}`);
})

