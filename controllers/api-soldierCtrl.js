const { Soldier } = require("../models/soldier");
const path = require("path");

const showAll = async (req, res) => {
  try {
    const soldiers = await Soldier.find({})
      .then((soldiers) => res.status(200).json(soldiers))
      .catch((error) => handleError(req, error));
  } catch (e) {
    console.log(`Error: ${e}`);
  }
};

module.exports = {
  showAll,
};
