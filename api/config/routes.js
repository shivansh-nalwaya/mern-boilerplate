const UsersController = require("../controllers/UsersController.js");
const ItemsController = require("../controllers/ItemsController.js");
const VerifyToken = require("./VerifyToken");

module.exports = function(app) {
  app.post("/login", UsersController.login);
  app.post("/logout", UsersController.logout);
  app.post("/signup", UsersController.signup);

  app.get("/items", ItemsController.get);
  app.get("/items/:id", ItemsController.show);
  app.post("/items", VerifyToken, ItemsController.create);
  app.put("/items/:id", VerifyToken, ItemsController.update);
  app.delete("/items/:id", VerifyToken, ItemsController.delete);
};
