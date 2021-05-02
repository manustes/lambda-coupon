const index = require("../src/index.js");
const { expect } = require("chai");
const constants = require("../src/utils/constants.js");

describe("Tests index", () => {
  it("success reponse 200", async () => {
    const event = {
      httpMethod: "GET",
      resource: "coupon",
      body: {
        item_ids: ["MLA811601010", "MLA811601011"],
        amount: 20000,
      },
    };
    result = await index.handler(event);
    expect(result.statusCode).to.be.equal(200);
  });

  it("missingFields fail", async () => {
    const event = {
      httpMethod: "POST",
      resource: "coupon",
      body: {
        item_ids: ["MLA1", "MLA2", "MLA3", "MLA4", "MLA5"],
        costo: 500,
      },
    };
    const result = await index.handler(event);
    expect(result.statusCode).to.be.equal(1003);
  });

  it("fail reponse 400", async () => {
    const event = {
      httpMethod: "POST",
      resource: "coupon",
      body: {
        item_ids: ["MLA811601010", "MLA811601011", "MLA810645375"],
        amount: 500,
      },
    };
    const result = await index.handler(event);
    expect(result.statusCode).to.be.equal(404);
  });
  it("error messages", async () => {
    constants.errorMessages[1000]("Error 1000");
    constants.errorMessages[1001]("Error 1000");
    constants.errorMessages[1002]("Error 1000");
  });
  it("fail data", async () => {
    const event = {
      httpMethod: "POST",
      resource: "coupon",
    };
    const result = await index.handler(event);
    expect(result.statusCode).to.be.equal(500);
  });
});
