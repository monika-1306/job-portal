const bcrypt = require("bcrypt");
const User = require("../models/User");

const register = async (data) => {
  const { firstName,lastName, email, mobile_number, password } = data;

  if (!firstName || !email || !mobile_number || !password) {
    throw new Error("All fields are required");
  }

  const existingUser = await User.findOne({ email }, { _id: 1 });
  if (existingUser) {
    throw new Error("User already exists!!");
  }

  const hashedPass = await bcrypt.hash(password, 10);

  const user = await User.create({
    firstName,
    lastName,
    email,
    mobile_number,
    password: hashedPass,
  });

  return {
    id: user._id,
  };
};


const login = async () => {};

module.exports = {
  register,
  login,
};
