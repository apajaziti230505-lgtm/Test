class Request {
  constructor({ requestId, bloodType, urgency, description, status, deadline, createdAt, location }) {
    this.requestId = requestId;
    this.bloodType = bloodType;
    this.urgency = urgency;
    this.description = description;
    this.status = status;
    this.deadline = deadline;
    this.createdAt = createdAt;
    this.location = location;
  }
}

module.exports = Request;
