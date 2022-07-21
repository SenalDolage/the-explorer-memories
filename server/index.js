require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postRoutes = require('./routes/posts');
const PORT = process.env.PORT;

const app = express();

const connectDb = require("./database/connect");

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);

// Connecting to DB
connectDb();

app.listen(PORT, console.log(`View server on http://localhost:${PORT}/`));