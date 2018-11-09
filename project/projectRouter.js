const express = require("express");

const router = express.Router();
const projectDb = require("../data/helpers/projectModel.js");

router.get("/", (req, res) => {
  projectDb
    .get()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err =>
      res.status(500).json({ message: "could not get project", error })
    );
});

router.get("/:id/action", (req, res) => {
    const id = req.params.id;
    
    projectDb
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

  projectDb
    .insert(body)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err =>
      res.status(500).json({ message: "could not create project", error })
    );
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  projectDb.remove(id)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err =>
      res.status(500).json({ message: "could not delete a project ", error })
    );
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  projectDb.update(id, body)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err =>
      res.status(500).json({ message: "could not update project", error })
    );
});

module.exports = router;
