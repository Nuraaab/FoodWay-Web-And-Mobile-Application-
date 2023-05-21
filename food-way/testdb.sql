-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2023 at 03:36 PM
-- Server version: 8.0.33
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `id` int NOT NULL,
  `food_name` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  `catagory` varchar(45) NOT NULL,
  `image` varchar(200) NOT NULL,
  `price` varchar(45) NOT NULL,
  `action` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`id`, `food_name`, `type`, `catagory`, `image`, `price`, `action`) VALUES
(1, 'Burger', 'build', 'fast', 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg', '200', 'Build'),
(2, 'Pizza', 'build', 'fast', 'https://cdn.pixabay.com/photo/2015/12/07/22/27/pizza-1081534_960_720.jpg', '200', 'Build'),
(3, 'Chicken', 'store', 'meat', 'https://cdn.pixabay.com/photo/2015/03/11/00/31/chicken-667935_960_720.jpg', '300', 'Add To Cart'),
(4, 'Fish', 'store', 'meat', 'https://www.chefspencil.com/wp-content/uploads/Roasted-Fish-960x960.jpg', '320', 'Add To Cart'),
(5, 'Scrambled Egg', 'store', 'meat', 'https://www.chefspencil.com/wp-content/uploads/Enkulal-Ferfer-960x540.jpg', '70', 'Add To Cart'),
(6, 'Chechebsa', 'store', 'fast', 'https://www.chefspencil.com/wp-content/uploads/Chechebsa-960x588.jpeg', '110', 'Add To Cart'),
(7, 'Shiro', 'store', 'fast', 'https://www.chefspencil.com/wp-content/uploads/Shiro-960x960.jpg', '60', 'Add To Cart'),
(8, 'Lentil Stew', 'store', 'fast', 'https://www.chefspencil.com/wp-content/uploads/Meser-Wot-960x540.jpg', '60', 'Add To Cart'),
(9, 'Pardina Lentil', 'store', 'fast', 'https://www.chefspencil.com/wp-content/uploads/Azifa-1-960x640.jpg', '70', 'Add To Cart'),
(10, 'Beyayenet', 'build', 'fast', 'https://www.chefspencil.com/wp-content/uploads/Beyayenetu.jpg', '60', 'Build'),
(11, 'Fasting Ferfer', 'store', 'fast', 'https://www.chefspencil.com/wp-content/uploads/Fasting-Ferfer--960x1030.jpg', '50', 'Add To Cart'),
(12, 'Beetroot', 'build', 'fast', 'https://www.chefspencil.com/wp-content/uploads/keyser.jpg', '60', 'Build'),
(13, 'Tekel Gomen', 'store', 'fast', 'https://www.chefspencil.com/wp-content/uploads/Tekel-Gomen-960x729.jpg', '60', 'Add To Cart'),
(14, 'Split Peas', 'store', 'fast', 'https://www.chefspencil.com/wp-content/uploads/Alecha-Ater-960x960.jpg', '50', 'Add To Cart'),
(15, 'Fosoliya', 'store', 'fast', 'https://www.chefspencil.com/wp-content/uploads/Fosoliya-960x720.jpg', '70', 'Add To Cart'),
(16, 'Doro Wot', 'build', 'meat', 'https://www.chefspencil.com/wp-content/uploads/46254440824_e9e0f17aea_c.jpg', '300', 'Build'),
(17, 'Tibs', 'store', 'meat', 'https://www.chefspencil.com/wp-content/uploads/Tibs.jpg', '250', 'Add To Cart'),
(18, 'Kitfo', 'build', 'meat', 'https://www.chefspencil.com/wp-content/uploads/Kitfo-960x960.jpg', '260', 'Build'),
(19, 'Menchet Wot', 'store', 'meat', 'https://www.chefspencil.com/wp-content/uploads/Menchet-Wot-960x640.jpeg', '300', 'Add To Cart'),
(20, 'Keye  Wot', 'build', 'meat', 'https://www.chefspencil.com/wp-content/uploads/Sega-Wot-960x639.jpg', '300', 'Build'),
(21, 'Dulet', 'store', 'meat', 'https://www.chefspencil.com/wp-content/uploads/Dulet.jpg', '280', 'Add To Cart'),
(22, 'Non Fasting Ferfer', 'store', 'fast', 'https://www.chefspencil.com/wp-content/uploads/Ferfer.jpg', '50', 'Add To Cart'),
(23, 'Tripa', 'store', 'fast', 'https://www.chefspencil.com/wp-content/uploads/Tripa-960x540.jpg', '55', 'Add To Cart');

-- --------------------------------------------------------

--
-- Table structure for table `tests`
--

CREATE TABLE `tests` (
  `id` int NOT NULL,
  `food_name` varchar(45) NOT NULL,
  `type` varchar(30) NOT NULL,
  `catagory` varchar(45) NOT NULL,
  `image` varchar(200) NOT NULL,
  `price` varchar(45) NOT NULL,
  `action` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tests`
--
ALTER TABLE `tests`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tests`
--
ALTER TABLE `tests`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
