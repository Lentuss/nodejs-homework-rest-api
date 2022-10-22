const express = require("express");
const { validation, ctrlWrapper } = require("../../middlewares");
const { schemas } = require("../../models/user");
const { auth } = require("../../controllers");

const { register, login } = auth;
const { registerSchema, loginSchema } = schemas;
const validateRegister = validation(registerSchema);
const validateLogin = validation(loginSchema);

const router = express.Router();

router.post("/signup", validateRegister, ctrlWrapper(register));
router.post("/login", validateLogin, ctrlWrapper(login));

module.exports = router;
