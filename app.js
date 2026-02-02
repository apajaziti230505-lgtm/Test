const express = require("express");
const path = require("path");

const indexRoutes = require("./routes/index");
const adminRoutes = require("./routes/admin");
const donorRoutes = require("./routes/donor");
const requestRoutes = require("./routes/requests");
const authRoutes = require("./routes/auth");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  const cookieHeader = req.headers.cookie || "";
  req.cookies = cookieHeader.split(";").reduce((acc, part) => {
    if (!part.trim()) {
      return acc;
    }
    const [key, ...value] = part.split("=");
    acc[key.trim()] = decodeURIComponent(value.join("=") || "");
    return acc;
  }, {});
  next();
});

app.use((req, res, next) => {
  const userCookie = req.cookies.session;
  if (userCookie) {
    try {
      req.user = JSON.parse(userCookie);
    } catch (error) {
      req.user = null;
    }
  }
  res.locals.currentUser = req.user || null;
  next();
});

app.use("/", indexRoutes);
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/donor", donorRoutes);
app.use("/requests", requestRoutes);

app.use((req, res) => {
  res.status(404).render("not-found", { title: "Faqja nuk u gjet" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveri po degjon ne http://localhost:${port}`);
});
