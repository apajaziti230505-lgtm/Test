const { requests, RequestStatus } = require("../models/sampleData");

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
    request,
    confirmationMessage: null
  });
};

const postConfirmDonation = (req, res) => {
  const request = requests.find((item) => item.requestId === Number(req.params.id));
  if (!request) {
    return res.status(404).render("not-found", { title: "Kerkesa nuk u gjet" });
  }
  request.status = RequestStatus.E_PLOTESUAR;

  return res.render("requests/detail", {
    title: `Kerkesa #${request.requestId}`,
    request,
    confirmationMessage: "Faleminderit per dhurimin e gjakut. Ju jeni nje hero!"
  });
};

module.exports = {
  getRequests,
  getRequestDetail,
  postConfirmDonation
};
