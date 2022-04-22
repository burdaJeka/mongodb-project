//point of all routes
const aboutRoutes = require("./about");
const mainRoutes = require("./main")

module.exports = function (app) {
  aboutRoutes(app);
  mainRoutes(app);
};
