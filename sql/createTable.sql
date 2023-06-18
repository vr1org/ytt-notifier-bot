CREATE DATABASE yttNotifier; -- yttNotifierTest
GO

USE yttNotifier; -- yttNotifierTest
GO 
-- человек участник
CREATE TABLE participant (
  id INT IDENTITY NOT NULL,
  name VARCHAR(1000) NOT NULL,
  companyId VARCHAR(1000) NOT NULL, 
  chatId INT NOT NULL,
  telegramId VARCHAR(1000) NOT NULL,
  adminApproved INT NOT NULL,
  adminComment VARCHAR(1000),   
  CONSTRAINT participantPK PRIMARY KEY (id)
);

-- и его глобальные настройки
CREATE TABLE participantSettings (
  participantId INT NOT NULL,
  defaultNotification INT NOT NULL CHECK (defaultNotification > 2 AND defaultNotification < 48),
  language CHAR(2) NOT NULL,
  CONSTRAINT participantSettingsPK PRIMARY KEY (participantId),  
  CONSTRAINT participantSettingsFK FOREIGN KEY (participantId) REFERENCES participant (id)
);

-- спортивный кружок / секция
CREATE TABLE section ( 
	id INT IDENTITY NOT NULL,
	name VARCHAR(1000) NOT NULL,
	adminTelegramId VARCHAR(1000) NOT NULL,
  CONSTRAINT sectionPK PRIMARY KEY (id)
);


CREATE TABLE meeting (
  id INT IDENTITY NOT NULL,
  sectionId INT NOT NULL,
  name VARCHAR(1000) NOT NULL,
  address VARCHAR(1000) NOT NULL,
  description VARCHAR(1000),
  weekday CHAR(2) NOT NULL CHECK (weekday IN ('пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс')),
  hours INT NOT NULL,
  minutes INT NOT NULL,
  active INT NOT NULL,
  CONSTRAINT meetingPK PRIMARY KEY (id),
  CONSTRAINT meetingSectionFK FOREIGN KEY (sectionId) REFERENCES section (id)
);



CREATE TABLE participant2section (
  participantId INT NOT NULL,
  sectionId INT NOT NULL,
  CONSTRAINT participant2sectionPK PRIMARY KEY (participantId, sectionId),
  CONSTRAINT participant2sectionSectionFK FOREIGN KEY (sectionId) REFERENCES section (id),
  CONSTRAINT participant2sectionParticipantFK FOREIGN KEY (participantId) REFERENCES participant (id)
);

CREATE TABLE silence (
 id INT IDENTITY NOT NULL,
 participantId INT NOT NULL,
 fromHour INT NOT NULL,
 tillHour INT NOT NULL,
 CONSTRAINT silencePK PRIMARY KEY (id),
 CONSTRAINT silenceParticipantFK FOREIGN KEY (participantId) REFERENCES participant (id),
 CONSTRAINT silenceCK CHECK (fromHour <> tillHour AND fromHour < 24 AND fromHour >= 0 AND tillHour < 24 AND tillHour >= 24)
);

CREATE TABLE notificationRule ( 
 participantId INT NOT NULL,
 meetingId INT NOT NULL,
 hoursBeforeStart INT NOT NULL CHECK (hoursBeforeStart > 2 AND hoursBeforeStart < 48),
 CONSTRAINT notificationRulePK PRIMARY KEY (participantId, meetingId),
 CONSTRAINT notificationRuleParticipantFK FOREIGN KEY (participantId) REFERENCES participant (id),
 CONSTRAINT notificationRuleMeetingFK FOREIGN KEY (meetingId) REFERENCES meeting (id)
);

CREATE TABLE participation (
  id INT IDENTITY NOT NULL,
  meetingId INT NOT NULL,
  date DATE NOT NULL, 
  willParticipate INT NOT NULL,
  participated INT NOT NULL,
  CONSTRAINT participationPK PRIMARY KEY (id),
  CONSTRAINT participationMeetingFK FOREIGN KEY (meetingId) REFERENCES meeting (id)
);

CREATE TABLE l12n (
  language CHAR(2) NOT NULL,
  key VARCHAR(100) NOT NULL,
  value VARCHAR(1000) NOL NULL,
  CONSTRAINT l12nPK PRIMARY KEY (language, key)
);
