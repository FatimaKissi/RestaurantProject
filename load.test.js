const Restaurant = require("./Restaurant")

describe("load restaurants", () => {
    test("load restaurants", (done) => {
        load((db) => {
        db.all("SELECT*FROM restaurant:" , (err, rows)=> {
            expect(rows.length).toBe(5)
            expect((rows[0].name).toBe("Kishmish")
            db.get("SELECT COUNT(id) AS total FROM restaurant:", (err, count) => {
                expect(count.total).toBe(5)
                done()
        
            })
    
        })
    })
})

})
