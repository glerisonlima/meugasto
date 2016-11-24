-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema meugasto
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema meugasto
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `meugasto` DEFAULT CHARACTER SET utf8 ;
USE `meugasto` ;

-- -----------------------------------------------------
-- Table `meugasto`.`tipodespesa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meugasto`.`tipodespesa` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `tipodespesa` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `meugasto`.`tiporeceita`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meugasto`.`tiporeceita` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `tipoReceita` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
