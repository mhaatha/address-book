const model = require("../model/groupContactModel");
const view = require("../view/view");

const create = async (contactId, clusterId) => {
  try {
    const data = await model.create(contactId, clusterId);
    const result = await view.createGroupContact(data);

    return result;
  } catch (error) {
    throw error;
  }
};

const update = async (id, contactId, clusterId) => {
  try {
    const data = await model.update(id, contactId, clusterId);
    const result = await view.updateGroupContact(data);

    return result;
  } catch (error) {
    throw error;
  }
};

const deleted = async (id) => {
  try {
    const data = await model.deleted(id);
    const result = await view.deleteGroupContact(id, data);

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = { create, update, deleted };
