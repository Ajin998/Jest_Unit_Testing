const axios = require("axios");

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
    const admins = ["Ajin", "John", "Doe"];
    return admins;
  },
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((err) => "error while fetching data"),
};

module.exports = functions;
