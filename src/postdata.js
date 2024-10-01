const { Router } = require("express");
const multer = require("multer");
const path = require("path");
//const { dbconnection } = require("./dbconnection");


const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, "public/images");
  },
  filename: (req, file, cd) => {
    cd(
      null,
      (file.fieldname = file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    );
  },
});


const upload = multer({ storage: storage });

router.post("/api/image", upload.single("image"),async (req, res) => {
  const image = await req.file.fieldname;
  const items = await JSON.parse(req.body.items);
  //console.log(items);
 
  //console.log(image);
  const sql = `insert into items values(null, ? , ?, ? , ? , ?  ,?)`;
  /*dbconnection.query(
    sql,
    [image, items.title, items.type_item,items.description, items.button_style , items.First_block_description],
    (err, result) => {
      if (err) return err;
      res.send("1")
      //console.log(result);
    }
  );*/
});



module.exports = router;
