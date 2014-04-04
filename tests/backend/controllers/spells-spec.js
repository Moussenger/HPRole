var request = require("request");

describe("Spells", function () {
    var baseURL = "http://localhost:8080/api",
        statusCode = [200, 304];
    
    it("should get Accio spell", function (done) {
        request(baseURL+"/spells/Accio", function (err, res, body) {
            var accio;

            if(err) {
                done(err);
            } else {
                accio = JSON.parse(body);

                expect(statusCode).toContain(res.statusCode);
                expect(res.headers["content-type"]).toBe("application/json; charset=utf-8");
                expect(accio.name).toEqual("Accio");
                expect(accio["no_wand"]).toBeDefined();
                expect(accio.description).toBeDefined();
                expect(accio.class).toBeDefined();
                expect(accio.level).toBeDefined();
                done();
            }
        });
    });
});