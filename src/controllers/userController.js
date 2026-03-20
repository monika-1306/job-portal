const responseHelper = require("../../helpers/responseHelper");
const userService = require("../services/userService");

const register = async (req, res) => {
  try {
    const data = await userService.register(req.body);
    responseHelper.handleSuccess(res, data);
  } catch (error) {
    responseHelper.handleError(res, error);
  }
};

const login = async (req, res) => {};

module.exports = {
  register,
  login,
};
