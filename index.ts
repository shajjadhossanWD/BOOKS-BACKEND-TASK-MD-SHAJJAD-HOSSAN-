require("dotenv").config();
import { app } from "./app";
import connectDB from "./utils/db";


//create server
app.listen(process.env.PORT, ()=>{
    console.log(`server is connected with ${process.env.PORT}`);
    connectDB();
})