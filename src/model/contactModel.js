const createConnection = require("../connection/connection");

const create = async (name, phoneNumber, company, email) => {
  try {
    const connection = await createConnection();
    const sql =
      "INSERT INTO `Contact`(`name`, `phoneNumber`, `company`, `email`) VALUES (?, ?, ?, ?)";
    const values = [name, phoneNumber, company, email];

    const result = await connection.execute(sql, values);

    return result;
  } catch (error) {
    throw error;
  }
};

const update = async (id, name, phoneNumber, company, email) => {
  try {
    const connection = await createConnection();
    const sql =
      "UPDATE Contact SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?";
    const values = [name, phoneNumber, company, email, id];

    const result = await connection.execute(sql, values);

    return result;
  } catch (error) {
    throw error;
  }
};

const deleted = async (id) => {
  try {
    const connection = await createConnection();
    const sql = "DELETE FROM Contact WHERE id = ?";
    const value = [id];

    // Delete in GroupContact
    const sql2 = "DELETE FROM GroupContact WHERE contactId = ?";
    await connection.execute(sql2, value);
    
    const result = await connection.execute(sql, value);
    
    return result;
  } catch (error) {
    throw error;
  }
};

const show = async () => {
  try {
    const connection = await createConnection();
    const sql = `
    SELECT Contact.id, Contact.name, Contact.phoneNumber, Contact.company, Contact.email, Clusters.clusterName
    FROM Contact
    INNER JOIN GroupContact ON Contact.id=GroupContact.contactId
    INNER JOIN Clusters ON Clusters.id=GroupContact.clusterId
    `;

    const result = await connection.execute(sql);

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = { create, update, deleted, show };
