const model = require('../model/clustersModel');
const view = require('../view/view');

const create = async (clusterName) => {
  try {
    const data = await model.create(clusterName);
    const result = await view.createClusters(data);

    return result;
  } catch (error) {
    throw error;
  }
};

const update = async (id, clusterName) => {
  try {
    const data = await model.update(id, clusterName);
    const result = await view.updateClusters(data);

    return result;
  } catch (error) {
    throw error;
  }
};

const deleted = async (id) => {
  try {
    const data = await model.deleted(id);
    const result = await view.deleteClusters(id, data);

    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = { create, update, deleted };