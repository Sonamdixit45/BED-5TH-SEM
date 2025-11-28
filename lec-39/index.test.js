const app = require("./index");
const request = require("supertest");

describe("POST /sum",()=>{
    test("addition of two numbres 1+ 2 will be 3 ",async()=>{
        let response = await request(app).post("/sum").send({
            a:1,
            b:2
        })
        expect(response.body.data).toBe(3)
    })
test("should return invalid argument if one of the parameter is not present",async()=>{
    let response = await request(app).post("/sum").send({
        a:1
    })
    expect(response.body.data).toBe(3)
})
    
})




describe("POST /sum",()=>{
    test("multiplication of two numbres 1+ 2 will be 3 ",async()=>{
        let response = await request(app).post("/mul").send({
            a:1,
            b:2
        })
        expect(response.body.data).toBe(2)
    })
test("should return invalid argument if one of the parameter is not present",async()=>{
    let response = await request(app).post("/mul").send({
        a:1
    })
    expect(response.body.data).toBe(2)
})
    
})
