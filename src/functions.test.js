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

//test for less than or equals
test("Test for less than equals", () => {
  expect(functions.less_than(150, 200)).toBeLessThanOrEqual(350);
});

//Test for Regex
test("Regex for not containing I in a word", () => {
  expect("team").not.toMatch(/T/);
});

//Test for Array
test("Whether admin is authorized or not", () => {
  expect(functions.admin_list()).toContain("Ajin");
});

//Test for async data with promise
test("Async data test", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toBe("Leanne Graham");
  });
});

//Test for asunc data with async/await
test("Async data with async/await", async () => {
  const data = await functions.fetchUser();
  expect(data.name).toBe("Leanne Graham");
});
