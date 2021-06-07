const controller = require("../controllers/cloth.controller");

module.exports = (app) =>{
  
  app.get("/clothes", controller.getAll);
  app.post("/clothes", controller.add);
  app.put("/clothes", controller.update);
  app.delete("/clothes/:id", controller.delete);
};