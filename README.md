1. API dành cho admin
   User :

   - xem danh sách toàn bộ tài khoản admin : get -->https://orderfood.cf/admin/adminAccount
   - xem danh sách toàn bộ tài khoản khách hàng : get -->https://orderfood.cf/admin/customerAccount
   - Đăng ký tài khoản admin : post --> https://orderfood.cf/admin/register
   - Đăng nhập tài khoản admin : post --> https://orderfood.cf/admin/login
   - Refresh token admin : get --> https://orderfood.cf/admin/refreshToken
   - Đăng xuất tài khoản admin : get -->https://orderfood.cf/admin/logout
   - Xem thông tin tài khoản admin đang đăng nhập : get --> https://orderfood.cf/admin/profile
   - Chỉnh sửa toàn bộ tài khoản : patch --> https://orderfood.cf/admin/users/id_nd
   - Đổi mật khẩu tài khoản admin đang đăng nhập : patch --> https://orderfood.cf/changePassword
   - Xóa tài khoản : delete --> https://orderfood.cf/admin/users/delete/id_nd
   - quên mật khẩu tài khoản admin : post --> https://orderfood.cf/admin/forgotPassword
   - hiển thị tài khoản đăng ký từ 3 ngày trước đến hiện tại : get --> https://orderfood.cf/admin/newUser
   - hiển thị tổng doanh thu : get --> https://orderfood.cf/admin/totalRevenue
   - hiển thị tổng sản phẩm bán được : get --> https://orderfood.cf/admin/totalProductSold
   - hiển thị tổng hóa đơn khách hàng chưa nhận được sản phẩm : get --> https://orderfood.cf/admin/totalBillCustomerNotReceived
   - hiển thị tổng hóa đơn khách hàng đã hủy: get --> https://orderfood.cf/admin/totalBillCancelled
   - hiển thị doanh thu theo tháng : get --> https://orderfood.cf/admin/revenueByMonth
   - thống kê hóa đơn từ ngày ... đến ngày ... : get --> https://orderfood.cf/admin/statisticBillByDay
   - hiển thị doanh thu bán được tháng này và so sánh tháng trước : get --> https://orderfood.cf/admin/getRevenueThisAndLastMonth
   - hiển thị tổng hóa đơn khách hàng chưa nhận được tháng này và so sánh tháng trước: get --> https://orderfood.cf/admin/getTotalBillCustomerNotReceivedThisAndLastMonth
   - hiển thị tổng hóa đơn khách hàng hủy tháng này và so sánh tháng trước: get --> https://orderfood.cf/admin/getTotalBillCustomerCancelledThisAndLastMonth

   - Category :

   - Thêm mới danh mục : post --> https://orderfood.cf/category/
   - Chỉnh sửa tên danh mục : patch --> https://orderfood.cf/category/id_dm
   - Xóa danh mục : https://orderfood.cf/category/delete/id

   Product :

   - Thêm mới sản phẩm : post --> https://orderfood.cf/product
   - Chỉnh sửa sản phẩm : patch --> https://orderfood.cf/product/id_sp
   - Xóa sản phẩm : delete --> https://orderfood.cf/product/delete/id

   Upload :

   - Upload ảnh về sản phẩm (ảnh được lưu trong thư mục sản phẩm) : post --> https://orderfood.cf/cloud/uploadProduct/admin
   - Upload ảnh về hình thức thanh toán (ảnh được lưu trong thư mục payment) : post --> https://orderfood.cf/cloud/uploadPayment/admin
   - Upload ảnh người dùng (ảnh lưu trong thư mục users) : post --> https://orderfood.cf/cloud/uploadUserImage/admin
   - Xóa ảnh trên cloud (xóa bằng public_id) : post --> https://orderfood.cf/cloud/destroy/admin

   App info :

   - Thêm thông tin ứng dụng: post --> https://orderfood.cf/appInfo/add
   - Chỉnh sửa thông tin ứng dụng : patch --> https://orderfood.cf/appInfo/id
   - Xóa thông tin ứng dụng : delete --> https://orderfood.cf/appInfo/id

   Payment :

   - Thêm hình thức thanh toán : post --> https://orderfood.cf/payment/add
   - Chỉnh sửa hình thức thanh toán : patch -->https://orderfood.cf/payment/id
   - Xóa hình thức thanh toán : delete --> https://orderfood.cf/payment/delete/id

   Bill :

   - Xem hóa đơn toàn bộ khách hàng : get --> https://orderfood.cf/bill/all
   - Chỉnh sửa tình trạng hóa đơn : patch --> https://orderfood.cf/bill/update/id_hd
   - Xóa hóa đơn -> xóa toàn bộ chi tiết hóa đơn theo id hóa đơn : delete --> https://orderfood.cf/bill/delete/id_hd
   - sắp xếp tổng giao dịch của khách hàng đã thanh toán hoặc đã nhận hàng (trên 1 triệu) : get -->https://orderfood.cf/bill/sortTransaction

   Bill detail :

   - Xem toàn bộ chi tiết hóa đơn : get --> https://orderfood.cf/billDetail/all

   Rating :

   - Xem toàn bộ đánh giá của khách hàng : get --> https://orderfood.cf/rating/all
   - Xóa đánh giá : https://orderfood.cf/rating/delete/id_danhgia

   Voucher :

   - Xem toàn bộ phiếu giảm giá : get --> https://orderfood.cf/voucher/all
   - Tạo một phiếu giảm giá : post --> https://orderfood.cf/voucher/add
   - Chỉnh sửa phiếu giảm giá : patch --> https://orderfood.cf/voucher/update/:id_voucher
   - Xóa phiếu giảm giá : delete --> https://orderfood.cf/voucher/delete/:id_voucher

