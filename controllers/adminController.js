const {
  admin,
  requests,
  donors,
  notifications,
  BloodType,
  RequestStatus,
  locationTetove
} = require("../models/sampleData");

const allowedDomains = ["gmail.com", "hotmail.com", "outlook.com", "yahoo.com"];

const isValidEmailDomain = (email) => {
  const domain = email.split("@")[1];
  if (!domain) {
    return false;
  }
  return allowedDomains.includes(domain.toLowerCase());
};

const isValidMacedoniaPhone = (phone) => {
  const normalized = phone.replace(/\s+/g, "");
  const international = /^\+3897\d{7}$/;
  const local = /^07\d{7}$/;
  return international.test(normalized) || local.test(normalized);
};

const getDashboard = (req, res) => {
  res.render("admin/dashboard", {
    title: "Paneli i Administratorit",
    admin,
    requests,
    donors,
    notifications,
    formError: null
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
  const { name, email, phone, password, lastDonationDate } = req.body;
  if (!isValidEmailDomain(email)) {
    return res.status(400).render("admin/dashboard", {
      title: "Paneli i Administratorit",
      admin,
      requests,
      donors,
      notifications,
      formError: "Email duhet te jete nga domenet gmail.com, hotmail.com, outlook.com ose yahoo.com."
    });
  }

  if (!isValidMacedoniaPhone(phone)) {
    return res.status(400).render("admin/dashboard", {
      title: "Paneli i Administratorit",
      admin,
      requests,
      donors,
      notifications,
      formError: "Numri i telefonit duhet te jete i Maqedonise (07XXXXXXX ose +3897XXXXXXX)."
    });
  }

  const nextId = donors.length ? donors[donors.length - 1].id + 1 : 1;
  donors.push({
    id: nextId,
    name,
    email,
    phone,
    password,
    role: "Dhurues",
    availability: true,
    lastDonationDate: lastDonationDate || null
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
