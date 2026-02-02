const { admin, requests, BloodType, RequestStatus, locationTetove } = require("../models/sampleData");

const getDashboard = (req, res) => {
  res.render("admin/dashboard", {
    title: "Paneli i Administratorit",
    admin,
    requests
  });
};

const getCreateRequest = (req, res) => {
  res.render("admin/create-request", {
    title: "Krijo kerkese",
    bloodTypes: Object.values(BloodType),
    statuses: Object.values(RequestStatus),
    location: locationTetove
  });
};

const postCreateRequest = (req, res) => {
  const nextId = requests.length ? requests[requests.length - 1].requestId + 1 : 100;
  requests.push({
    requestId: nextId,
    bloodType: req.body.bloodType,
    urgency: req.body.urgency === "on",
    description: req.body.description,
    status: RequestStatus.AKTIVE,
    deadline: req.body.deadline,
    createdAt: new Date().toISOString().slice(0, 10),
    location: locationTetove
  });

  res.redirect("/admin");
};

module.exports = {
  getDashboard,
  getCreateRequest,
  postCreateRequest
};
