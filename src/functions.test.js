const functions = require("./functions");

//test function for addition
test("Addition of 2 +2 equals 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

//test function for checking return null
test("It returns null", () => {
  expect(functions.isNull()).toBeNull();
});

//testing for a valid user
test("Check if it returns Ajin", () => {
  expect(functions.isUserValid("Ajin")).toBe("Ajin");
});

//test for falsy value
test("Test for function returning falsy value", () => {
  expect(functions.falsy_value(undefined)).toBeFalsy();
});

//test for truthy value
test("Test for Truthy value", () => {
  expect(functions.truthy_value(1)).toBeTruthy();
});

//test for user
test("Test for firstName and lastName of the user", () => {
  expect(functions.createUser()).toStrictEqual({
    firstName: "Ajin",
    lastName: "Varghese",
  });
});

//test for less than value

test("Test for less than value", () => {
  expect(functions.less_than(150, 200)).toBeLessThan(500);
});
