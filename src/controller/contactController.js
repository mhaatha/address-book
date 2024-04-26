const model = require("../model/contactModel");
const view = require("../view/view");

const help = async () => {
  try {
    const result = await view.help();
    
    return result;
  } catch (error) {
    throw error;
  }
}

const create = async (name, phoneNumber, company, email) => {
  try {
    const data = await model.create(name, phoneNumber, company, email);
    const result = await view.createContact(data);

    return result;
  } catch (error) {
    throw error;
  }
};

const update = async (id, name, phoneNumber, company, email) => {
  try {
    const data = await model.update(id, name, phoneNumber, company, email);
    const result = await view.updateContact(data);

    return result;
  } catch (error) {
    throw error;
  }
};

const deleted = async (id) => {
  try {
    const data = await model.deleted(id);
    const result = await view.deleteContact(id, data);

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = { help, create, update, deleted };
