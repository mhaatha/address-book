const { Console } = require("console");
const { Transform } = require("stream");

const table = (input) => {
  const ts = new Transform({
    transform(chunk, enc, cb) {
      cb(null, chunk);
    },
  });

  const logger = new Console({ stdout: ts });
  logger.table(input);

  const table = (ts.read() || "").toString();
  let result = "";

  for (let row of table.split(/[\r\n]+/)) {
    let r = row.replace(/[^┬]*┬/, "┌");
    r = r.replace(/^├─*┼/, "├");
    r = r.replace(/│[^│]*/, "");
    r = r.replace(/^└─*┴/, "└");
    r = r.replace(/'/g, " ");
    result += `${r}\n`;
  }

  console.log(result);
};

const help = async () => {
  try {
    console.log(`
    ====================
    ADDRESS BOOK COMMAND
    ====================

    > node index.js create Contact <name> <phoneNumber> <company> <email>      
    > node index.js update Contact <id> <name> <phoneNumber> <company> <email>     
    > node index.js delete Contact <id>      
    > node index.js showContact      
    > node index.js create Clusters <clusterName>      
    > node index.js update Clusters <id> <clusterName>     
    > node index.js delete Clusters <id>     
    > node index.js showClusters <clusterName>    
    > node index.js create ContactGroups <contactId> <clusterId>     
    > node index.js update ContactGroups <id> <contactId> <clusterId>      
    > node index.js delete ContactGroups <id>  
    > node index.js help       
    `);
  } catch (error) {
    throw error;
  }
};

// CONTACT
const createContact = async (data) => {
  try {
    console.log(`Contact created with id ${data[0].insertId}`);
    process.exit(0);
  } catch (error) {
    throw error;
  }
};

const updateContact = async (data) => {
  try {
    if (data[0].changedRows > 0) {
      console.log("Contact updated successfully.");
    } else {
      console.log("No data updated.");
    }
    console.log(data[0].info);
    process.exit(0);
  } catch (error) {
    throw error;
  }
};

const deleteContact = async (id, data) => {
  try {
    if (data[0].affectedRows > 0) {
      console.log(`Contact with id ${id} is deleted.`);
    } else {
      console.log(`No data deleted.`);
    }
    console.log(`Affected rows: ${data[0].affectedRows}`);
    process.exit(0);
  } catch (error) {
    throw error;
  }
};

const showContact = async (data) => {
  try {
    if (data[0].length > 0) {
      table(data[0]);
    } else {
      console.log("No Contact found.");
    }
    process.exit(0);
  } catch (error) {
    throw error;
  }
};

// CLUSTERS
const createClusters = async (data) => {
  try {
    console.log(`Cluster created with id ${data[0].insertId}`);
    process.exit(0);
  } catch (error) {
    throw error;
  }
};

const updateClusters = async (data) => {
  try {
    if (data[0].changedRows > 0) {
      console.log("Cluster updated successfully.");
    } else {
      console.log("No data updated.");
    }
    console.log(data[0].info);
    process.exit(0);
  } catch (error) {
    throw error;
  }
};

const deleteClusters = async (id, data) => {
  try {
    if (data[0].affectedRows > 0) {
      console.log(`Cluster with id ${id} is deleted.`);
    } else {
      console.log(`No data deleted.`);
    }
    console.log(`Affected rows: ${data[0].affectedRows}`);
    process.exit(0);
  } catch (error) {
    throw error;
  }
};

// GROUP CONTACT
const createGroupContact = async (data) => {
  try {
    console.log(`Group Contact created with id ${data[0].insertId}`);
    process.exit(0);
  } catch (error) {
    throw error;
  }
};

const updateGroupContact = async (data) => {
  try {
    if (data[0].changedRows > 0) {
      console.log("Group Contact updated successfully.");
    } else {
      console.log("No data updated.");
    }
    console.log(data[0].info);
    process.exit(0);
  } catch (error) {
    throw error;
  }
};

const deleteGroupContact = async (id, data) => {
  try {
    if (data[0].affectedRows > 0) {
      console.log(`Group Contact with id ${id} is deleted.`);
    } else {
      console.log(`No data deleted.`);
    }
    console.log(`Affected rows: ${data[0].affectedRows}`);
    process.exit(0);
  } catch (error) {
    throw error;
  }
};

const showGroups = async (data) => {
  try {
    if (data[0].length > 0) {
      table(data[0]);
    } else {
      console.log("No data with that clusterName found.");
    }
    process.exit(0);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  help,
  createContact,
  updateContact,
  deleteContact,
  createClusters,
  updateClusters,
  deleteClusters,
  createGroupContact,
  updateGroupContact,
  deleteGroupContact,
  showContact,
  showGroups,
};
