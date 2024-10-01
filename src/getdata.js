const { Router } = require("express");
//const { dbconnection } = require("./dbconnection");


const router = Router();

router.get("/getdata/:nav", (req, res) => {
  const search = req.query.search1;
  const nav = req.params.nav;
  //  console.log(search);
  //  console.log(nav);

  const sql = `select * FROM items ORDER by id DESC`;
 /* dbconnection.query(sql, (err, data) => {
    if (err) return res.json(err);
    else {
      if (search === "home" && nav === "home") {
        return res.json(data);
      }
      if (search !== "home") {
        res.json(
          data.filter((data2) => {
            return data2.title === search;
          })
        );
      }
      if (nav !== "home") {
        res.json(
          data.filter((data2) => {
            return data2.type === nav;
          })
        );
      }
    }
  });*/
});
module.exports = router;
