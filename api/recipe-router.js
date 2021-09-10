const router = require("express").Router();
const Recipe = require("./recipe-model");

router.get("/:recipe_id", (req, res, next) => {
  Recipe.getRecipeById(req.params.recipe_id)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.use("*", (req, res, next) => {
  // eslint-disable-line
  res.json({ api: "Hello World" });
});

module.exports = router;
