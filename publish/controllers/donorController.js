const { donors, notifications } = require("../models/sampleData");

const getDashboard = (req, res) => {
  const donor = donors.find((item) => item.id === req.user.id) || donors[0];
  res.render("donor/dashboard", {
    title: "Paneli i Dhuruesit",
    donor,
    notifications
  });
};

const toggleAvailability = (req, res) => {
  const donor = donors.find((item) => item.id === req.user.id) || donors[0];
  donor.availability = !donor.availability;
  res.redirect("/donor");
};

module.exports = {
  getDashboard,
  toggleAvailability
};
