import chai, { expect } from "chai";
import chaHttp from "chai-http";
import app from "../src/app";

chai.use(chaHttp);

describe("Return App", () => {
  it("should return success on / url", async () => {
    const result = await chai.request(app).get("/");
    const { status, body } = result;
    expect(status).to.be.equal(200);
    expect(body.message).to.be.equal("Welcome to Task Scheduling");
  });
});
