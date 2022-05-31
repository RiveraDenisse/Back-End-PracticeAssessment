const express = require("express");
const app = express();

app.listen(3001, () => {
  console.log("API server now on port 3001");
});

//route to request data from data.json
const { recipes } = require("./data/data");

//create route for recipes
app.get("/recipes", (req, res) => {
  res.json(recipes);
});
