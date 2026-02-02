const { requests, donors } = require("../models/sampleData");

const getHome = (req, res) => {
  res.render("home", {
    title: "Aplikacioni per Dhurimin e Gjakut",
    stats: {
      requests: requests.length,
      donors: donors.length
    }
  });
};

module.exports = {
  getHome
};
