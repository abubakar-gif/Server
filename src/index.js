const express = require("express");
const cors = require("cors");
const { dbconnection } = require("./dbconnection");

//router
const postdataRouter = require("./postdata");
const getdataRouter = require("./getdata");

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(cors());
app.use(express.json());

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Running server on port ${PORT}`);
});

app.use("/", postdataRouter);
app.use("/", getdataRouter);
