//about routes
const { Router } = require("express");
const {
  soldiersTable,
  getUpdate,
  getDelete,
  getCreate,
  createSoldier,
  deleteSoldier,
  updateSoldier,
} = require("../controllers/soldierCtrl");
const router = Router();

router.get('/' , soldiersTable)
router.get("/main", soldiersTable);
router.get("/update", getUpdate);
router.get("/delete", getDelete);
router.get("/create", getCreate);

router.post("/create", createSoldier);
router.post("/delete/:id", deleteSoldier);
router.post("/update/:id", updateSoldier);

module.exports = router;