2. API dành cho khách hàng
   User :

   - Đăng ký tài khoản khách hàng : post --> https://orderfood.cf/customer/register
   - Đăng nhập tài khoản khách hàng : post --> https://orderfood.cf/customer/login
   - Refresh token khách hàng : get --> https://orderfood.cf/customer/refreshToken
   - Đăng xuất tài khoản khách hàng : get --> https://orderfood.cf/customer/logout
   - Xem thông tin tài khoản khách hàng đang đăng nhập : get --> https://orderfood.cf/customer/profile
   - Chỉnh sửa thông tin tài khoản khách hàng : patch --> https://orderfood.cf/customer/updateProfile
   - Đổi mật khẩu tài khoản khách hàng : patch --> https://orderfood.cf/customer/changePassword
   - quên mật khẩu tài khoản khách hàng : post --> https://orderfood.cf/customer/forgotPassword
   - đăng nhập bằng google : get --> https://orderfood.cf/auth/google

   Cart :

   - Thêm sản phẩm vào giỏ hàng : post --> https://orderfood.cf/cart/addCartItem/id_sp
   - Xem giỏ hàng của tài khoản khách hàng đang đăng nhập : get --> https://orderfood.cf/cart
   - Xem chi tiết giỏ hàng : get --> https://orderfood.cf/cart/item/id_cart
   - Chỉnh sửa số lượng sản phẩm trong giỏ hàng : patch --> https://orderfood.cf/cart/updateQuantityProduct/id_cart
   - Xóa chi tiết giỏ hàng : delete --> https://orderfood.cf/cart/delete/id_cart
   - Xóa toàn bộ chi tiết giỏ hàng : delete --> https://orderfood.cf/cart/deleteAll
   - Hiển thị tổng số lượng sản phẩm và tổng tiền của giỏ hàng : get --> https://orderfood.cf/cart/getAllQuantityAndPriceOfCart

   Address :

   - lấy ra chi tiết địa chỉ: get --> https://orderfood.cf/address/id_diachi
   - thêm mới địa chỉ: post --> https://orderfood.cf/address/add
   - lấy ra danh sách địa chỉ : get --> https://orderfood.cf/address/
   - chỉnh sửa địa chỉ : patch --> https://orderfood.cf/address/id_diachi
   - xóa địa chỉ : delete --> https://orderfood.cf/address/id_diachi

   Bill :

   - Tạo hóa đơn sau khi thêm sản phẩm vào giỏ hàng (-> lấy chi tiết giỏ hàng để tạo chi tiết hóa đơn, tạo hóa đơn xong thì xóa giỏ hàng) : post --> https://orderfood.cf/bill/create
   - Xem lịch sử đặt hàng của tài khoản khách hàng đang đăng nhập : get --> https://orderfood.cf/bill/history
   - Xem hóa đơn : get --> https://orderfood.cf/bill/detail/id_hd -
   - Hủy bill (khi hóa đơn của khách hàng chưa thanh toán ) : patch --> https://orderfood.cf/bill/cancel/id_hd

   Bill Detail :

   - Xem từng chi tiết hóa đơn : get --> https://orderfood.cf/billDetail/id_cthd

   Rating :

   - Đánh giá hóa đơn : post --> https://orderfood.cf/rating/add/id_hd
   - Lịch sử đánh giá của tài khoản đang đăng nhập : get --> https://orderfood.cf/rating/history
   - Chỉnh sửa đánh giá : patch --> https://orderfood.cf/rating/update/id_danhgia

   Upload :

   - Upload ảnh người dùng đang đăng nhập (ảnh lưu trong thư mục users) : post --> https://orderfood.cf/cloud/uploadUserImage/customer
   - Xóa ảnh trên cloud (xóa bằng public_id) : post --> https://orderfood.cf/cloud/destroy/customer

   Voucher :

   - Kiểm tra mã voucher hợp lệ hay không : get --> https://orderfood.cf/voucher/check/id_voucher
   - Xem tất cả phiếu giảm giá : get --> https://orderfood.cf/voucher/all/customer

3. API không có phân quyền
   Category :

   - Xem toàn bộ danh mục : get --> https://orderfood.cf/category/
   - Lấy ra sản phẩm phân loại theo id danh mục: get --> https://orderfood.cf/category/id_dm

   Product:

   - Xem toàn bộ sản phẩm : get --> https://orderfood.cf/product
   - Xem chi tiết sản phẩm : get --> https://orderfood.cf/product/id_sp
   - sắp xếp sản phẩm tăng dần theo giá --> https://orderfood.cf/product/sort/asc
   - sắp xếp sản phẩm giảm dần theo giá --> https://orderfood.cf/product/sort/desc

   App info:

   - Xem toàn bộ thông tin ứng dụng : get --> https://orderfood.cf/appInfo/
   - Xem chi tiết thông tin ứng dụng : get --> https://orderfood.cf/appInfo/id

   Payment :

   - Xem toàn bộ hình thức thanh toán : get --> https://orderfood.cf/payment/
   - Xem chi tiết hình thức thanh toán : get --> https://orderfood.cf/payment/id
