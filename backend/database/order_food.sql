-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 04, 2022 at 10:32 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `order_food`
--

-- --------------------------------------------------------

--
-- Table structure for table `app_info`
--

CREATE TABLE `app_info` (
  `slug` int(11) NOT NULL,
  `value` varchar(500) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `app_info`
--

INSERT INTO `app_info` (`slug`, `value`, `createdAt`, `updatedAt`, `deleted_fg`) VALUES
(1, 'value1', '2021-12-12 13:45:25', '2021-12-12 13:55:18', 0),
(2, 'value2', '2021-12-12 13:45:35', '2021-12-12 13:45:35', 0);

-- --------------------------------------------------------

--
-- Table structure for table `chitiethoadon`
--

CREATE TABLE `chitiethoadon` (
  `id` int(11) NOT NULL,
  `id_hd` int(11) NOT NULL,
  `don_gia` int(11) NOT NULL,
  `soluong` int(11) NOT NULL,
  `tong_gia` int(11) NOT NULL,
  `id_sp` int(11) NOT NULL,
  `ghi_chu` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chitiethoadon`
--

INSERT INTO `chitiethoadon` (`id`, `id_hd`, `don_gia`, `soluong`, `tong_gia`, `id_sp`, `ghi_chu`, `createdAt`, `updatedAt`, `deleted_fg`) VALUES
(88, 160, 169000, 2, 338000, 147, 'Không bỏ bông cải xanh', '2022-01-03 23:37:45', '2022-01-03 23:37:45', 0),
(89, 160, 129000, 1, 129000, 148, 'Cay', '2022-01-03 23:37:45', '2022-01-03 23:37:45', 0),
(90, 161, 70000, 3, 210000, 149, NULL, '2022-01-03 23:41:39', '2022-01-03 23:41:39', 0),
(91, 162, 169000, 1, 169000, 147, 'không bỏ bcx', '2022-01-04 00:06:34', '2022-01-04 00:06:34', 0),
(92, 163, 169000, 1, 169000, 147, 'không bỏ bcx', '2022-01-04 01:23:07', '2022-01-04 01:23:07', 0),
(93, 163, 49000, 5, 245000, 151, 'cho xin đá ', '2022-01-04 01:23:07', '2022-01-04 01:23:07', 0),
(94, 164, 49000, 5, 245000, 151, 'cho xin đá ', '2022-01-04 01:23:50', '2022-01-04 01:23:50', 0);

-- --------------------------------------------------------

--
-- Table structure for table `danhgia`
--

CREATE TABLE `danhgia` (
  `id` int(11) NOT NULL,
  `id_hd` int(11) NOT NULL,
  `diem_danhgia` int(11) NOT NULL,
  `binhluan` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `danhmuc`
--

CREATE TABLE `danhmuc` (
  `id` int(11) NOT NULL,
  `tendm` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `danhmuc`
--

INSERT INTO `danhmuc` (`id`, `tendm`, `createdAt`, `updatedAt`, `deleted_fg`) VALUES
(16, 'Pizza', '2021-12-07 16:55:06', '2021-12-07 16:55:06', 0),
(17, 'Mỳ ý', '2021-12-07 16:55:06', '2021-12-07 16:55:06', 0),
(18, 'Salad', '2021-12-07 23:22:19', '2021-12-07 23:36:16', 0),
(19, 'Khai vị', '2021-12-07 23:30:34', '2021-12-07 23:30:34', 0),
(20, 'Thức uống', '2021-12-08 03:34:10', '2021-12-08 03:34:10', 0);

-- --------------------------------------------------------

--
-- Table structure for table `danhsach_diachi`
--

CREATE TABLE `danhsach_diachi` (
  `id` int(11) NOT NULL,
  `id_nd` int(11) NOT NULL,
  `diachi` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `danhsach_diachi`
--

INSERT INTO `danhsach_diachi` (`id`, `id_nd`, `diachi`, `createdAt`, `updatedAt`, `deleted_fg`) VALUES
(7, 14, '237/32 Đặng Tất, Phường Vĩnh Hải, Nha Trang', '2021-12-12 13:06:09', '2021-12-12 13:06:09', 0),
(8, 19, '4A Mạc Đĩnh Chi, Phường Phước Tiến, Nha Trang', '2021-12-14 13:17:02', '2021-12-14 13:17:02', 0),
(9, 31, '121 Nguyễn Trãi, Phước Tân, Nha Trang, Khánh Hòa', '2021-12-31 05:59:48', '2021-12-31 05:59:48', 0),
(10, 32, '224 đường 2/4, Phường Vĩnh Hải, Nha Trang , Khánh Hòa', '2021-12-31 06:00:24', '2021-12-31 06:00:24', 0),
(11, 41, '4C KTT Bình Khê, Phường Phước Tân, Nha Trang, Khánh Hòa', '2021-12-31 07:31:40', '2021-12-31 07:31:40', 0);

-- --------------------------------------------------------

--
-- Table structure for table `giohang`
--

CREATE TABLE `giohang` (
  `id` int(11) NOT NULL,
  `id_nd` int(11) NOT NULL,
  `id_sp` int(11) NOT NULL,
  `don_gia` int(11) NOT NULL,
  `soluong` int(11) NOT NULL,
  `tong_gia` int(11) NOT NULL,
  `ghi_chu` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `hinhthucthanhtoan`
--

CREATE TABLE `hinhthucthanhtoan` (
  `id` int(11) NOT NULL,
  `ten_hinhthuc` varchar(255) NOT NULL,
  `public_id` text CHARACTER SET utf8 NOT NULL,
  `url` text CHARACTER SET utf8 NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hinhthucthanhtoan`
--

INSERT INTO `hinhthucthanhtoan` (`id`, `ten_hinhthuc`, `public_id`, `url`, `createdAt`, `updatedAt`, `deleted_fg`) VALUES
(1, 'Viettel Payment', 'payments/l9psqjbwjt0smztdcult', 'https://res.cloudinary.com/order-food/image/upload/v1639294538/payments/l9psqjbwjt0smztdcult.jpg', '2021-12-12 08:38:52', '2021-12-12 08:38:52', 0),
(2, 'Thẻ ATM', 'payments/c75baoppiibf52dko5bs', 'https://res.cloudinary.com/order-food/image/upload/v1639303148/payments/c75baoppiibf52dko5bs.jpg', '2021-12-12 17:00:08', '2021-12-12 17:00:08', 0),
(4, 'COD', 'payments/c75baoppiibf52dko5bs', 'https://res.cloudinary.com/order-food/image/upload/v1639303148/payments/c75baoppiibf52dko5bs.jpg', '2021-12-14 13:26:07', '2021-12-14 13:26:07', 0);

-- --------------------------------------------------------

--
-- Table structure for table `hoadon`
--

CREATE TABLE `hoadon` (
  `id` int(11) NOT NULL,
  `id_nd` int(11) NOT NULL,
  `id_thanhtoan` int(11) NOT NULL,
  `id_diachi` int(11) NOT NULL,
  `ngaydathang` datetime NOT NULL,
  `tong_sl` int(11) NOT NULL,
  `tongtien_gh` int(11) NOT NULL,
  `id_voucher` varchar(10) NOT NULL DEFAULT 'Coupon0',
  `tong_hd` int(11) NOT NULL,
  `tinhtrangHD` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hoadon`
--

INSERT INTO `hoadon` (`id`, `id_nd`, `id_thanhtoan`, `id_diachi`, `ngaydathang`, `tong_sl`, `tongtien_gh`, `id_voucher`, `tong_hd`, `tinhtrangHD`, `createdAt`, `updatedAt`, `deleted_fg`) VALUES
(156, 19, 1, 8, '2022-01-03 17:23:33', 1, 500000, 'Coupon0', 500000, 'Đã thanh toán', '2022-01-03 17:23:33', '2022-01-03 17:23:33', 0),
(157, 31, 2, 9, '2022-01-03 17:24:11', 1, 1200000, 'Coupon0', 1200000, 'Đã thanh toán', '2022-01-03 17:24:11', '2022-01-03 17:24:11', 0),
(158, 14, 2, 7, '2022-01-03 17:24:33', 1, 1250000, 'Coupon0', 1250000, 'Đã thanh toán', '2022-01-03 17:24:33', '2022-01-03 17:24:33', 0),
(159, 32, 1, 10, '2022-01-03 17:25:13', 1, 3200000, 'Coupon0', 3200000, 'Đã thanh toán', '2022-01-03 17:25:13', '2022-01-03 17:25:13', 0),
(160, 19, 1, 8, '2022-01-03 23:37:45', 3, 467000, 'Coupon5', 443650, 'Đã thanh toán', '2022-01-03 23:37:45', '2022-01-03 23:37:45', 0),
(161, 31, 1, 9, '2022-01-03 23:41:39', 3, 210000, 'Coupon0', 210000, 'Đã thanh toán', '2022-01-03 23:41:39', '2022-01-03 23:41:39', 0),
(162, 19, 1, 9, '2022-01-04 00:06:34', 1, 169000, 'Coupon0', 169000, 'Đã thanh toán', '2022-01-04 00:06:34', '2022-01-04 00:06:34', 0),
(163, 41, 1, 9, '2022-01-04 01:23:07', 6, 414000, 'Coupon0', 414000, 'Đã thanh toán', '2022-01-04 01:23:07', '2022-01-04 01:23:07', 0),
(164, 41, 1, 9, '2022-01-04 01:23:50', 5, 245000, 'Coupon10', 220500, 'Đã thanh toán', '2022-01-04 01:23:50', '2022-01-04 01:23:50', 0);

-- --------------------------------------------------------

--
-- Table structure for table `nguoidung`
--

CREATE TABLE `nguoidung` (
  `id` int(11) NOT NULL,
  `hoten` varchar(255) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `refresh_token` text NOT NULL,
  `ngaysinh` date NOT NULL,
  `gioitinh` tinyint(1) NOT NULL,
  `email` varchar(255) NOT NULL,
  `dienthoai` varchar(12) NOT NULL,
  `public_id` text NOT NULL,
  `url` text NOT NULL,
  `admin` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nguoidung`
--

INSERT INTO `nguoidung` (`id`, `hoten`, `username`, `password`, `refresh_token`, `ngaysinh`, `gioitinh`, `email`, `dienthoai`, `public_id`, `url`, `admin`, `createdAt`, `updatedAt`, `deleted_fg`) VALUES
(14, 'Nguyễn Hoàng Việt', 'meo', '$2b$10$aeFsPyBdMrbH80YVjEYx6.eIgzXoDBX6DFgJn/.h4.pBV7KHrRsWS', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImFkbWluIjowLCJpYXQiOjE2NDEyMjc3MjYsImV4cCI6MTY0MTMxNDEyNn0.sgDzd0oZI4T7p-WlJOFO0lT5FPQF8GPSjg71vhQu6NY', '2000-12-20', 1, 'viet@gmail.com', '0123456789', '', '', 0, '2021-12-07 15:22:20', '2021-12-22 18:42:43', 0),
(16, 'Nguyễn Duy Thịnh', 'thinh', '$2b$10$ZsuuwnNsNyDG/JZBf8pBoO4l2wnyfcC917yeTapi5/ZeWQvV70ZeS', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImFkbWluIjoxLCJpYXQiOjE2NDAwMTQ0MzcsImV4cCI6MTY0MDEwMDgzN30.idLh-Quq4RoLdK9m3zhW80bBGzl-EYoRUfgqaqbSakI', '2000-10-16', 1, 'thinh@gmail.com', '0123456789', 'users/l0yxyhphzfyw4utjlvj3', 'https://res.cloudinary.com/order-food/image/upload/v1640010340/users/l0yxyhphzfyw4utjlvj3.jpg', 1, '2021-12-07 15:33:10', '2021-12-20 21:27:58', 0),
(17, 'Nguyễn Tiến Tài', 'tai', '$2b$10$eyhUi.EXtmviKKb6rQ8ADOVUESPjkG9YKCVElaQ3meZo8nrK3uSee', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsImFkbWluIjoxLCJpYXQiOjE2Mzg5NTQ5NDgsImV4cCI6MTYzOTA0MTM0OH0.6ML730j9UX1451vEu8JsGKjvkVNDh6pFTZ1TBV76HlM', '2000-10-20', 1, 'tai@gmail.com', '0123456789', '', '', 1, '2021-12-07 15:37:27', '2021-12-08 17:09:29', 0),
(18, 'Thái Văn Nam', 'nam', '$2b$10$yGb6JgSGxAS5zDxRrdp/tujSEHmuu0d0zYEkiNVsP30dZae1HIzi.', '', '2000-12-09', 1, 'nam@gmail.com', '0123456789', 'users/b72gqzaq9i3j6ty0jp0z', 'https://res.cloudinary.com/order-food/image/upload/v1640062572/users/b72gqzaq9i3j6ty0jp0z.jpg', 1, '2021-12-08 17:10:14', '2021-12-21 11:58:46', 0),
(19, 'Lê Nguyễn Hoàng Anh', 'hoanganh', '$2b$10$xCL5Jy6xRcYDxJoyLkOcJODxedHgsPm01kW8GlF/mUuhTQkByE4sO', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImFkbWluIjowLCJpYXQiOjE2NDEyMjk1MjQsImV4cCI6MTY0MTMxNTkyNH0._1PkOANGf8-EhymW1fZFnU08W_Axm_jM7mWy1AuW6LI', '2000-01-01', 0, 'hoanganh@gmail.com', '0123456789', 'users/xrucgmehttfidkewd9d4', 'https://res.cloudinary.com/order-food/image/upload/v1640015062/users/xrucgmehttfidkewd9d4.jpg', 0, '2021-12-10 15:43:01', '2021-12-20 22:44:52', 0),
(31, 'Nguyễn Bảo Ngọc', 'katie.nguyen', '$2b$10$I0kKW1Nd8yNJQBJLweEg3OF27x01cPlst1RSJGHKogDB9g.xn1NYy', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzEsImFkbWluIjowLCJpYXQiOjE2NDEyMjc5NTcsImV4cCI6MTY0MTMxNDM1N30.zXw3cChXTz6M4Flx_jdK4v1MgWeGQM3SHJjOCKbscUg', '2000-01-01', 0, 'katie@gmail.com', '0123456789', 'users/jauvqlgagdo2ipemcvjg', 'https://res.cloudinary.com/order-food/image/upload/v1640015156/users/jauvqlgagdo2ipemcvjg.jpg', 0, '2021-12-20 22:46:41', '2021-12-20 22:46:41', 0),
(32, 'Phạm Thị Tuyết Hạnh', 'hanh', '$2b$10$sxF1trJNZ3M1CGelKO0Uq.DmTsTAxBQsTLWNWZlAlbJeOQjHx5VnC', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzIsImFkbWluIjowLCJpYXQiOjE2NDAwNzg3NTAsImV4cCI6MTY0MDE2NTE1MH0.H7Yjbg46vhH3Cb-6s6GyxHfLz1xgaPQQanMey-iSfH8', '2000-12-31', 0, 'hanh@gmail.com', '0123456789', 'users/nsw7nwqnshh9rizlysf4', 'https://res.cloudinary.com/order-food/image/upload/v1640062835/users/nsw7nwqnshh9rizlysf4.jpg', 0, '2021-12-20 22:48:38', '2021-12-21 12:03:31', 0),
(40, 'Thinh3', 'thinh3', '$2b$10$ktAwum/W8E4YeflVKhQ2o.SaRUAgKvb2DYwYrq0X/E8tCsUBj7rNW', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDAsImFkbWluIjoxLCJpYXQiOjE2NDEyODg1ODQsImV4cCI6MTY0MTM3NDk4NH0.vtX7whlLh1Ela1pwXhqmGCXxyI6dfnSd5dDW8jbMr4I', '2000-06-06', 0, 'slthinhtu3@gmail.com', '0123456789', '', '', 1, '2021-12-24 19:42:59', '2021-12-24 19:42:59', 0),
(41, 'Thinh2', 'thinh2', '$2b$10$WkN2QbHUEcfUw0gW6hnMHenQwFGzY79EzIEAxVe8s5ZCqynoOHZa2', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDEsImFkbWluIjowLCJpYXQiOjE2NDEyMzQwODAsImV4cCI6MTY0MTMyMDQ4MH0.29otLrB_9gyOXqf4j9dbfMPd8eMFz4RbZKKoWxRLNvY', '2000-12-30', 1, 'thinh.nd.60cntt@ntu.edu.vn', '0123456789', '', '', 0, '2021-12-24 19:46:49', '2021-12-24 19:46:49', 0),
(42, 'Bé Dũng', 'dung', '$2b$10$vVLJnyrS6y7XkTvEUKMr4eclXFapCBHNFFAMx8CUlt8fdrDy0XEYy', '', '2000-06-06', 0, 'quocdung@gmail.com', '0123456789', '', '', 0, '2021-12-31 19:15:27', '2021-12-31 19:15:27', 0),
(43, 'Thinh2', 'thinh2', '$2b$10$4RhlLiHvIxk78drRXEc1M.KtuxsfvxdwsXeuhbrl35mDwhPGqyBRK', '', '2000-12-30', 1, 'thinh3@gmail.com', '0123456789', '', '', 0, '2022-01-02 19:47:07', '2022-01-02 19:47:07', 0);

-- --------------------------------------------------------

--
-- Table structure for table `phieu_giamgia`
--

CREATE TABLE `phieu_giamgia` (
  `id` varchar(10) NOT NULL,
  `ten_phieu` varchar(255) NOT NULL,
  `giatri` int(11) NOT NULL,
  `mota` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `phieu_giamgia`
--

INSERT INTO `phieu_giamgia` (`id`, `ten_phieu`, `giatri`, `mota`) VALUES
('Coupon0', 'Mã giảm giá 0%', 0, 'Phiếu giảm giá 0% cho hóa đơn '),
('Coupon10', 'Mã giảm giá 10%', 10, 'Phiếu giảm giá 10% cho hóa đơn\n'),
('Coupon5', 'Mã giảm giá 5%', 5, 'Phiếu giảm giá 5% cho hóa đơn');

-- --------------------------------------------------------

--
-- Table structure for table `sanpham`
--

CREATE TABLE `sanpham` (
  `id` int(11) NOT NULL,
  `tensp` varchar(50) NOT NULL,
  `public_id` text NOT NULL,
  `url` text NOT NULL,
  `size` varchar(1) NOT NULL,
  `chitiet` text NOT NULL,
  `gia` int(11) NOT NULL,
  `id_dm` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sanpham`
--

INSERT INTO `sanpham` (`id`, `tensp`, `public_id`, `url`, `size`, `chitiet`, `gia`, `id_dm`, `createdAt`, `updatedAt`, `deleted_fg`) VALUES
(147, 'Pizza Hải Sản Pesto Xanh', 'products/fxvds8nhm0o6on3ezvco', 'https://res.cloudinary.com/order-food/image/upload/v1638931543/products/fxvds8nhm0o6on3ezvco.png', 'M', 'Tôm, cua, mực và bông cải xanh tươi ngon trên nền sốt Pesto Xanh', 169000, 16, '2021-12-07 16:55:47', '2021-12-08 09:46:27', 0),
(148, 'Mì Ý thịt bò bằm', 'products/rvxgnrwqcbboc72lzr9n', 'https://res.cloudinary.com/order-food/image/upload/v1638930969/products/rvxgnrwqcbboc72lzr9n.png', 'S', 'Sốt thịt bò bằm đặc trưng kết hợp cùng mỳ Ý', 129000, 17, '2021-12-07 16:55:47', '2021-12-08 09:38:10', 0),
(149, 'Salad Trộn Sốt Caesar', 'products/awae3ae7trhyhasj2tdb', 'https://res.cloudinary.com/order-food/image/upload/v1638931601/products/awae3ae7trhyhasj2tdb.png', 'M', 'Rau tươi trộn với sốt Caesar', 70000, 18, '2021-12-08 00:04:12', '2021-12-08 09:47:19', 0),
(150, 'Gà Zòn Zòn (10 miếng)', 'products/epdweajxyfx7zuw6bcxk', 'https://res.cloudinary.com/order-food/image/upload/v1638931907/products/epdweajxyfx7zuw6bcxk.png', 'L', 'Cánh gà được phủ bởi một lớp bột chiên giòn', 189000, 19, '2021-12-08 09:53:02', '2021-12-08 09:53:02', 0),
(151, 'Bia Tiger', 'products/asxqwkvfznxivys7rjsb', 'https://res.cloudinary.com/order-food/image/upload/v1639197221/products/asxqwkvfznxivys7rjsb.png', 'S', 'Uống vào là say', 49000, 20, '2021-12-11 11:35:30', '2021-12-11 11:35:30', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `app_info`
--
ALTER TABLE `app_info`
  ADD PRIMARY KEY (`slug`);

--
-- Indexes for table `chitiethoadon`
--
ALTER TABLE `chitiethoadon`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mahd` (`id_hd`),
  ADD KEY `idsp` (`id_sp`) USING BTREE;

--
-- Indexes for table `danhgia`
--
ALTER TABLE `danhgia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_rating_id_hd` (`id_hd`);

--
-- Indexes for table `danhmuc`
--
ALTER TABLE `danhmuc`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `danhsach_diachi`
--
ALTER TABLE `danhsach_diachi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `dsdc_fk_id_nd` (`id_nd`);

--
-- Indexes for table `giohang`
--
ALTER TABLE `giohang`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_nd` (`id_nd`),
  ADD KEY `fk_id_sp` (`id_sp`);

--
-- Indexes for table `hinhthucthanhtoan`
--
ALTER TABLE `hinhthucthanhtoan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hoadon`
--
ALTER TABLE `hoadon`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_bill_id_nd` (`id_nd`),
  ADD KEY `fk_bill_id_thanhtoan` (`id_thanhtoan`),
  ADD KEY `fk_bill_id_diachi` (`id_diachi`);

--
-- Indexes for table `nguoidung`
--
ALTER TABLE `nguoidung`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `phieu_giamgia`
--
ALTER TABLE `phieu_giamgia`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`id`),
  ADD KEY `madm` (`id_dm`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `app_info`
--
ALTER TABLE `app_info`
  MODIFY `slug` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `chitiethoadon`
--
ALTER TABLE `chitiethoadon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;

--
-- AUTO_INCREMENT for table `danhgia`
--
ALTER TABLE `danhgia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `danhmuc`
--
ALTER TABLE `danhmuc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `danhsach_diachi`
--
ALTER TABLE `danhsach_diachi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `giohang`
--
ALTER TABLE `giohang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `hinhthucthanhtoan`
--
ALTER TABLE `hinhthucthanhtoan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `hoadon`
--
ALTER TABLE `hoadon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=165;

--
-- AUTO_INCREMENT for table `nguoidung`
--
ALTER TABLE `nguoidung`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=153;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chitiethoadon`
--
ALTER TABLE `chitiethoadon`
  ADD CONSTRAINT `chitiethoadon_ibfk_1` FOREIGN KEY (`id_hd`) REFERENCES `hoadon` (`id`),
  ADD CONSTRAINT `chitiethoadon_ibfk_2` FOREIGN KEY (`id_sp`) REFERENCES `sanpham` (`id`);

--
-- Constraints for table `danhgia`
--
ALTER TABLE `danhgia`
  ADD CONSTRAINT `fk_rating_id_hd` FOREIGN KEY (`id_hd`) REFERENCES `hoadon` (`id`);

--
-- Constraints for table `danhsach_diachi`
--
ALTER TABLE `danhsach_diachi`
  ADD CONSTRAINT `dsdc_fk_id_nd` FOREIGN KEY (`id_nd`) REFERENCES `nguoidung` (`id`);

--
-- Constraints for table `giohang`
--
ALTER TABLE `giohang`
  ADD CONSTRAINT `fk_id_nd` FOREIGN KEY (`id_nd`) REFERENCES `nguoidung` (`id`),
  ADD CONSTRAINT `fk_id_sp` FOREIGN KEY (`id_sp`) REFERENCES `sanpham` (`id`);

--
-- Constraints for table `hoadon`
--
ALTER TABLE `hoadon`
  ADD CONSTRAINT `fk_bill_id_diachi` FOREIGN KEY (`id_diachi`) REFERENCES `danhsach_diachi` (`id`),
  ADD CONSTRAINT `fk_bill_id_nd` FOREIGN KEY (`id_nd`) REFERENCES `nguoidung` (`id`),
  ADD CONSTRAINT `fk_bill_id_thanhtoan` FOREIGN KEY (`id_thanhtoan`) REFERENCES `hinhthucthanhtoan` (`id`);

--
-- Constraints for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD CONSTRAINT `sanpham_ibfk_1` FOREIGN KEY (`id_dm`) REFERENCES `danhmuc` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
