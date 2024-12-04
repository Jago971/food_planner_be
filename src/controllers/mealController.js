const { getDatabase } = require("../services/databaseConnector");

async function getMeals(req, res) {
    const db = await getDatabase();
    
    const meals = await db.query(`
        SELECT * FROM meals
    `);
    
    for (let meal of meals) {
        const ingredients = await db.query(`
            SELECT 
                i.id AS ingredient_id,
                i.name AS ingredient_name
            FROM 
                meal_ingredients mi
            JOIN 
                ingredients i ON mi.ingredient_id = i.id
            WHERE 
                mi.meal_id = ${meal.id};
        `);
        
        meal.ingredients = ingredients;
    }
    
    res.json({
        message: "Successfully found meals",
        meals: meals
    });
}

module.exports = { getMeals };