-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2022 at 02:08 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `prueba_novitech`
--

-- --------------------------------------------------------

--
-- Table structure for table `cliente`
--

CREATE TABLE `cliente` (
  `nro_cliente` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Apellido` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cliente`
--

INSERT INTO `cliente` (`nro_cliente`, `Nombre`, `Apellido`, `email`) VALUES
(1234, 'Matias', 'Duran', 'matiduraan@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `cuenta`
--

CREATE TABLE `cuenta` (
  `nro_cuenta` int(11) NOT NULL,
  `nro_cliente` int(11) NOT NULL,
  `saldo` int(11) NOT NULL DEFAULT 0,
  `tipo_de_cuenta` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cuenta`
--

INSERT INTO `cuenta` (`nro_cuenta`, `nro_cliente`, `saldo`, `tipo_de_cuenta`) VALUES
(12, 1234, 1200, 'Cuenta corriente'),
(13, 1234, 15, 'Cuenta en dolares'),
(14, 1234, 15, 'Cuenta en dolares'),
(15, 1234, 15, 'Cuenta en dolares'),
(16, 1234, 15, 'Cuenta en dolares'),
(17, 1234, 15, 'Cuenta en dolares');

-- --------------------------------------------------------

--
-- Table structure for table `transferencia`
--

CREATE TABLE `transferencia` (
  `id_transferencia` int(11) NOT NULL,
  `nro_cliente` int(11) NOT NULL,
  `cuenta_origen` int(11) NOT NULL,
  `cuenta_destino` int(11) NOT NULL,
  `monto` int(11) NOT NULL DEFAULT 0,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transferencia`
--

INSERT INTO `transferencia` (`id_transferencia`, `nro_cliente`, `cuenta_origen`, `cuenta_destino`, `monto`, `fecha_creacion`) VALUES
(1, 1234, 12, 13, 1000, '2022-06-17 19:59:03'),
(2, 1234, 13, 15, 1000, '2022-06-17 19:59:05'),
(3, 1234, 13, 16, 1000, '2022-06-17 19:59:07'),
(4, 1234, 12, 13, 1000, '2022-06-17 19:59:10'),
(5, 1234, 12, 13, 1000, '2022-06-17 19:59:15'),
(6, 1234, 12, 13, 1000, '2022-06-17 20:02:18'),
(7, 1234, 12, 13, 1234, '2022-06-17 22:07:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`nro_cliente`);

--
-- Indexes for table `cuenta`
--
ALTER TABLE `cuenta`
  ADD PRIMARY KEY (`nro_cuenta`),
  ADD KEY `nro_cliente` (`nro_cliente`);

--
-- Indexes for table `transferencia`
--
ALTER TABLE `transferencia`
  ADD PRIMARY KEY (`id_transferencia`),
  ADD KEY `nro_cliente` (`nro_cliente`),
  ADD KEY `cuenta_origen` (`cuenta_origen`),
  ADD KEY `cuenta_destino` (`cuenta_destino`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cliente`
--
ALTER TABLE `cliente`
  MODIFY `nro_cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1235;

--
-- AUTO_INCREMENT for table `cuenta`
--
ALTER TABLE `cuenta`
  MODIFY `nro_cuenta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `transferencia`
--
ALTER TABLE `transferencia`
  MODIFY `id_transferencia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cuenta`
--
ALTER TABLE `cuenta`
  ADD CONSTRAINT `cuenta_ibfk_1` FOREIGN KEY (`nro_cliente`) REFERENCES `cliente` (`nro_cliente`);

--
-- Constraints for table `transferencia`
--
ALTER TABLE `transferencia`
  ADD CONSTRAINT `transferencia_ibfk_1` FOREIGN KEY (`nro_cliente`) REFERENCES `cliente` (`nro_cliente`),
  ADD CONSTRAINT `transferencia_ibfk_2` FOREIGN KEY (`cuenta_origen`) REFERENCES `cuenta` (`nro_cuenta`),
  ADD CONSTRAINT `transferencia_ibfk_3` FOREIGN KEY (`cuenta_destino`) REFERENCES `cuenta` (`nro_cuenta`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
