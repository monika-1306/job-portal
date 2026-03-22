const router = require("express").Router();
const userController = require("../src/controllers/userController");
const { validateSchema } = require("../validations/userValidation");
const { validate } = require("../middlewares/userMiddleware");

router.post("/register", validate(validateSchema), userController.register);

module.exports = router;
