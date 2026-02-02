const {
  admin,
  requests,
  donors,
  notifications,
  BloodType,
  RequestStatus,
  locationTetove
} = require("../models/sampleData");

const getDashboard = (req, res) => {
  res.render("admin/dashboard", {
    title: "Paneli i Administratorit",
    admin,
    requests,
    donors,
    notifications
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

const postCreateDonor = (req, res) => {
  const nextId = donors.length ? donors[donors.length - 1].id + 1 : 1;
  donors.push({
    id: nextId,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    role: "Dhurues",
    availability: true,
    lastDonationDate: req.body.lastDonationDate || null
  });

  res.redirect("/admin");
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
  postCreateDonor,
  postCreateRequest
};
