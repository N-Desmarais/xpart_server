CREATE TABLE `Documents` (
  `doc_id` int PRIMARY KEY AUTO_INCREMENT,
  `project` int,
  `class` int,
  `part_num` varchar(255) NOT NULL,
  `revision` varchar(255),
  `description` varchar(255),
  `requestor` int,
  `checker` int,
  `approver` int,
  `creation_date` date,
  `ready_date` date,
  `checked_date` date,
  `approved_date` date,
  `released_date` date,
  `revision_reason` varchar(255)
);

CREATE TABLE `Projects` (
  `project_id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `code` varchar(255),
  `owner` int
);

CREATE TABLE `Document_Classes` (
  `class_id` int PRIMARY KEY AUTO_INCREMENT,
  `code` varchar(255),
  `description` varchar(255)
);

CREATE TABLE `Users` (
  `user_id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `email` varchar(255) UNIQUE,
  `pwd_hash` varchar(255),
  `role` int
);

CREATE TABLE `User_roles` (
  `role_id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);

ALTER TABLE `Documents` ADD FOREIGN KEY (`project`) REFERENCES `Projects` (`project_id`);

ALTER TABLE `Documents` ADD FOREIGN KEY (`class`) REFERENCES `Document_Classes` (`class_id`);

ALTER TABLE `Documents` ADD FOREIGN KEY (`requestor`) REFERENCES `Users` (`user_id`);

ALTER TABLE `Documents` ADD FOREIGN KEY (`checker`) REFERENCES `Users` (`user_id`);

ALTER TABLE `Documents` ADD FOREIGN KEY (`approver`) REFERENCES `Users` (`user_id`);

ALTER TABLE `Projects` ADD FOREIGN KEY (`owner`) REFERENCES `Users` (`user_id`);

ALTER TABLE `Users` ADD FOREIGN KEY (`role`) REFERENCES `User_roles` (`role_id`);
