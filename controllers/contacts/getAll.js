const Contact = require("../../models/contact");
const { RequestError } = require("../../helpers");

const getAll = async (req, res, next) => {
  const result = await Contact.find();
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json(result);
};

module.exports = getAll;
