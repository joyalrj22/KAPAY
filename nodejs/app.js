
const express = require("express");
const app = express();

app.use(express.static("client"));
//just serve pages as they are

module.exports = { app };