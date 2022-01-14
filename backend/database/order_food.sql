-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 13, 2022 at 11:46 AM
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
(94, 164, 49000, 5, 245000, 151, 'cho xin đá ', '2022-01-04 01:23:50', '2022-01-04 01:23:50', 0),
(96, 167, 319000, 1, 319000, 34, '', '2022-01-08 10:52:45', '2022-01-08 10:52:45', 0);

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
(11, 41, '4C KTT Bình Khê, Phường Phước Tân, Nha Trang, Khánh Hòa', '2021-12-31 07:31:40', '2021-12-31 07:31:40', 0),
(12, 47, 'thôn suối luồng,  xã vạn thắng,  huyện vạn ninh,  tỉnh khánh hòa', '2022-01-08 10:49:20', '2022-01-08 10:49:20', 0);

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

--
-- Dumping data for table `giohang`
--

INSERT INTO `giohang` (`id`, `id_nd`, `id_sp`, `don_gia`, `soluong`, `tong_gia`, `ghi_chu`, `createdAt`, `updatedAt`) VALUES
(84, 47, 4, 209000, 1, 209000, '', '2022-01-08 10:52:55', '2022-01-08 10:52:55');

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
(164, 41, 1, 9, '2022-01-04 01:23:50', 5, 245000, 'Coupon10', 220500, 'Đã nhận hàng', '2022-01-04 01:23:50', '2022-01-04 01:23:50', 0),
(167, 47, 4, 12, '2022-01-08 10:52:44', 1, 319000, 'Coupon0', 319000, 'Chưa thanh toán', '2022-01-08 10:52:44', '2022-01-08 10:52:44', 0);

-- --------------------------------------------------------

--
-- Table structure for table `nguoidung`
--

