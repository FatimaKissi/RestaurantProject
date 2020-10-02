const sqlite3 = require("sqlite3")
const db = new sqlite3.Database(":memory:")

function load(callback){
    callback(db)
}

module.exports = load