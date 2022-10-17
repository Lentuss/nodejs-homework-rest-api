const express = require("express");

const { validation, ctrlWrapper, isValidId } = require("../../middlewares");
const { contactsSchema, favoriteSchema } = require("../../schema");
const validateMiddleware = validation(contactsSchema);
const validateFavorite = validation(favoriteSchema);

const { contacts: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", isValidId, ctrlWrapper(ctrl.getContactById));

router.post("/", validateMiddleware, ctrlWrapper(ctrl.addContact));

router.delete("/:contactId", isValidId, ctrlWrapper(ctrl.deleteContactById));

router.put(
  "/:contactId",
  isValidId,
  validateMiddleware,
  ctrlWrapper(ctrl.updateContactById)
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateFavorite,
  ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;
