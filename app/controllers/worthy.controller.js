const db = require("../models");
const Worthy = db.worthy;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.fieldname) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
     // Create a Tutorial
  const worthy = new Worthy({
    fieldname: req.body.fieldname,
    permissioned: req.body.permissioned,
  });

  // Save Tutorial in the database
  worthy
    .save(worthy)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Worthy."
      });
    });
};


// Retrieve all Worthy from the database.
exports.findAll = (req, res) => {
    const fieldname = req.query.fieldname;
    var condition = fieldname ? { fieldname: { $regex: new RegExp(fieldname), $options: "i" } } : {};
  
    Worthy.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving worthy."
        });
      });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const fieldname = req.params.fieldname;

    Worthy.findOne({fieldname: fieldname})
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Worthy with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Worthy with fieldname=" + fieldname });
      });
};

// Update a permissioned by the fieldname in the request
exports.updateAdd = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const fieldname = req.params.fieldname;
      const permissioned = req.body.permissioned
      Worthy.findOneAndUpdate({fieldname:fieldname}, {$addToSet:{permissioned:permissioned}}, {new:true, useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Worthy with fieldname=${fieldname}. Maybe Worthy was not found!`
            });
          } else res.send(data);//{ message: "Worthy was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Worthy with fieldname=" + fieldname
          });
        });  
};

exports.updateRemove = (req, res) => {
  if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const fieldname = req.params.fieldname;
    const permissioned = req.body.permissioned
    Worthy.findOneAndUpdate({fieldname:fieldname}, {"$pull":{permissioned:permissioned}}, {new: true, useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Tutorial with fieldname=${fieldname}. Maybe Worthy was not found!`
          });
        } else res.send(data);//{ message: "Worthy was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Worthy with fieldname=" + fieldname
        });
      });  
};




// Delete a fieldname with the specified fieldname in the request
exports.delete = (req, res) => {
  

    const fieldname = req.params.fieldname;

    Worthy.findOneAndRemove(fieldname)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Worthy with fieldname=${fieldname}. Maybe Tutorial was not found!`
          });
        } else {
          res.send({
            message: "Worthy was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Worthy with fieldname=" + fieldname
        });
      });
};



// Delete all fieldnames from the database.
exports.deleteAll = (req, res) => {

  Worthy.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Worthy were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all worthy."
      });
    });
};

// Find all permissioned worker
exports.findAllPWorker = (req, res) => {
    Worthy.find({ permissioned: { $all:["Worker"]} })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving worthy."
      });
    });
};

// Find all permissioned worker
exports.findAllPAdmin= (req, res) => {
  Worthy.find({ permissioned: { $all:["Admin"]} })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving worthy."
    });
  });
};

// Find all permissioned worker
exports.findAllPManager = (req, res) => {
  Worthy.find({ permissioned: { $all:["Manager"]} })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving worthy."
    });
  });
};

// Find all permissioned worker
exports.findAllPSuperAdmin = (req, res) => {
  Worthy.find({ permissioned: { $all:["SuperAdmin"]} })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving worthy."
    });
  });
};