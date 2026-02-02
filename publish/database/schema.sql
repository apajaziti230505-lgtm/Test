CREATE DATABASE BloodDonationDb;
GO

USE BloodDonationDb;
GO

CREATE TABLE Users (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(120) NOT NULL,
    Phone NVARCHAR(20) NOT NULL,
    PasswordHash NVARCHAR(200) NOT NULL,
    Role NVARCHAR(30) NOT NULL
);

CREATE TABLE Donors (
    Id INT PRIMARY KEY,
    Availability BIT NOT NULL,
    LastDonationDate DATE NULL,
    CONSTRAINT FK_Donors_Users FOREIGN KEY (Id) REFERENCES Users(Id)
);

CREATE TABLE Locations (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    City NVARCHAR(80) NOT NULL,
    Region NVARCHAR(80) NOT NULL
);

CREATE TABLE Requests (
    RequestId INT IDENTITY(1,1) PRIMARY KEY,
    BloodType NVARCHAR(10) NOT NULL,
    Urgency BIT NOT NULL,
    Description NVARCHAR(500) NOT NULL,
    Status NVARCHAR(30) NOT NULL,
    Deadline DATE NOT NULL,
    CreatedAt DATE NOT NULL,
    LocationId INT NOT NULL,
    CONSTRAINT FK_Requests_Locations FOREIGN KEY (LocationId) REFERENCES Locations(Id)
);

CREATE TABLE Notifications (
    NotificationId INT IDENTITY(1,1) PRIMARY KEY,
    Message NVARCHAR(500) NOT NULL,
    SentAt DATE NOT NULL,
    IsRead BIT NOT NULL,
    RequestId INT NULL,
    DonorId INT NULL,
    CONSTRAINT FK_Notifications_Requests FOREIGN KEY (RequestId) REFERENCES Requests(RequestId),
    CONSTRAINT FK_Notifications_Donors FOREIGN KEY (DonorId) REFERENCES Donors(Id)
);
GO
