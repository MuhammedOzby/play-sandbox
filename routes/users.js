var express = require("express");
var router = express.Router();
const pgp = require("pg-promise")(/* options */);
const dbName = process.env.DB_NAME;
const dbPass = process.env.DB_PASS;
const db = pgp(`postgres://${dbName}:${dbPass}@postgres:5432/test`);

router.get("/", async function (req, res, next) {
  const data = await db.any("SELECT * FROM public.user");
  res.json(data);
});

module.exports = router;
