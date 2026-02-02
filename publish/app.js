const express = require("express");
const path = require("path");

const indexRoutes = require("./routes/index");
const adminRoutes = require("./routes/admin");
const donorRoutes = require("./routes/donor");
const requestRoutes = require("./routes/requests");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRoutes);
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
