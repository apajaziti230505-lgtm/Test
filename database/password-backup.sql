USE BloodDonationDb;
GO

CREATE TABLE CredentialBackups (
    BackupId INT IDENTITY(1,1) PRIMARY KEY,
    UserEmail NVARCHAR(120) NOT NULL,
    UserRole NVARCHAR(30) NOT NULL,
    PlainPassword NVARCHAR(120) NOT NULL,
    CreatedAt DATETIME NOT NULL DEFAULT GETDATE()
);

INSERT INTO CredentialBackups (UserEmail, UserRole, PlainPassword)
VALUES
    ('admin@bloodapp.com', 'Administrator', 'admin123'),
    ('blerim@gmail.com', 'Dhurues', 'donor123');
GO
