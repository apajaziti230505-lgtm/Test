const Administrator = require("./administrator");
const Donor = require("./donor");
const Location = require("./location");
const Request = require("./request");
const Notification = require("./notification");
const { BloodType, RequestStatus } = require("./enums");

const locationTetove = new Location({ city: "Tetove", region: "Pollog" });

const admin = new Administrator({
  id: 1,
  name: "Arbin Pajaziti",
  email: "admin@bloodapp.com",
  phone: "+38970111222",
  password: "admin123",
  role: "Administrator"
});

const donors = [
  new Donor({
    id: 2,
    name: "Blerim Aliu",
    email: "blerim@gmail.com",
    phone: "+38970111223",
    password: "donor123",
    role: "Dhurues",
    availability: true,
    lastDonationDate: "2024-01-15",
    bloodType: BloodType.O_POSITIVE
  }),
  new Donor({
    id: 3,
    name: "Arta Ismaili",
    email: "arta@hotmail.com",
    phone: "+38970111224",
    password: "donor123",
    role: "Dhurues",
    availability: true,
    lastDonationDate: "2023-12-03",
    bloodType: BloodType.A_POSITIVE
  })
];

const firstNames = [
  "Arben",
  "Besa",
  "Dritan",
  "Elira",
  "Fisnik",
  "Gent",
  "Hana",
  "Ilir",
  "Jeta",
  "Krenar",
  "Lira",
  "Mira",
  "Naim",
  "Orges",
  "Pranvera",
  "Qemal",
  "Rina",
  "Sokol",
  "Teuta",
  "Valon"
];

const lastNames = [
  "Berisha",
  "Krasniqi",
  "Dauti",
  "Kamberi",
  "Hoxha",
  "Ismaili",
  "Jashari",
  "Kola",
  "Latifi",
  "Mehmeti",
  "Nuredini",
  "Osmani",
  "Petro",
  "Qorri",
  "Rexhepi",
  "Syla",
  "Tahiraj",
  "Uka",
  "Veliu",
  "Zeqiri"
];

const bloodTypes = Object.values(BloodType);

for (let i = 0; i < 100; i += 1) {
  const first = firstNames[i % firstNames.length];
  const last = lastNames[(i + 3) % lastNames.length];
  const id = donors.length + 2;
  const email = `${first.toLowerCase()}.${last.toLowerCase()}${id}@gmail.com`;
  const phone = `+38970${String(500000 + i).padStart(6, "0")}`;
  const lastDonationDate = i % 3 === 0 ? null : `2023-0${(i % 9) + 1}-1${i % 9}`;
  donors.push(
    new Donor({
      id,
      name: `${first} ${last}`,
      email,
      phone,
      password: "donor123",
      role: "Dhurues",
      availability: i % 2 === 0,
      lastDonationDate,
      bloodType: bloodTypes[i % bloodTypes.length]
    })
  );
}

const requests = [
  new Request({
    requestId: 101,
    bloodType: BloodType.O_POSITIVE,
    urgency: true,
    description: "Kerkese urgjente per gjak O+ ne Tetove",
    status: RequestStatus.AKTIVE,
    deadline: "2024-05-12",
    createdAt: "2024-05-10",
    location: locationTetove
  })
];

const notifications = [
  new Notification({
    notificationId: 1,
    message: "Kerkese urgjente per gjak O+ ne Tetove",
    sentAt: "2024-05-10",
    isRead: false
  }),
  new Notification({
    notificationId: 2,
    message: "Kerkese urgjente per gjak O+ ne Tetove",
    sentAt: "2024-05-10",
    isRead: false
  })
];

module.exports = {
  admin,
  donors,
  requests,
  notifications,
  locationTetove,
  BloodType,
  RequestStatus
};
