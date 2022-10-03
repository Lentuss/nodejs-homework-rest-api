const express = require("express");

const { validation, ctrlWrapper } = require("../../middlewares");
const { contactsSchema } = require("../../schema");
const validateMiddleware = validation(contactsSchema);

const { contacts: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.post("/", validateMiddleware, ctrlWrapper(ctrl.addContact));

router.delete("/:contactId", ctrlWrapper(ctrl.deleteContactById));

router.put(
  "/:contactId",
  validateMiddleware,
  ctrlWrapper(ctrl.updateContactById)
);

module.exports = router;
