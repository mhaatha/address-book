const view = require("../view/view");

module.exports = async function help() {
  try {
    const result = await view.help();

    return result;
  } catch (error) {
    throw error;
  }
};
