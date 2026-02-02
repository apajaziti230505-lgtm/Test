const User = require("./user");

class Donor extends User {
  constructor({ availability, lastDonationDate, bloodType, ...rest }) {
    super(rest);
    this.availability = availability;
    this.lastDonationDate = lastDonationDate;
    this.bloodType = bloodType;
  }

  receiveNotification() {
    return "Merr njoftim";
  }

  confirmDonation() {
    return "Konfirmo dhurim";
  }
}

module.exports = Donor;
