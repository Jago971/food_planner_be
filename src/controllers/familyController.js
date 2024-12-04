const { getDatabase } = require("../services/databaseConnector");

async function getFamily (req, res) {
    const db = await getDatabase();
    const ingredients = await db.query(`
        SELECT 
            i.id AS ingredient_id,
            i.name AS ingredient_name,
            i.description,
            i.carbs,
            i.fat,
            i.protein,
            i.calories,
            s.name AS serving_name,
            s.weight AS serving_size
        FROM 
            ingredients i
        LEFT JOIN 
            servings s ON i.serving_id = s.id;
    `);    
    res.json({
        message: "successfully found ingredients",
        ingredients: ingredients
    });
}

module.exports = { getIngredients }