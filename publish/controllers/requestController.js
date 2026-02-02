const { requests } = require("../models/sampleData");

const getRequests = (req, res) => {
  res.render("requests/index", {
    title: "Kerquesat per gjak",
    requests
  });
};

const getRequestDetail = (req, res) => {
  const request = requests.find((item) => item.requestId === Number(req.params.id));
  if (!request) {
    return res.status(404).render("not-found", { title: "Kerkesa nuk u gjet" });
  }

  return res.render("requests/detail", {
    title: `Kerkesa #${request.requestId}`,
    request
  });
};

module.exports = {
  getRequests,
  getRequestDetail
};
