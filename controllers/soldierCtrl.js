const { Soldier } = require("../models/soldier");

const soldiersTable = async (req, res) => {
  try {
    const soldiers = await Soldier.find({});
    res.render("pages/index", {
      title: "Main",
      message: "List of warriors",
      soldiers,
    });
  } catch (e) {
    console.log(`Error: ${e}`);
  }
};

const getCreate = (req, res) => {
  res.render("pages/create", {
    title: "Create page",
    message: "Personnel create",
  });
};

const getUpdate = (req, res) => {
  res.render("pages/update", {
    title: "Update page",
    message: "Personnel update",
  });
};

const getDelete = (req, res) => {
  res.render("pages/delete", {
    title: "Delete page",
    message: "Personnel delete",
  });
};

//-- CREATE SOLDIERS --//

const createSoldier = async (req, res) => {
  try {
    const soldier = new Soldier({
			id: req.body.id,
      name: req.body.name,
      surname: req.body.surname,
      age: req.body.age,
      rank: req.body.rank,
      gender: req.body.gender,
    });
    await soldier.save();
  } catch (e) {
    console.log(`Error: ${e}!`);
    res.status(500).json(e);
  }
  res.redirect('/main');
};

const deleteSoldier =  async (req, res) => {
	
		const id = req.body.id;
		await Soldier.deleteOne({id}, () => {
			console.log(`Soldier with id ${id} deleted !`)
		}).clone().catch((e) => {
      console.log(`Error: ${e}!`);
      res.status(500).json(e);
    })
		res.status(200).redirect('/main');
};

const updateSoldier =  async (req, res) => {
  try{
    const id = req.body.id;
    console.log(req.body.id)
    await Soldier.updateOne({id}, req.body );
    res.redirect('/main');
  } catch (e){
    console.log(`Error: ${e}!`);
    res.status(500).json(e);
  }
}



module.exports = {
  soldiersTable,
  getCreate,
  getDelete,
  getUpdate,

  createSoldier,
	deleteSoldier,
  updateSoldier
};
