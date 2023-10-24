const express = require('express');
const bodyParser = require('body-parser');
const productRouter = require("./routes/productsRouter.js");
const app = express();

app.use(bodyParser.json());
app.use("/api/v1/products", productRouter);

module.exports = app;