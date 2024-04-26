const mysql = require("mysql2/promise");

const createConnection = async () => {
  try {
    const connection = await mysql.createConnection(
      "mysql://root:dummyPassword_123@localhost/address_book"
    );

    return connection;
  } catch (error) {
    throw error;
  }
};

module.exports = createConnection;