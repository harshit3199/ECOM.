const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv= require("dotenv");
dotenv.config();

mongoose.connect( 
    process.env.MONGO_URL
).then(() => console.log("DBconnected")).catch((err)=>console.log(err));

const userRoute = require("./routes/user");

app.use("/api/user",userRoute)



app.listen(process.env.PORT || 5000, () => {
  console.log("Server Running");
});
