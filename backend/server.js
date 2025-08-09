import express from "express";
import "dotenv/config";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import goalRoutes from "./routes/goalRoutes.js"

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/api/goals',goalRoutes);
app.use(errorHandler); 

app.listen(port,()=>{
    console.log(`Server Running on ${port}`);
})

