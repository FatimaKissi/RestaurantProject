const Restaurant = require("./Restaurant")
const load = require("./load")
const db = require("./db.js")


beforeAll(done => {
    db.exec("CREATE TABLE restaurants(id INTEGER PRIMARY KEY, name TEXT, price FLOAT);", done)


})

describe("Load", () => {
    test("Load restaurants", (done) => {
        load((db) => {
            db.all("SELECT*FROM restaurants;", (err, rows) => {
                expect(rows.length).toBe(5)
                expect(rows[0].name).toBe("Kishmish")
                db.get("SELECT COUNT(id) AS total FROM restaurants:", (err, count) => {
                    expect(count.total).toBe(5)
                    done()

                })

            })
        })
    })

})
