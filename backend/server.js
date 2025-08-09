import express from "express";
import "dotenv/config";
import goalRoutes from "./routes/goalRoutes.js"

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json())

app.use('/api/goals',goalRoutes);

app.listen(port,()=>{
    console.log(`Server Running on ${port}`);
})