CREATE TABLE `nguoidung` (
  `id` int(11) NOT NULL,
  `hoten` varchar(255) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `refresh_token` text DEFAULT NULL,
  `ngaysinh` date NOT NULL,
  `gioitinh` tinyint(1) NOT NULL,
  `email` varchar(255) NOT NULL,
  `dienthoai` varchar(12) NOT NULL,
  `public_id` text DEFAULT 'users/pngtree-businessman-user-avatar-free-vector-png-image_4827807_prr02b',
  `url` text DEFAULT 'https://res.cloudinary.com/order-food/image/upload/v1642066718/users/pngtree-businessman-user-avatar-free-vector-png-image_4827807_prr02b.jpg	',
  `google_id` varchar(50) DEFAULT NULL,
  `kieu_dangnhap` varchar(50) NOT NULL DEFAULT 'Bình thường',
  `admin` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nguoidung`
--

INSERT INTO `nguoidung` (`id`, `hoten`, `username`, `password`, `refresh_token`, `ngaysinh`, `gioitinh`, `email`, `dienthoai`, `public_id`, `url`, `google_id`, `kieu_dangnhap`, `admin`, `createdAt`, `updatedAt`, `deleted_fg`) VALUES
(14, 'Nguyễn Hoàng Việt', 'meo', '$2b$10$aeFsPyBdMrbH80YVjEYx6.eIgzXoDBX6DFgJn/.h4.pBV7KHrRsWS', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImFkbWluIjowLCJpYXQiOjE2NDIwNjIwNTAsImV4cCI6MTY0MjE0ODQ1MH0.DeZrspCek9CINpIuMsYHWPQg84k06AoMJUFBcqrDfaM', '2000-12-20', 1, 'viet@gmail.com', '0123456789', '', '', NULL, 'Bình thường', 0, '2021-12-07 15:22:20', '2021-12-22 18:42:43', 0),
(16, 'Nguyễn Duy Thịnh', 'thinh', '$2b$10$ZsuuwnNsNyDG/JZBf8pBoO4l2wnyfcC917yeTapi5/ZeWQvV70ZeS', NULL, '2000-10-16', 1, 'thinh@gmail.com', '0123456789', 'users/l0yxyhphzfyw4utjlvj3', 'https://res.cloudinary.com/order-food/image/upload/v1640010340/users/l0yxyhphzfyw4utjlvj3.jpg', NULL, 'Bình thường', 1, '2021-12-07 15:33:10', '2021-12-20 21:27:58', 0),
(17, 'Nguyễn Tiến Tài', 'tai', '$2b$10$eyhUi.EXtmviKKb6rQ8ADOVUESPjkG9YKCVElaQ3meZo8nrK3uSee', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsImFkbWluIjoxLCJpYXQiOjE2Mzg5NTQ5NDgsImV4cCI6MTYzOTA0MTM0OH0.6ML730j9UX1451vEu8JsGKjvkVNDh6pFTZ1TBV76HlM', '2000-10-20', 1, 'tai@gmail.com', '0123456789', '', '', NULL, 'Bình thường', 1, '2021-12-07 15:37:27', '2021-12-08 17:09:29', 0),
(18, 'Thái Văn Nam', 'nam', '$2b$10$yGb6JgSGxAS5zDxRrdp/tujSEHmuu0d0zYEkiNVsP30dZae1HIzi.', '', '2000-12-09', 1, 'nam@gmail.com', '0123456789', 'users/b72gqzaq9i3j6ty0jp0z', 'https://res.cloudinary.com/order-food/image/upload/v1640062572/users/b72gqzaq9i3j6ty0jp0z.jpg', NULL, 'Bình thường', 1, '2021-12-08 17:10:14', '2021-12-21 11:58:46', 0),
(19, 'Lê Nguyễn Hoàng Anh', 'hoanganh', '$2b$10$xCL5Jy6xRcYDxJoyLkOcJODxedHgsPm01kW8GlF/mUuhTQkByE4sO', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImFkbWluIjowLCJpYXQiOjE2NDEyMjk1MjQsImV4cCI6MTY0MTMxNTkyNH0._1PkOANGf8-EhymW1fZFnU08W_Axm_jM7mWy1AuW6LI', '2000-01-01', 0, 'hoanganh@gmail.com', '0123456789', 'users/xrucgmehttfidkewd9d4', 'https://res.cloudinary.com/order-food/image/upload/v1640015062/users/xrucgmehttfidkewd9d4.jpg', NULL, 'Bình thường', 0, '2021-12-10 15:43:01', '2021-12-20 22:44:52', 0),
(31, 'Nguyễn Bảo Ngọc', 'katie.nguyen', '$2b$10$I0kKW1Nd8yNJQBJLweEg3OF27x01cPlst1RSJGHKogDB9g.xn1NYy', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzEsImFkbWluIjowLCJpYXQiOjE2NDEyMjc5NTcsImV4cCI6MTY0MTMxNDM1N30.zXw3cChXTz6M4Flx_jdK4v1MgWeGQM3SHJjOCKbscUg', '2000-01-01', 0, 'katie@gmail.com', '0123456789', 'users/jauvqlgagdo2ipemcvjg', 'https://res.cloudinary.com/order-food/image/upload/v1640015156/users/jauvqlgagdo2ipemcvjg.jpg', NULL, 'Bình thường', 0, '2021-12-20 22:46:41', '2021-12-20 22:46:41', 0),
(32, 'Phạm Thị Tuyết Hạnh', 'hanh', '$2b$10$sxF1trJNZ3M1CGelKO0Uq.DmTsTAxBQsTLWNWZlAlbJeOQjHx5VnC', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzIsImFkbWluIjowLCJpYXQiOjE2NDAwNzg3NTAsImV4cCI6MTY0MDE2NTE1MH0.H7Yjbg46vhH3Cb-6s6GyxHfLz1xgaPQQanMey-iSfH8', '2000-12-31', 0, 'hanh@gmail.com', '0123456789', 'users/nsw7nwqnshh9rizlysf4', 'https://res.cloudinary.com/order-food/image/upload/v1640062835/users/nsw7nwqnshh9rizlysf4.jpg', NULL, 'Bình thường', 0, '2021-12-20 22:48:38', '2021-12-21 12:03:31', 0),
(40, 'Thinh3', 'thinh3', '$2b$10$ktAwum/W8E4YeflVKhQ2o.SaRUAgKvb2DYwYrq0X/E8tCsUBj7rNW', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDAsImFkbWluIjoxLCJpYXQiOjE2NDEyODg1ODQsImV4cCI6MTY0MTM3NDk4NH0.vtX7whlLh1Ela1pwXhqmGCXxyI6dfnSd5dDW8jbMr4I', '2000-06-06', 0, 'slthinhtu3@gmail.com', '0123456789', '', '', NULL, 'Bình thường', 1, '2021-12-24 19:42:59', '2021-12-24 19:42:59', 0),
(41, 'Thinh2', 'thinh2', '$2b$10$WkN2QbHUEcfUw0gW6hnMHenQwFGzY79EzIEAxVe8s5ZCqynoOHZa2', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDEsImFkbWluIjowLCJpYXQiOjE2NDEyMzQwODAsImV4cCI6MTY0MTMyMDQ4MH0.29otLrB_9gyOXqf4j9dbfMPd8eMFz4RbZKKoWxRLNvY', '2000-12-30', 1, 'thinh.nd.60cntt@ntu.edu.vn', '0123456789', '', '', NULL, 'Bình thường', 0, '2021-12-24 19:46:49', '2021-12-24 19:46:49', 0),
(47, 'thái văn nam', 'thainam', '$2b$10$q08vJQYEA0dDtW97P25xp..BYKuNMQIEiTPifZhSqWUxCxzrWXkOq', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImFkbWluIjowLCJpYXQiOjE2NDE2MTQ0NjMsImV4cCI6MTY0MTcwMDg2M30.FJxAWwlBTi2kWpg3UUOjzaLGKt5panT-lq6zBDK31Sg', '2000-09-12', 1, 'thaivannamc4@gmail.com', '0911495728', '', '', NULL, 'Bình thường', 0, '2022-01-08 07:51:09', '2022-01-08 07:51:09', 0),
(50, 'Bé Dũng', 'dung', '$2b$10$ZLUzAmsgbmAdLCHkoVOGEOfrIrfxh5i5.aLR4R3L0NWu863wVDJOy', NULL, '2000-06-06', 0, 'quocdung@gmail.com', '0123456789', '', '', NULL, 'Bình thường', 1, '2022-01-13 15:21:17', '2022-01-13 15:21:17', 0);

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
(2, 'Pizza Hải Sản Pesto Xanh', '', 'https://res.cloudinary.com/fee/image/upload/v1639138663/pizza/Pizza_H%E1%BA%A3i_S%E1%BA%A3n_Pesto_Xanh-removebg-preview_evggue.png', 'M', 'Tôm, cua, mực và bông cải xanh tươi ngon trên nền sốt Pesto Xanh', 249000, 16, '2021-12-11 02:50:21', '2021-12-11 02:50:21', 0),
(3, 'Pizza Hải Sản Cocktail', '', 'https://res.cloudinary.com/fee/image/upload/v1639138663/pizza/Pizza_H%E1%BA%A3i_S%E1%BA%A3n_Cocktail-removebg-preview_ec5hfw.png', 'M', 'Tôm, cua, giăm bông,... với sốt Thousand Island', 209000, 16, '2021-12-11 02:50:21', '2021-12-11 02:50:21', 0),
(4, 'Pizza Hải Sản Cao Cấp', '', 'https://res.cloudinary.com/fee/image/upload/v1639138664/pizza/Pizza_H%E1%BA%A3i_S%E1%BA%A3n_Cao_C%E1%BA%A5p-removebg-preview_tthizl.png', 'M', 'Tôm, cua, mực và nghêu với sốt Marinara', 209000, 16, '2021-12-11 03:05:27', '2021-12-11 03:05:27', 0),
(5, 'Pizza Hải Sản Nhiệt Đới', '', 'https://res.cloudinary.com/fee/image/upload/v1639138663/pizza/Pizza_H%E1%BA%A3i_S%E1%BA%A3n_Nhi%E1%BB%87t_%C4%90%E1%BB%9Bi-removebg-preview_t9kvb5.png', 'M', 'Tôm, nghêu, mực cua, dứa với sốt Thousand Island', 209000, 16, '2021-12-11 03:05:27', '2021-12-11 03:05:27', 0),
(6, 'Pizza Tôm Cocktail', '', 'https://res.cloudinary.com/fee/image/upload/v1639138662/pizza/Pizza_T%C3%B4m_Cocktail-removebg-preview_vyhbbv.png', 'M', 'Tôm với nấm, dứa, cà chua và sốt Thousand Islan', 209000, 16, '2021-12-11 03:06:54', '2021-12-11 03:06:54', 0),
(7, 'Pizza Aloha', '', 'https://res.cloudinary.com/fee/image/upload/v1639138664/pizza/Pizza_Aloha-removebg-preview_kka9qn.png', 'M', 'Thịt nguội, xúc xích tiêu cay và dứa hòa quyện với sốt Thousand Island', 199000, 16, '2021-12-11 03:06:54', '2021-12-11 03:06:54', 0),
(8, 'Pizza Thịt Xông Khói', '', 'https://res.cloudinary.com/fee/image/upload/v1639138662/pizza/Pizza_Th%E1%BB%8Bt_X%C3%B4ng_Kh%C3%B3i-removebg-preview_xk2081.png', 'M', 'Thịt giăm bông, thịt xông khói và hai loại rau của ớt xanh, cà chua', 199000, 16, '2021-12-11 03:09:25', '2021-12-11 03:09:25', 0),
(10, 'Pizza Thịt Nguội Kiểu Canada', '', 'https://res.cloudinary.com/fee/image/upload/v1639138662/pizza/Pizza_Th%E1%BB%8Bt_Ngu%E1%BB%99i_Ki%E1%BB%83u_Canada-removebg-preview_cqxy2q.png', 'M', 'Sự kết hợp giữa thịt nguội và bắp ngọt', 199000, 16, '2021-12-11 03:09:25', '2021-12-11 03:09:25', 0),
(12, 'Pizza Gà Nướng 3 Vị', '', 'https://res.cloudinary.com/fee/image/upload/v1639138664/pizza/Pizza_G%C3%A0_N%C6%B0%E1%BB%9Bng_3_V%E1%BB%8B-removebg-preview_gxxyie.png', 'M', 'Gà nướng, gà bơ tỏi và gà ướp sốt nấm', 199000, 16, '2021-12-11 03:11:02', '2021-12-11 03:11:02', 0),
(13, 'Pizza 3 Loại Thịt Thập Cẩm Và Rau Củ', '', 'https://res.cloudinary.com/fee/image/upload/v1639138664/pizza/Pizza_3_Lo%E1%BA%A1i_Th%E1%BB%8Bt_Th%E1%BA%ADp_C%E1%BA%A9m_V%C3%A0_Rau_C%E1%BB%A7-removebg-preview_bpmv0f.png', 'M', 'Sự kết hợp hài hòa của ba loại thịt và rau củ.', 199000, 16, '2021-12-11 03:11:02', '2021-12-11 03:11:02', 0),
(15, 'Pizza 5 Loại Thịt Đặc Biệt', '', 'https://res.cloudinary.com/fee/image/upload/v1639138664/pizza/Pizza_5_Lo%E1%BA%A1i_Th%E1%BB%8Bt_%C4%90%E1%BA%B7c_Bi%E1%BB%87t-removebg-preview_e1dzd5.png', 'M', 'Xúc xích lợn và bò đặc trưng của Ý, giăm bông, thịt xông khói', 199000, 16, '2021-12-11 03:12:51', '2021-12-11 03:12:51', 0),
(16, 'Pizza Gà Nướng Dứa', '', 'https://res.cloudinary.com/fee/image/upload/v1639138664/pizza/Pizza_G%C3%A0_N%C6%B0%E1%BB%9Bng_D%E1%BB%A9a-removebg-preview_lmeklj.png', 'M', 'Thịt gà mang vị ngọt của dứa kết hợp với vị cay nóng của ớt', 179000, 16, '2021-12-11 03:12:51', '2021-12-11 03:12:51', 0),
(18, 'Pizza Phô Mai', '', 'https://res.cloudinary.com/fee/image/upload/v1639138663/pizza/Pizza_Ph%C3%B4_Mai-removebg-preview_xr7mjb.png', 'M', 'Bánh Pizza với vô vàn phô mai để bạn tha hồ tận hưởng', 179000, 16, '2021-12-11 03:14:29', '2021-12-11 03:14:29', 0),
(19, 'Pizza Xúc Xích Ý', '', 'https://res.cloudinary.com/fee/image/upload/v1639138662/pizza/Pizza_X%C3%BAc_X%C3%ADch_%C3%9D-removebg-preview_tsj1cb.png', 'M', 'Xúc xích cay kiểu Ý trên nền sốt cà chua', 179000, 16, '2021-12-11 03:14:29', '2021-12-11 03:14:29', 0),
(20, 'Pizza Hawaiian', '', 'https://res.cloudinary.com/fee/image/upload/v1639138663/pizza/Pizza_Hawaiian-removebg-preview_i2epnx.png', 'M', 'Giăm bông, thịt muối và dứa', 179000, 16, '2021-12-11 03:19:11', '2021-12-11 03:19:11', 0),
(21, 'Pizza Thịt Nguội & Nấm', '', 'https://res.cloudinary.com/fee/image/upload/v1639138662/pizza/Pizza_Th%E1%BB%8Bt_Ngu%E1%BB%99i___N%E1%BA%A5m-removebg-preview_qrynls.png', 'M', 'Pizza giăm bông và nấm đem đến cho bạn những trải nghiệm thú vị.', 179000, 16, '2021-12-11 03:19:11', '2021-12-11 03:19:11', 0),
(24, 'Pizza Rau Củ', '', 'https://res.cloudinary.com/fee/image/upload/v1639138662/pizza/Pizza_Rau_C%E1%BB%A7-removebg-preview_yzsoio.png', 'M', 'Hành, ớt chuông, nấm, dứa, cà chua', 179000, 16, '2021-12-11 03:21:10', '2021-12-11 03:21:10', 0),
(25, 'Cánh gà nướng BBQ (10 miếng)', '', 'https://res.cloudinary.com/fee/image/upload/v1639138918/appertizer/C%C3%A1nh_g%C3%A0_n%C6%B0%E1%BB%9Bng_BBQ__10_mi%E1%BA%BFng_-removebg-preview_kzvzkw.png', 'L', 'Cánh gà nướng thấm vị với lớp da mỏng giòn', 199000, 19, '2021-12-11 03:23:17', '2021-12-11 03:23:17', 0),
(26, 'Cánh gà nướng BBQ (6 miếng)', '', 'https://res.cloudinary.com/fee/image/upload/v1639138918/appertizer/C%C3%A1nh_g%C3%A0_n%C6%B0%E1%BB%9Bng_BBQ__6_mi%E1%BA%BFng_-removebg-preview_kb0ijp.png', 'M', 'Cánh gà nướng thấm vị với lớp da mỏng giòn', 129000, 19, '2021-12-11 03:23:17', '2021-12-11 03:23:17', 0),
(27, 'Bánh Mì Que Nướng', '', 'https://res.cloudinary.com/fee/image/upload/v1639138918/appertizer/B%C3%A1nh_M%C3%AC_Que_N%C6%B0%E1%BB%9Bng-removebg-preview_qqlmtz.png', 'M', 'Làm từ đế bột của Pizza và dùng kèm sốt Cocktail', 49000, 19, '2021-12-11 03:24:23', '2021-12-11 03:24:23', 0),
(28, 'Bánh Phô Mai Xoắn', '', 'https://res.cloudinary.com/fee/image/upload/v1639138918/appertizer/B%C3%A1nh_Ph%C3%B4_Mai_Xo%E1%BA%AFn-removebg-preview_usfmdy.png', 'M', 'Phô mai trắng được nướng với bơ, tỏi và dùng kèm sốt Cocktail', 99000, 19, '2021-12-11 03:24:23', '2021-12-11 03:24:23', 0),
(29, 'Bánh Mì Bơ Tỏi Phủ Phô Mai', '', 'https://res.cloudinary.com/fee/image/upload/v1639138918/appertizer/B%C3%A1nh_M%C3%AC_B%C6%A1_T%E1%BB%8Fi_Ph%E1%BB%A7_Ph%C3%B4_Mai-removebg-preview_nlxo5j.png', 'M', 'Lát bánh mì nướng được quết 1 lớp bơ tỏi và phô mai thơm béo', 59000, 19, '2021-12-11 03:25:49', '2021-12-11 03:25:49', 0),
(30, 'Gà Giòn Không Xương', '', 'https://res.cloudinary.com/fee/image/upload/v1639138918/appertizer/G%C3%A0_Gi%C3%B2n_Kh%C3%B4ng_X%C6%B0%C6%A1ng-removebg-preview_wcq1ja.png', 'M', 'Gà giòn tan với sốt Cocktail thơm ngậy', 99000, 19, '2021-12-11 03:25:49', '2021-12-11 03:25:49', 0),
(31, 'Khoai Tây Chiên', '', 'https://res.cloudinary.com/fee/image/upload/v1639138917/appertizer/Khoai_T%C3%A2y_Chi%C3%AAn-removebg-preview_z52ql8.png', 'M', 'Khoai tây sợi được chiên và tẩm một lớp muối thấm vị', 69000, 19, '2021-12-11 03:27:04', '2021-12-11 03:27:04', 0),
(32, 'Gà Zòn Zòn (10 miếng)', '', 'https://res.cloudinary.com/fee/image/upload/v1639138917/appertizer/G%C3%A0_Z%C3%B2n_Z%C3%B2n__10_mi%E1%BA%BFng_-removebg-preview_a09go9.png', 'L', 'Cánh gà được phủ bởi một lớp bột chiên giòn', 189000, 19, '2021-12-11 03:27:04', '2021-12-11 03:27:04', 0),
(33, 'Gà Zòn Zòn (6 miếng)', '', 'https://res.cloudinary.com/fee/image/upload/v1639138917/appertizer/G%C3%A0_Z%C3%B2n_Z%C3%B2n__6_mi%E1%BA%BFng_-removebg-preview_m65djz.png', 'M', 'Cánh gà được phủ bởi một lớp bột chiên giòn', 129000, 19, '2021-12-11 03:28:15', '2021-12-11 03:28:15', 0),
(34, 'Sườn Siêu Sao (5 miếng)', '', 'https://res.cloudinary.com/fee/image/upload/v1639138917/appertizer/S%C6%B0%E1%BB%9Dn_Si%C3%AAu_Sao__5_mi%E1%BA%BFng_-removebg-preview_yr15ku.png', 'M', 'Combo Sườn nướng BBQ dùng với khoai tây chiên và Salad', 319000, 19, '2021-12-11 03:28:15', '2021-12-11 03:28:15', 0),
(35, 'Đùi Gà Tẩm Bột Chiên Giòn (6pcs)', '', 'https://res.cloudinary.com/fee/image/upload/v1639138918/appertizer/%C4%90%C3%B9i_G%C3%A0_T%E1%BA%A9m_B%E1%BB%99t_Chi%C3%AAn_Gi%C3%B2n__6pcs_-removebg-preview_jxrpqt.png', 'M', 'Đùi Gà phủ một lớp bột chiên giòn rụm', 279000, 19, '2021-12-11 03:29:29', '2021-12-11 03:29:29', 0),
(36, 'Giỏ Khoai Tây Chiên', '', 'https://res.cloudinary.com/fee/image/upload/v1639138917/appertizer/Gi%E1%BB%8F_Khoai_T%C3%A2y_Chi%C3%AAn-removebg-preview_npxljv.png', 'M', 'Sự kết hợp của nhiều kiểu chế biến khoai tây', 79000, 19, '2021-12-11 03:29:29', '2021-12-11 03:29:29', 0),
(37, 'Tôm Bơ tỏi và Bánh Mì Nướng', '', 'https://res.cloudinary.com/fee/image/upload/v1639138917/appertizer/T%C3%B4m_B%C6%A1_t%E1%BB%8Fi_v%C3%A0_B%C3%A1nh_M%C3%AC_N%C6%B0%E1%BB%9Bng-removebg-preview_sypkp2.png', 'M', 'Tôm tươi đút lò với tỏi, bơ và phô mai dùng kèm bánh mì nướng bơ tỏi', 119000, 19, '2021-12-11 03:30:41', '2021-12-11 03:30:41', 0),
(38, 'Bánh Kẹp Nướng Mexico', '', 'https://res.cloudinary.com/fee/image/upload/v1639138918/appertizer/B%C3%A1nh_K%E1%BA%B9p_N%C6%B0%E1%BB%9Bng_Mexico-removebg-preview_vdiiwg.png', 'M', 'Phô mai, sốt cà chua, nhân gà nướng bơ tỏi, ớt sừng dùng kèm sốt cocktail', 109000, 19, '2021-12-11 03:30:41', '2021-12-11 03:30:41', 0),
(39, 'Mì Ý thịt bò bằm', '', 'https://res.cloudinary.com/fee/image/upload/v1639138731/pasta/M%C3%AC_%C3%9D_th%E1%BB%8Bt_b%C3%B2_b%E1%BA%B1m-removebg-preview_jun6hg.png', 'M', 'Sốt thịt bò bằm đặc trưng kết hợp cùng mỳ Ý', 129000, 17, '2021-12-11 03:32:14', '2021-12-11 03:32:14', 0),
(40, 'Mì Ý Giăm Bông Và Nấm Sốt Kem', '', 'https://res.cloudinary.com/fee/image/upload/v1639138731/pasta/M%C3%AC_%C3%9D_Gi%C4%83m_B%C3%B4ng_V%C3%A0_N%E1%BA%A5m_S%E1%BB%91t_Kem-removebg-preview_iznygf.png', 'M', 'Mỳ Ý, nấm và giăm bông được nấu cùng với sốt kem trắng', 99000, 17, '2021-12-11 03:32:14', '2021-12-11 03:32:14', 0),
(41, 'Mì Ý Tôm Sốt Kem Cà Chua', '', 'https://res.cloudinary.com/fee/image/upload/v1639138731/pasta/M%C3%AC_%C3%9D_T%C3%B4m_S%E1%BB%91t_Kem_C%C3%A0_Chua-removebg-preview_rtn6pd.png', 'M', 'Sự tươi ngon của tôm kết hợp với sốt kem cà chua', 129000, 17, '2021-12-11 03:33:38', '2021-12-11 03:33:38', 0),
(42, 'Mì Ý cay với thịt xông khói', '', 'https://res.cloudinary.com/fee/image/upload/v1639138732/pasta/M%C3%AC_%C3%9D_cay_v%E1%BB%9Bi_th%E1%BB%8Bt_x%C3%B4ng_kh%C3%B3i-removebg-preview_zhweli.png', 'M', 'Mỳ Ý cay nồng và ngậy hương thơm của thịt xông khói', 99000, 17, '2021-12-11 03:33:38', '2021-12-11 03:33:38', 0),
(43, 'Mì Ý Cay Hải Sản', '', 'https://res.cloudinary.com/fee/image/upload/v1639138732/pasta/M%C3%AC_%C3%9D_Cay_H%E1%BA%A3i_S%E1%BA%A3n-removebg-preview_cz4f5x.png', 'M', 'Mỳ Ý rán với các loại hải sản tươi ngon cùng ớt và tỏi', 129000, 17, '2021-12-11 03:34:44', '2021-12-11 03:34:44', 0),
(44, 'Mì Ý Chay Sốt Marinara', '', 'https://res.cloudinary.com/fee/image/upload/v1639138731/pasta/M%C3%AC_%C3%9D_Chay_S%E1%BB%91t_Marinara-removebg-preview_sgcgaa.png', 'M', 'Sốt Marinara, nấm, ớt chuông và cà chua đỏ', 89000, 17, '2021-12-11 03:34:44', '2021-12-11 03:34:44', 0),
(45, 'Mì Ý Chay Sốt Kem Tươi', '', 'https://res.cloudinary.com/fee/image/upload/v1639138732/pasta/M%C3%AC_%C3%9D_Chay_S%E1%BB%91t_Kem_T%C6%B0%C6%A1i-removebg-preview_ji4wgk.png', 'M', 'Mỳ Ý chay thơm ngon với sốt kem và nấm', 89000, 17, '2021-12-11 03:35:49', '2021-12-11 03:35:49', 0),
(46, 'Mì Ý Cay Xúc Xích', '', 'https://res.cloudinary.com/fee/image/upload/v1639138733/pasta/M%C3%AC_%C3%9D_Cay_X%C3%BAc_X%C3%ADch-removebg-preview_cfpwiy.png', 'M', 'Mỳ Ý rán với xúc xích cay, thảo mộc, ngò gai và húng quế Ý', 109000, 17, '2021-12-11 03:35:49', '2021-12-11 03:35:49', 0),
(47, 'Salad Trộn Sốt Caesar', '', 'https://res.cloudinary.com/fee/image/upload/v1639138827/salad/Salad_Tr%E1%BB%99n_S%E1%BB%91t_Caesar-removebg-preview_b1dqm2.png', 'M', 'Rau tươi trộn với sốt Caesar', 69000, 18, '2021-12-11 03:37:52', '2021-12-11 03:37:52', 0),
(48, 'Salad Gà Giòn Không Xương', '', 'https://res.cloudinary.com/fee/image/upload/v1639138827/salad/Salad_G%C3%A0_Gi%C3%B2n_Kh%C3%B4ng_X%C6%B0%C6%A1ng-removebg-preview_y8djh9.png', 'M', 'Salad Gà giòn với trứng cút, thịt xông khói, phô mai parmesan và sốt Thousand Island', 69000, 18, '2021-12-11 03:37:52', '2021-12-11 03:37:52', 0),
(50, 'Salad Da Cá Hồi Giòn', '', 'https://res.cloudinary.com/fee/image/upload/v1639138827/salad/Salad_Da_C%C3%A1_H%E1%BB%93i_Gi%C3%B2n-removebg-preview_odkqvb.png', 'M', 'Salad với da cá hồi giòn với bắp cải đỏ, cà chua bi, ngô với sốt Yuzu', 69000, 18, '2021-12-11 03:39:17', '2021-12-11 03:39:17', 0),
(51, 'Salad Trộn Dầu Giấm', '', 'https://res.cloudinary.com/fee/image/upload/v1639138827/salad/Salad_Tr%E1%BB%99n_D%E1%BA%A7u_Gi%E1%BA%A5m-removebg-preview_u9swab.png', 'M', 'Rau với sốt dầu giấm', 59000, 18, '2021-12-11 03:39:17', '2021-12-11 03:39:17', 0),
(52, 'Salad Đặc Sắc', '', 'https://res.cloudinary.com/fee/image/upload/v1639138827/salad/Salad_%C4%90%E1%BA%B7c_S%E1%BA%AFc-removebg-preview_lplduj.png', 'M', 'Bông cải xanh, búp cải tím, táo, xà lách, trứng… và sốt Salad đặc biệt', 69000, 18, '2021-12-11 03:40:23', '2021-12-11 03:40:23', 0),
(53, '7Up Lon', '', 'https://res.cloudinary.com/fee/image/upload/v1639138874/Drink/7up-removebg-preview_vcsuev.png', 'M', '7Up Lon', 29000, 20, '2021-12-11 03:41:38', '2021-12-11 03:41:38', 0),
(54, '7Up 1,5L', '', 'https://res.cloudinary.com/fee/image/upload/v1639138874/Drink/7Up_1_5l_Chai-removebg-preview_cuua5z.png', 'L', '7Up 1,5L Uống thả ga cùng với gia đình', 79000, 20, '2021-12-11 03:41:38', '2021-12-11 03:41:38', 0),
(55, 'Bia Heniken', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Bia_Heineken-removebg-preview_k5pwdk.png', 'M', 'Kết hợp hương lúa mạch thượng hạng và hoa bia đặc biệt, tạo nên hương vị không thể nào quên được', 59000, 20, '2021-12-11 03:44:32', '2021-12-11 03:44:32', 0),
(56, 'Bia 333', '', 'https://res.cloudinary.com/fee/image/upload/v1639138874/Drink/Bia_333-removebg-preview_xp4v6h.png', 'M', 'Bia 333 với hương lúa mạch thượng hạng', 49000, 20, '2021-12-11 03:44:32', '2021-12-11 03:44:32', 0),
(57, 'Pepsi Lon', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/pepsi-removebg-preview_bunvs5.png', 'M', 'Pepsi Lon', 29000, 20, '2021-12-11 03:46:12', '2021-12-11 03:46:12', 0),
(58, 'Mirinda Soda Kem Lon', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Mirinda_Soda_Kem_Lon-removebg-preview_clssrj.png', 'M', 'Mirinda Soda Kem Lon', 29000, 20, '2021-12-11 03:46:12', '2021-12-11 03:46:12', 0),
(59, 'Pepsi Black Lime Lon', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Pepsi_Black_Lime_Lon-removebg-preview_p0sxky.png', 'M', 'Pepsi Black Lime Lon', 29000, 20, '2021-12-11 03:47:24', '2021-12-11 03:47:24', 0),
(60, 'Pepsi 1,5l Chai', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Pepsi_1_5l_Chai-removebg-preview_urwsv6.png', 'L', 'Pepsi 1,5l Chai', 79000, 20, '2021-12-11 03:47:24', '2021-12-11 03:47:24', 0),
(61, 'Pepsi Black Lon', '', 'https://res.cloudinary.com/fee/image/upload/v1639138873/Drink/Pepsi_Black_Lon-removebg-preview_qlovyh.png', 'M', 'Pepsi Black Lon', 29000, 20, '2021-12-11 03:48:33', '2021-12-11 03:48:33', 0),
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT for table `danhgia`
--
ALTER TABLE `danhgia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `danhmuc`
--
ALTER TABLE `danhmuc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `danhsach_diachi`
--
ALTER TABLE `danhsach_diachi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `giohang`
--
ALTER TABLE `giohang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT for table `hinhthucthanhtoan`
--
ALTER TABLE `hinhthucthanhtoan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `hoadon`
--
ALTER TABLE `hoadon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=168;

--
-- AUTO_INCREMENT for table `nguoidung`
--
ALTER TABLE `nguoidung`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

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
