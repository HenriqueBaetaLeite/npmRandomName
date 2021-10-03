const randomName = require("../index");

describe("Test if its a function", () => {
  it("its a function?", () => {
    expect(typeof randomName).toBe("function");
  });
});
