const express = require("express");
const { validation, ctrlWrapper, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/user");
const { users } = require("../../controllers");

const { updateSubscription, current, logout } = users;
const { subscriptionSchema } = schemas;

const validateSubscription = validation(subscriptionSchema);

const router = express.Router();

router.patch(
  "/:userId/subscription",
  validateSubscription,
  ctrlWrapper(updateSubscription)
);
router.get("/current", authenticate, ctrlWrapper(current));
router.get("/logout", authenticate, ctrlWrapper(logout));

module.exports = router;
