module.exports = app => {
    const worthy = require("../controllers/worthy.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Field
    router.post("/", worthy.create);
  
    // Retrieve all Fields
    router.get("/", worthy.findAll);
  
     //Retrieve all worker permissioned fieldname
    router.get("/findAllWorker", worthy.findAllPWorker);
    router.get("/findAllAdmin", worthy.findAllPAdmin);
    router.get("/findAllManager", worthy.findAllPManager);
    router.get("/findAllSuperAdmin", worthy.findAllPSuperAdmin);
    

    // Retrieve a single Field with id
    router.get("/:fieldname", worthy.findOne);
  
    // add  role to field
    router.put("/:fieldname", worthy.updateAdd);

    // remove  role to field
    router.patch("/:fieldname", worthy.updateRemove);

    // Delete a Field with id
    router.delete("/:fieldname", worthy.delete);
  
    // Create a new Perm
    router.delete("/", worthy.deleteAll);
  
    app.use('/api/worthy', router);
  };