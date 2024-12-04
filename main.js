const express = require("express");
const cors = require("cors");
const { getIngredients } = require("./src/controllers/ingredientsController");
const { getMeals } = require("./src/controllers/mealController");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/ingredients", getIngredients);
app.get("/meals", getMeals);
app.get("/family", );

app.listen(port);