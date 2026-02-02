const User = require("./user");

class Donor extends User {
  constructor({ availability, ...rest }) {
    super(rest);
    this.availability = availability;
  }

  receiveNotification() {
    return "Merr njoftim";
  }

  confirmDonation() {
    return "Konfirmo dhurim";
  }
}

module.exports = Donor;
