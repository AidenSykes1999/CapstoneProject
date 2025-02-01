-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: foodie
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dishes`
--

DROP TABLE IF EXISTS `dishes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dishes` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` float DEFAULT NULL,
  `restaurant_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKpslsa9mci7gsfhwukb3mx7s6n` (`restaurant_id`),
  CONSTRAINT `FKpslsa9mci7gsfhwukb3mx7s6n` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurants` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dishes`
--

LOCK TABLES `dishes` WRITE;
/*!40000 ALTER TABLE `dishes` DISABLE KEYS */;
INSERT INTO `dishes` VALUES (1,'Beef Burger',3,1),(2,'Cheeseburger',4,1),(3,'Pepperoni Pizza',10,2),(4,'Veggie Pizza',9,2),(5,'California Roll',5,3),(6,'Edamame',2,3),(7,'Penne Pasta',2,4),(8,'Spaghetti Bolognaise',4,4),(9,'Double Bacon Burger',5,1),(10,'Chicken Nuggets',2,1),(11,'BBQ Chicken Pizza',11,2),(12,'Garlic Bread',3,2),(13,'Salmon Nigiri',5,3),(14,'Miso Soup',2,3),(15,'Margherita Pizza',8,4),(16,'Caesar Salad',5,4),(17,'Beef Tacos',4,5),(18,'Chicken Tacos',4,5),(19,'Loaded Nachos',7,5),(20,'Quesadilla',5,5),(21,'Chicken Tikka Masala',8,6),(22,'Lamb Biryani',9,6),(23,'Garlic Naan',3,6),(24,'Vegetable Samosas',3,6),(25,'BBQ Ribs',13,7),(26,'Pulled Pork Sandwich',9,7),(27,'Cornbread',3,7),(28,'Mac & Cheese',5,7),(29,'Vegan Burger',7,8),(30,'Quinoa Salad',5,8),(31,'Tofu Stir-Fry',8,8),(32,'Sweet Potato Fries',4,8),(33,'Grilled Salmon',13,9),(34,'Fish & Chips',10,9),(35,'Garlic Butter Prawns',11,9),(36,'Lobster Bisque',8,9),(37,'Ribeye Steak',19,10),(38,'Filet Mignon',25,10),(39,'Mashed Potatoes',4,10),(40,'Grilled Asparagus',5,10),(41,'Chicken Mega Box',15,13),(42,'Chicken Mega Box',15.99,12),(43,'Special Curry',8.99,13);
/*!40000 ALTER TABLE `dishes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurants`
--

DROP TABLE IF EXISTS `restaurants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurants` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `location` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurants`
--

LOCK TABLES `restaurants` WRITE;
/*!40000 ALTER TABLE `restaurants` DISABLE KEYS */;
INSERT INTO `restaurants` VALUES (1,'Greasy Grove','Manchester'),(2,'Pizza Place','Manchester'),(3,'Sushi Shop','Leeds'),(4,'Tomato Town','Leeds'),(5,'Taco Time','Liverpool'),(6,'Curry Corner','Birmingham'),(7,'BBQ Barn','Sheffield'),(8,'Vegan Delights','Manchester'),(9,'Seafood Shack','Bristol'),(10,'Steakhouse Supreme','London'),(11,'Golden Hind','Brighouse'),(12,'Chicken Express','Brighouse'),(13,'Golden Bamboo','Brighouse');
/*!40000 ALTER TABLE `restaurants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `img` longblob,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `users_chk_1` CHECK ((`role` between 0 and 1))
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Aidensykes1999@gmail.com',NULL,'admin','$2a$10$2cEu8BdHBjbxbkCXho.7QeOzjVskZRgWX9o8lUGzHTUwTxa80brA2',0),(2,'aidensykes123@gmail.com',NULL,'Aiden Sykes','$2a$10$EH0a.GfiE80trsZc1IH/DOprLsb.YShhnYTErRipd5IYQW0.5rLWO',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-01  0:49:29
