const createConnection = require("../connection/connection");

const create = async (contactId, clusterId) => {
  try {
    const connection = await createConnection();
    const sql = "INSERT INTO GroupContact (contactId, clusterId) VALUES (?, ?)";
    const values = [contactId, clusterId];

    const result = await connection.execute(sql, values);

    return result;
  } catch (error) {
    throw error;
  }
};

const update = async (id, contactId, clusterId) => {
  try {
    const connection = await createConnection();
    const sql =
      "UPDATE GroupContact SET contactId = ?, clusterId = ? WHERE id = ?";
    const values = [contactId, clusterId, id];

    const result = await connection.execute(sql, values);

    return result;
  } catch (error) {
    throw error;
  }
};

const deleted = async (id) => {
  try {
    const connection = await createConnection();
    const sql = "DELETE FROM GroupContact WHERE id = ?";
    const value = [id];

    const result = await connection.execute(sql, value);

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = { create, update, deleted };
