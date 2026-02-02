const User = require("./user");

class Administrator extends User {
  createRequest() {
    return "Krijo kerkese";
  }

  updateRequest() {
    return "Perditeso kerkese";
  }

  closeRequest() {
    return "Mbyll kerkese";
  }

  viewReports() {
    return "Shiko raporte";
  }

  manageUsers() {
    return "Menaxho perdorues";
  }
}

module.exports = Administrator;
