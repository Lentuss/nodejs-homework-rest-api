const fs = require("fs/promises");
const { v4 } = require("uuid");

const path = require("path");

const contactPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === contactId);
  if (!result) {
    return null;
  }
  return result;
};

const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts();
  const newContact = {
    id: v4(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await updateList(contacts);
  return newContact;
};

const removeContact = async (id) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === id);
  console.log(index);
  if (index === -1) {
    return null;
  }
  const [removeContact] = contacts.splice(index, 1);
  await updateList(contacts);
  console.log(removeContact);
  return removeContact;
};

const updateContact = async (id, body) => {
  const contacts = await listContacts();
  const contactIndex = contacts.findIndex((item) => item.id === id);
  if (contactIndex === -1) {
    return null;
  }
  contacts[contactIndex] = { id, ...body };
  await updateList(contacts);
  return contacts[contactIndex];
};

const updateList = async (contacts) => {
  await fs.writeFile(contactPath, JSON.stringify(contacts));
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
