const express = require("express");
const router = express.Router();

/* GET main page. */
router.get("/", async (req, res) => {
  let data = {
    title: "이희진",
    html: "<h2>EJS</h2>",
  };
  //이렇게 쓰면 views 폴더에 main이 있는지 찾는다.
  res.render("main", { data: data });
});

router.post("/", async (req, res) => {
  //이렇게 쓰면 views 폴더에 main이 있는지 찾는다.
  res.render("poset main");
});

module.exports = router;
