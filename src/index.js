const command = process.argv[2];
const argument = process.argv.slice(3);
const contactController = require("./controller/contactController");
const clustersController = require("./controller/clustersController");

switch (command) {
  case "create":
    if (argument[0] === "Contact") {
      contactController.create(argument[1], argument[2], argument[3], argument[4]);
    } else if (argument[0] === "Clusters") {
      clustersController.create(argument[1]);
    }
    break;

  case "update":
    if (argument[0] === "Contact") {
      contactController.update(argument[1], argument[2], argument[3], argument[4], argument[5]);
    } else if (argument[0] === "Clusters") {
      clustersController.update(argument[1], argument[2]);
    }
    break;

  case "delete":
    if (argument[0] === "Contact") {
      contactController.deleted(argument[1]);
    } else if (argument[0] === "Clusters") {
      clustersController.deleted(argument[1]);
    }
    break;

  case "showContact":
    break;

  case "showGroups":
    break;

  default:
    contactController.help();
    break;
}
