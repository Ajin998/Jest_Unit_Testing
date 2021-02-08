const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  isUserValid: (user) => user,
  falsy_value: (value) => value,
  truthy_value: (value) => value,
  createUser: () => {
    const user = {};
    user["firstName"] = "Ajin";
    user["lastName"] = "Varghese";
    return user;
  },
  less_than: (num1, num2) => num1 + num2,
  admin_list: () => {
    const users = ["Ajin", "John", "Doe"];
    return users;
  },
};

module.exports = functions;
