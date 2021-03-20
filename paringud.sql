USE homeworks;
DROP TABLE homeworks;
DROP TABLE subjects;
DROP TABLE lecturers;
DROP TABLE users;

CREATE TABLE IF NOT EXISTS `homeworks`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `homeworks`.`lecturers` (
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
    REFERENCES `homeworks`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `homeworks`.`subjects` (
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
    REFERENCES `homeworks`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_subjects_lecturers1`
    FOREIGN KEY (`lecturers_id`)
    REFERENCES `homeworks`.`lecturers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `homeworks`.`homeworks` (
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
    REFERENCES `homeworks`.`subjects` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_homeworks_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `homeworks`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



INSERT INTO users SET firstName = 'Juku', lastName = 'Juurikas', email = 'juku@juurikas.ee', password = 'juku';

SELECT * FROM users;
UPDATE users SET lastName = 'Tomat', email = 'toomas@tomat.ee', password = '$2b$10$DdqaDeTA2KPR8EsasDNu4u.G.ucMVZUBPTv4IJealy6CN5kkoOoN2' WHERE id = 1;

SELECT firstname, lastName, email FROM users;

INSERT INTO lecturers SET firstName = 'First', lastName = 'Lecturer', email = 'first@lecturer.ee', users_Id = 1;
INSERT INTO subjects SET name = 'Riistvara', users_Id = 1, lecturers_Id = 1;
INSERT INTO homeworks SET name = 'Esitlus 1', dueDate = '20.12.2020', subjects_id = 1, users_id = 1;

SELECT * FROM homeworks;

SELECT * FROM subjects AS s INNER JOIN lecturers ON s.lecturers_id;
SELECT h.name, h.description, h.dueDate, s.name, l.email
	FROM homeworks AS h
		INNER JOIN subjects s ON h.subjects_id
        INNER JOIN lecturers l on s.lecturers_id
	WHERE h.users_id = 1 AND done = 0;
    
SELECT * FROM subjects;

SELECT h.*, s.name, l.email
                FROM homeworks h
                  INNER JOIN subjects s ON h.subjects_id = s.id
                  INNER JOIN lecturers l ON s.lecturers_id = l.id
                WHERE h.users_id = 1 AND h.id = 1;

SELECT * FROM homeworks;

