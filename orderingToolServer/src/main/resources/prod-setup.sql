SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


--
-- Datenbank: `db_ordering_tool`
--

--
-- Orders
--

CREATE TABLE `orders` (
  `order_id` bigint NOT NULL,
  `order_date` date DEFAULT NULL,
  `customer_id` integer DEFAULT NULL,
  `dry_weight_kg` integer,
  `orderstatus` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `orders` (`order_id`, `order_date`, `customer_id`, `dry_weight_kg`, `orderstatus`) VALUES
(1, '2022-01-17', 1, 5.1, 'Returned'),
(2, '2022-02-28', 2, 4.2, 'Returned'),
(3, '2022-03-07', 3, 4.0, 'Cleaned'),
(4, '2022-03-07', 1, 8.34, 'Received');


ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

ALTER TABLE `orders`
  MODIFY `order_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;


--
-- Customers
--

CREATE TABLE `customers` (
  `customer_id` bigint NOT NULL,
  `customer_name` varchar(255) DEFAULT NULL,
  `customer_firstname` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `customers` (`customer_id`, `customer_name`, `customer_firstname`) VALUES
(1, 'Schmutz', 'Herbert'),
(2, 'Sauber', 'Peter'),
(3, 'White', 'Thomas'),
(4, 'Proper', 'Mr');


ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`);

ALTER TABLE `customers`
  MODIFY `customer_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;


