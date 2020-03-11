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

  it("should return 400 when phone is not provided", async () => {
    const result = await chai
      .request(app)
      .post("/personnel/login")
      .set("content-type", "application/json")
      .send({
        password: "password"
      });
    const { status, body } = result;
    expect(status).to.be.equal(400);
    expect(body.message).to.be.equal("Please provide phone or password");
  });

  it("should return 400 when password is short", async () => {
    const result = await chai
      .request(app)
      .post("/personnel/login")
      .set("content-type", "application/json")
      .send({
        phone: "0723573456",
        password: "pass"
      });
    const { status, body } = result;
    expect(status).to.be.equal(400);
    expect(body.message).to.be.equal(
      "Password provided is short. Use more than 6 chars"
    );
  });

  it("should post to sample login", async () => {
    const result = await chai
      .request(app)
      .post("/personnel/login")
      .set("content-type", "application/json")
      .send({
        phone: "0723573456",
        password: "password"
      });
    const { status, body } = result;
    expect(status).to.be.equal(201);
    expect(body.message).to.be.equal("Successfully created a new user");
  });

  it("should return password does not match", async () => {
    const result = await chai
      .request(app)
      .post("/personnel/login")
      .set("content-type", "application/json")
      .send({
        phone: "0723573456",
        password: "passwordnotmatch"
      });
    const { status, body } = result;
    expect(status).to.be.equal(400);
    expect(body.message).to.be.equal("Password doesn't match");
  });

  it("should return sample tasks", async () => {
    const result = await chai.request(app).post("/tasks/assigned");
    const { status, body } = result;
    expect(status).to.be.equal(200);
    expect(body.message).to.be.equal("Tasks retrieved successfully");
  });
});
