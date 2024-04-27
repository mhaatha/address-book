const createConnection = require("../connection/connection");

const create = async (clusterName) => {
  try {
    const connection = await createConnection();
    const sql = "INSERT INTO Clusters (clusterName) VALUES (?)";
    const values = [clusterName];

    const result = await connection.execute(sql, values);

    return result;
  } catch (error) {
    throw error;
  }
};

const update = async (id, clusterName) => {
  try {
    const connection = await createConnection();
    const sql = "UPDATE Clusters SET clusterName = ? WHERE id = ?";
    const values = [clusterName, id];

    const result = await connection.execute(sql, values);

    return result;
  } catch (error) {
    throw error;
  }
};

const deleted = async (id) => {
  try {
    const connection = await createConnection();
    const sql = "DELETE FROM Clusters WHERE id = ?";
    const value = [id];

    // Delete in GroupContact
    const sql2 = "DELETE FROM GroupContact WHERE clusterId = ?";
    await connection.execute(sql2, value);

    const result = connection.execute(sql, value);

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = { create, update, deleted };
