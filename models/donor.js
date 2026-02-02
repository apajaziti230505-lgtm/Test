const User = require("./user");

class Donor extends User {
  constructor({ availability, lastDonationDate, ...rest }) {
    super(rest);
    this.availability = availability;
    this.lastDonationDate = lastDonationDate;
  }

  receiveNotification() {
    return "Merr njoftim";
  }

  confirmDonation() {
    return "Konfirmo dhurim";
  }
}

module.exports = Donor;
