const { donors, notifications, BloodType } = require("../models/sampleData");

const compatibilityMap = {
  [BloodType.O_NEGATIVE]: Object.values(BloodType),
  [BloodType.O_POSITIVE]: [
    BloodType.O_POSITIVE,
    BloodType.A_POSITIVE,
    BloodType.B_POSITIVE,
    BloodType.AB_POSITIVE
  ],
  [BloodType.A_NEGATIVE]: [
    BloodType.A_NEGATIVE,
    BloodType.A_POSITIVE,
    BloodType.AB_NEGATIVE,
    BloodType.AB_POSITIVE
  ],
  [BloodType.A_POSITIVE]: [BloodType.A_POSITIVE, BloodType.AB_POSITIVE],
  [BloodType.B_NEGATIVE]: [
    BloodType.B_NEGATIVE,
    BloodType.B_POSITIVE,
    BloodType.AB_NEGATIVE,
    BloodType.AB_POSITIVE
  ],
  [BloodType.B_POSITIVE]: [BloodType.B_POSITIVE, BloodType.AB_POSITIVE],
  [BloodType.AB_NEGATIVE]: [BloodType.AB_NEGATIVE, BloodType.AB_POSITIVE],
  [BloodType.AB_POSITIVE]: [BloodType.AB_POSITIVE]
};

const getDashboard = (req, res) => {
  const donor = donors.find((item) => item.id === req.user.id) || donors[0];
  const compatibleGroups = compatibilityMap[donor.bloodType] || [];
  res.render("donor/dashboard", {
    title: "Paneli i Dhuruesit",
    donor,
    notifications,
    compatibleGroups
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
