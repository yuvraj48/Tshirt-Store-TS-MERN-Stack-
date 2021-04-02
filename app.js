require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const {MONGO_URI} = require('./config/dev')
//routes


const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const paymentBRoutes = require("./routes/paymentBRoutes");
//const stripeRoutes = require("./routes/stripepayment");  for stripe



//DB Connection
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  const db=mongoose.connection
  db.once('open', () => {
    console.log('DB connected');
  })

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes
app.use( require("./routes/auth"));
app.use(require("./routes/user"));
app.use(categoryRoutes);
app.use( productRoutes);
app.use( orderRoutes);
app.use(paymentBRoutes)
//app.use("/api", stripeRoutes);  //stripe

//PORT
const port = process.env.PORT || 8000;

//Starting a server
if(process.env.NODE_ENV=="production"){
  app.use(express.static('projfrontened/build'))
  const path =require('path')
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'projfrontened','build','index.html'))
  })
}
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});

