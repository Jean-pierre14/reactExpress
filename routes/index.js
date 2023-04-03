const exp = require("express");
const router = exp.Router();

const db = require("../config/db");

router.get("/", async (req, res) => {
  let sql = "SELECT * FROM users ORDER BY id DESC";
  await db.query(sql, (err, datas) => {
    if (err) throw err;
    res.json(datas);
  });
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  let sql = "SELECT * FROM users WHERE id = ?";
  await db.query(sql, [id], (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

router.post("/add", async (req, res) => {
  const { username, fullname, email, password } = req.body;
  if (!username || !fullname || !email || !password) {
    res.status(400).json("Error empty  values - " + JSON.stringify(req.body));
  } else {
    let sql =
      "INSERT INTO users(username, fullname, email, `password`) VALUES(?, ?, ? ,?)";
    db.query(sql, [username, fullname, email, password], (err, callback) => {
      if (err) throw err;
      res.json(`Data registered ${callback}`);
    });
  }
});

module.exports = router;
