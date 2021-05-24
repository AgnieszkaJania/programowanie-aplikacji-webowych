const controller = require("../controllers/cloth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  }); 
  app.get("/clothes", controller.getAll);
  app.post("/clothes", controller.add);
  app.put("/clothes", controller.update);
  app.delete("/clothes/:id", controller.delete);
};