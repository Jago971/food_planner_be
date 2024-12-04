const mysql = require("promise-mysql");
const dbSettings = require("../config/dbConfig")

const getDatabase = async () => {
    return connection = await mysql.createConnection(dbSettings);
}

module.exports = { getDatabase }