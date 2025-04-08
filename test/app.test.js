const getMessage = require("./index");

test("Check if correct message is returned", () => {
    expect(getMessage()).toBe("Hello, GitHub Actions CI/CD!");
});