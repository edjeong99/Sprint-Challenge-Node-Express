const express = require('express');

const router = express.Router();
const actionDb = require('../data/helpers/actionModel.js');



router.get("/", (req, res) => {
    console.log("Action Get");
    actionDb
      .get()
      .then(action => {
        res.status(200).json(action);
      })
      .catch(err =>
        res.status(500).json({ message: "could not get action", error })
      );
  });
  
  

  router.post("/", (req, res) => {
    const body = req.body;
  
    actionDb
      .insert(body)
      .then(action => {
        res.status(200).json(action);
      })
      .catch(err =>
        res.status(500).json({ message: "could not create action", error })
      );
  });
  
  router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;
    actionDb.remove(id)
      .then(count => {
        res.status(200).json(count);
      })
      .catch(err =>
        res.status(500).json({ message: "could not delete a action ", error })
      );
  });
  
  router.put("/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;
    actionDb.update(id, body)
      .then(action => {
        res.status(200).json(action);
      })
      .catch(err =>
        res.status(500).json({ message: "could not update action", error })
      );
  });


module.exports = router;