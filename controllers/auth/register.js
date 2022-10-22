const { User } = require("../../models/user");
const bcrypt = require("bcryptjs");
const { RequestError } = require("../../helpers");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email already in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ name, email, password: hashPassword });
  res.status(201).json({ name: newUser.name, email: newUser.email });
};

module.exports = register;