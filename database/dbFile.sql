-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 09, 2019 at 03:45 PM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `c619ws`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cartItems`
--

DROP TABLE IF EXISTS `cartItems`;
CREATE TABLE `cartItems` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `productID` mediumint(8) UNSIGNED NOT NULL,
  `count` smallint(5) UNSIGNED NOT NULL,
  `price` mediumint(8) UNSIGNED NOT NULL,
  `added` datetime NOT NULL,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cartID` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `price` int(20) UNSIGNED NOT NULL,
  `image` varchar(125) COLLATE utf8_unicode_ci NOT NULL,
  `shortDescription` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `longDescription` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `counter` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`, `shortDescription`, `longDescription`, `counter`) VALUES
(1, 'Cow-Milk', 2999, 'http://bit.ly/2oKpPdA', 'Per case of 30 16oz bottles. All dairy is 100% organic. No sedatives were used in the milking of any of our animals.  ', 'Got any organic milk? Well, we do. Enjoy our delicious milk while getting all the rich proteins, fats, and vitamins. Our cows are happy, healthy, and ready to quench your thirst.', 0),
(2, 'Goat-Milk', 4999, 'https://cdn.imgbin.com/10/23/0/imgbin-boer-goat-sheep-silhouette-show-pig-silhouette-YUhJuJPDMqxARrgQg94DZgeDc.jpg', 'Per case of 30 16oz bottles. All dairy is 100% organic. No sedatives were used in the milking of any of our animals.', 'Our goats are hands down the best goats ever. Nobody has better goats. Not only is goats milk easy on the stomach, but it is packed with all the essential nutrients you want. Pair that with its effects on lowering blood pressure, its low cholesterol contents, and the minerals it carries, there is no way you are not already buying a case to try. ', 0),
(3, 'Camel-Milk', 20000, 'https://i.pinimg.com/originals/ea/24/80/ea2480f4c85a925761d88d064371d4f1.png', 'Per case of 30 16oz bottles. All dairy is 100% organic. No sedatives were used in the milking of any of our animals.', 'Camels spit on other animals because they know that everyone else\'s milk is inferior. Can you blame them? Their milk is filled with potassium, proteins, and all the essential vitamins you crave. Did we mention it contains 50% less fat than cows milk? Camel milk has also been found to help with several diseases and disorders. Don\'t believe us? Look it up. Show your loved ones you care and grab a case for them. They will swallow that milk so fast and immediately beg for more.', 0),
(4, 'Lioness-Milk', 40000, 'https://www.vippng.com/png/detail/2-25580_lion-king-silhouette-lion-silhouette-png.png', 'Per case of 30 16oz bottles. All dairy is 100% organic. No sedatives were used in the milking of any of our animals.', 'Have you ever drank from the same milk that nourished the King of the Jungle. Imagine the look on your friends faces when they find out the chocolate milk they\'re sipping on was milk from a lioness. Now that is badass, buy it. ', 0),
(5, 'Gorilla-Milk', 90000, 'https://i.pinimg.com/originals/75/5a/68/755a683ff2f5e8108e69aab6234c2fc8.png', 'Per case of 30 16oz bottles. All dairy is 100% organic. No sedatives were used in the milking of any of our animals.', 'Do you know how hard it is to milk a gorilla? We do. But we do it for you. Gorilla milk has a extremely high amount of crude protein and healthy fats. Ditch the protein shakes and grab a case of Gorilla milk.', 0),
(6, ' Donkey-Milk', 10000, 'http://bit.ly/2nZPL4r', 'Per case of 30 16oz bottles. All dairy is 100% organic. No sedatives were used in the milking of any of our animals.', 'Don\'t get your milk from a dumb ass, get it from a smart and healthy ass. Our donkeys are in tip top shape and are eager to serve you their delicious milk. Donkey milk has been found to be very similar to a humans milk. It has less fat than cows milk but about four times the vitamin C, while also being easier to digest. This miracle milk has been found to be extremely hydrating and great for the skin (has been shown to treat eczema, acne, and psoriasis). Give it a go and see for yourself!', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cartItems`
--
ALTER TABLE `cartItems`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `cartItems`
--
ALTER TABLE `cartItems`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
