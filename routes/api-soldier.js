//about routes
const { Router } = require("express");
const { showAll } = require("../controllers/api-soldierCtrl");
const router = Router();

router.get("/api/getSoldiers", showAll);

module.exports = router;
