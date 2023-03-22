const express = require('express');
const request = require('request');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php';

  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body);
      const recipe = data.meals[0];
      const recipeName = recipe.strMeal;
      const recipeInstructions = recipe.strInstructions;
      res.send(`Recipe Name: ${recipeName}<br>Instructions: ${recipeInstructions}`);
    } else {
      res.status(500).send('Unable to retrieve random recipe');
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
