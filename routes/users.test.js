const request = require("supertest");
const app = require("../app");

test('Obtener  listado de usuarios', async()=>{
   const resp = await  request(app)
                    .get('/users')
                    .expect(200)

    console.log(resp.body);
    expect(resp.body).toBeTruthy();
    expect(Array.isArray(resp.body)).toBe(true);

})