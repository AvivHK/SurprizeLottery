// Server setup
const express = require("express");
const app = express();
const path = require("path");
const api = require("./server/routes/api");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Mongoose setup
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/SurprizeLottery", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use("/", api);

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`Running on port ${port}`);
});
