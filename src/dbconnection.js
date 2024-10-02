const { createConnection } = require("mysql2");

const dbconnection = createConnection({
  host: "us-cluster-east-01.k8s.cleardb.net",
  user: "be46263f3d8de9",
  password: "b2ce5482",
  database: "heroku_7bad224fd1dd627",
  //connectTimeout: 20,
});

//mysql://be46263f3d8de9:b2ce5482@us-cluster-east-01.k8s.cleardb.net/heroku_7bad224fd1dd627?reconnect=true

module.exports = {
  dbconnection,
};
