const contacts = require("../../models/contacts");
const { RequestError } = require("../../helpers");

const getAll = async (req, res, next) => {
  const result = await contacts.listContacts();
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json(result);
};

module.exports = getAll;
