const db = require("./db.js")
function load(callback){
    callback(db)
}

module.exports = load