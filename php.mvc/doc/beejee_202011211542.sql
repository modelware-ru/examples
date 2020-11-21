--
-- Скрипт сгенерирован Devart dbForge Studio 2020 for MySQL, Версия 9.0.435.0
-- Домашняя страница продукта: http://www.devart.com/ru/dbforge/mysql/studio
-- Дата скрипта: 21.11.2020 15:42:15
-- Версия сервера: 5.7.26
-- Версия клиента: 4.1
--

-- 
-- Отключение внешних ключей
-- 
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;

-- 
-- Установить режим SQL (SQL mode)
-- 
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 
-- Установка кодировки, с использованием которой клиент будет посылать запросы на сервер
--
SET NAMES 'utf8';

--
-- Установка базы данных по умолчанию
--
USE beejee;

--
-- Удалить таблицу `person`
--
DROP TABLE IF EXISTS person;

--
-- Удалить таблицу `task`
--
DROP TABLE IF EXISTS task;

--
-- Установка базы данных по умолчанию
--
USE beejee;

--
-- Создать таблицу `task`
--
CREATE TABLE task (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(50) DEFAULT NULL,
  email varchar(50) DEFAULT NULL,
  text text DEFAULT NULL,
  is_completed enum ('Y', 'N') NOT NULL DEFAULT 'N',
  is_updated enum ('Y', 'N') NOT NULL DEFAULT 'N',
  PRIMARY KEY (id)
)
ENGINE = INNODB,
AUTO_INCREMENT = 19,
AVG_ROW_LENGTH = 5461,
CHARACTER SET utf8,
COLLATE utf8_general_ci;

--
-- Создать таблицу `person`
--
CREATE TABLE person (
  id int(11) NOT NULL AUTO_INCREMENT,
  login varchar(50) DEFAULT NULL,
  password char(20) DEFAULT NULL,
  salt char(32) DEFAULT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
AUTO_INCREMENT = 2,
AVG_ROW_LENGTH = 16384,
CHARACTER SET utf8,
COLLATE utf8_general_ci;

-- 
-- Вывод данных для таблицы task
--
INSERT INTO task VALUES
(16, 'w', 'w@d.com', 'dddd', 'N', 'N'),
(17, 'w', 'w@d.com', 'dddd', 'N', 'N'),
(18, 'w', 'w@d.com', 'dddd', 'N', 'N');

-- 
-- Вывод данных для таблицы person
--
INSERT INTO person VALUES
(1, 'admin', '0dSfcCOKs1bhg', '0d7ef92935188172ffbf7c79e921bd1e');

-- 
-- Восстановить предыдущий режим SQL (SQL mode)
--
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;

-- 
-- Включение внешних ключей
-- 
/*!40014 SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS */;