
CREATE TABLE IF NOT EXISTS `homeworks_dev`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS `homeworks_dev`.`lecturers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `users_id` INT NOT NULL,
  `email` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_lecturers_users_idx` (`users_id` ASC),
  CONSTRAINT `fk_lecturers_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `homeworks_dev`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS `homeworks_dev`.`subjects` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `users_id` INT NOT NULL,
  `lecturers_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_subjects_users1_idx` (`users_id` ASC),
  INDEX `fk_subjects_lecturers1_idx` (`lecturers_id` ASC),
  CONSTRAINT `fk_subjects_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `homeworks_dev`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_subjects_lecturers1`
    FOREIGN KEY (`lecturers_id`)
    REFERENCES `homeworks_dev`.`lecturers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS `homeworks_dev`.`homeworks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NULL,
  `dueDate` DATETIME NULL,
  `done` TINYINT NOT NULL DEFAULT 0,
  `subjects_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_homeworks_subjects1_idx` (`subjects_id` ASC),
  INDEX `fk_homeworks_users1_idx` (`users_id` ASC),
  CONSTRAINT `fk_homeworks_subjects1`
    FOREIGN KEY (`subjects_id`)
    REFERENCES `homeworks_dev`.`subjects` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_homeworks_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `homeworks_dev`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
USE homeworks_dev;
INSERT INTO users SET firstName = 'Juku', lastName = 'Juurikas', email = 'juku@juurikas.ee', password = '$2b$10$AkiS2VBzORkDESiXYOc2L.dFgZBykCDAnb5R1F41wp0sSfcPmhl9C';
INSERT INTO lecturers SET firstName = 'First', lastName = 'Lecturer', email = 'first@lecturer.ee', users_Id = 1;
INSERT INTO subjects SET name = 'Riistvara', users_Id = 1, lecturers_Id = 1;
