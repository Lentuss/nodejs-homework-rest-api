const contacts = require("../../models/contacts");
const { RequestError } = require("../../helpers");

const updateContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const renewedContact = await contacts.updateContact(contactId, req.body);
  if (!renewedContact) {
    throw RequestError(404, "Not found");
  }
  res.json(renewedContact);
};

module.exports = updateContactById;
