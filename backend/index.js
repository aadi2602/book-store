import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4001;

// connect to mongoDB
const dbConnection = async ()=>{
    const conn = await mongoose.connect(process.env.MongoDBURI )
    if(conn){
        console.log("Mongodb connected")
    }
    else{
        console.log("Mongodb not connected")
    }
}
 dbConnection();

app.get('/', (req, res) => {
    res.json({
        message: `Welcome to book-store API`
    })
})

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});