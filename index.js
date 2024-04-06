const express = require('express');
const { default: mongoose } = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute =require("./routes/product.route.js");
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes
app.use("/api/products", productRoute)

app.get('/', (req, res) =>{
    res.send("Hello from Node API");
});

//mongoose.connect("mongodb+srv://database:<password>@cluster0.m2whswk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
mongoose.connect("mongodb+srv://admin:admin@cluster0.m2whswk.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected to Database");
    app.listen(3000,()=>{
        console.log("Server is running on port 3000");
    });
})
.catch(()=>{
    console.log("Connection Failed");
});