class Notification {
  constructor({ notificationId, message, sentAt, isRead }) {
    this.notificationId = notificationId;
    this.message = message;
    this.sentAt = sentAt;
    this.isRead = isRead;
  }
}

module.exports = Notification;
