const BloodType = Object.freeze({
  A_POSITIVE: "A+",
  A_NEGATIVE: "A-",
  B_POSITIVE: "B+",
  B_NEGATIVE: "B-",
  AB_POSITIVE: "AB+",
  AB_NEGATIVE: "AB-",
  O_POSITIVE: "O+",
  O_NEGATIVE: "O-"
});

const RequestStatus = Object.freeze({
  KRIJUAR: "Krijuar",
  AKTIVE: "Aktive",
  NE_PROCES: "Ne proces",
  E_PLOTESUAR: "E plotesuar",
  ANULUAR: "Anuluar"
});

module.exports = {
  BloodType,
  RequestStatus
};
