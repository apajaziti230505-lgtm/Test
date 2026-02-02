const { notifications } = require("../models/sampleData");

const getNotifications = (req, res) => {
  res.render("notifications/index", {
    title: "Njoftimet",
    notifications
  });
};

module.exports = {
  getNotifications
};
