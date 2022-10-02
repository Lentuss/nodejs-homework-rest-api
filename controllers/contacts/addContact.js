const contacts = require("../../models/contacts");

const addContact = async (req, res, next) => {
  const addedContact = await contacts.addContact(req.body);
  res.status(201).json(addedContact);
};

module.exports = addContact;
