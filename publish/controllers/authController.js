const { admin, donors } = require("../models/sampleData");

const renderAdminLogin = (req, res) => {
  res.render("auth/admin-login", { title: "Hyrje Administrator" });
};

const renderDonorLogin = (req, res) => {
  res.render("auth/donor-login", { title: "Hyrje Dhurues" });
};

const loginAdmin = (req, res) => {
  const { email, password } = req.body;
  if (email === admin.email && password === admin.password) {
    const payload = JSON.stringify({
      id: admin.id,
      name: admin.name,
      role: "admin"
    });
    res.setHeader("Set-Cookie", `session=${encodeURIComponent(payload)}; Path=/`);
    return res.redirect("/admin");
  }
  return res.status(401).render("auth/admin-login", {
    title: "Hyrje Administrator",
    error: "Kredencialet jane te pasakta."
  });
};

const loginDonor = (req, res) => {
  const { email, password } = req.body;
  const donor = donors.find((item) => item.email === email && item.password === password);

  if (donor) {
    const payload = JSON.stringify({
      id: donor.id,
      name: donor.name,
      role: "donor"
    });
    res.setHeader("Set-Cookie", `session=${encodeURIComponent(payload)}; Path=/`);
    return res.redirect("/donor");
  }

  return res.status(401).render("auth/donor-login", {
    title: "Hyrje Dhurues",
    error: "Kredencialet jane te pasakta."
  });
};

const logout = (req, res) => {
  res.setHeader("Set-Cookie", "session=; Path=/; Max-Age=0");
  res.redirect("/");
};

module.exports = {
  renderAdminLogin,
  renderDonorLogin,
  loginAdmin,
  loginDonor,
  logout
};
