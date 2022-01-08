1. API dành cho admin
   User :

   - xem danh sách toàn bộ tài khoản admin : get -->http://localhost:5000/admin/adminAccount
   - xem danh sách toàn bộ tài khoản khách hàng : get -->http://localhost:5000/admin/customerAccount
   - Đăng ký tài khoản admin : post --> http://localhost:5000/admin/register
   - Đăng nhập tài khoản admin : post --> http://localhost:5000/admin/login
   - Refresh token admin : get --> http://localhost:5000/admin/refreshToken
   - Đăng xuất tài khoản admin : get --> http://localhost:5000/admin/logout
   - Xem thông tin tài khoản admin đang đăng nhập : get --> http://localhost:5000/admin/profile
   - Chỉnh sửa toàn bộ tài khoản : patch --> http://localhost:5000/admin/users/id_nd
   - Đổi mật khẩu tài khoản admin đang đăng nhập : patch --> http://localhost:5000/admin/changePassword
   - Xóa tài khoản : delete --> http://localhost:5000/admin/users/delete/id_nd
   - quên mật khẩu tài khoản admin : post --> http://localhost:5000/admin/forgotPassword
   - hiển thị tài khoản đăng ký từ 3 ngày trước đến hiện tại : get --> http://localhost:5000/admin/newUser
   - hiển thị tổng doanh thu : get --> http://localhost:5000/admin/totalRevenue
   - hiển thị tổng sản phẩm bán được : get --> http://localhost:5000/admin/totalProductSold
   - hiển thị tổng hóa đơn khách hàng chưa nhận được sản phẩm : get --> http://localhost:5000/admin/totalBillCustomerNotReceived
   - hiển thị tổng hóa đơn khách hàng đã hủy: get --> http://localhost:5000/admin/totalBillCancelled
   - hiển thị doanh thu theo tháng : get --> http://localhost:5000/admin/revenueByMonth
   - thống kê hóa đơn từ ngày ... đến ngày ... : get --> http://localhost:5000/admin/statisticBillByDay
   - hiển thị doanh thu bán được tháng này và so sánh tháng trước : get --> http://localhost:5000/admin/getRevenueThisAndLastMonth
   - hiển thị tổng hóa đơn khách hàng chưa nhận được tháng này và so sánh tháng trước: get --> http://localhost:5000/admin/getTotalBillCustomerNotReceivedThisAndLastMonth
   - hiển thị tổng hóa đơn khách hàng hủy tháng này và so sánh tháng trước: get --> http://localhost:5000/admin/getTotalBillCustomerCancelledThisAndLastMonth

   - Category :

   - Thêm mới danh mục : post --> http://localhost:5000/category/
   - Chỉnh sửa tên danh mục : patch --> http://localhost:5000/category/id_dm
   - Xóa danh mục : http://localhost:5000/category/delete/id

   Product :

   - Thêm mới sản phẩm : post --> http://localhost:5000/product
   - Chỉnh sửa sản phẩm : patch --> http://localhost:5000/product/id_sp
   - Xóa sản phẩm : delete --> http://localhost:5000/product/delete/id

   Upload :

   - Upload ảnh về sản phẩm (ảnh được lưu trong thư mục sản phẩm) : post --> http://localhost:5000/cloud/uploadProduct/admin
   - Upload ảnh về hình thức thanh toán (ảnh được lưu trong thư mục payment) : post --> http://localhost:5000/cloud/uploadPayment/admin
   - Upload ảnh người dùng (ảnh lưu trong thư mục users) : post --> http://localhost:5000/cloud/uploadUserImage/admin
   - Xóa ảnh trên cloud (xóa bằng public_id) : post --> http://localhost:5000/cloud/destroy/admin

   App info :

   - Thêm thông tin ứng dụng: post --> http://localhost:5000/appInfo/add
   - Chỉnh sửa thông tin ứng dụng : patch --> http://localhost:5000/appInfo/id
   - Xóa thông tin ứng dụng : delete --> http://localhost:5000/appInfo/id

   Payment :

   - Thêm hình thức thanh toán : post --> http://localhost:5000/payment/add
   - Chỉnh sửa hình thức thanh toán : patch --> http://localhost:5000/payment/id
   - Xóa hình thức thanh toán : delete --> http://localhost:5000/payment/delete/id

   Bill :

   - Xem hóa đơn toàn bộ khách hàng : get --> http://localhost:5000/bill/all
   - Chỉnh sửa tình trạng hóa đơn : patch --> http://localhost:5000/bill/update/id_hd
   - Xóa hóa đơn -> xóa toàn bộ chi tiết hóa đơn theo id hóa đơn : delete --> http://localhost:5000/bill/delete/id_hd
   - sắp xếp tổng giao dịch của khách hàng đã thanh toán hoặc đã nhận hàng (trên 1 triệu) : get -->http://localhost:5000/bill/sortTransaction

   Bill detail :

   - Xem toàn bộ chi tiết hóa đơn : get --> http://localhost:5000/billDetail/all

   Rating :

   - Xem toàn bộ đánh giá của khách hàng : get --> http://localhost:5000/rating/all
   - Xóa đánh giá : http://localhost:5000/rating/delete/id_danhgia

   Voucher :

   - Xem toàn bộ phiếu giảm giá : get --> http://localhost:5000/voucher/all
   - Tạo một phiếu giảm giá : post --> http://localhost:5000/voucher/add
   - Chỉnh sửa phiếu giảm giá : patch --> http://localhost:5000/voucher/update/:id_voucher
   - Xóa phiếu giảm giá : delete --> http://localhost:5000/voucher/delete/:id_voucher

2. API dành cho khách hàng
   User :

   - Đăng ký tài khoản khách hàng : post --> http://localhost:5000/customer/register
   - Đăng nhập tài khoản khách hàng : post --> http://localhost:5000/customer/login
   - Refresh token khách hàng : get --> http://localhost:5000/customer/refreshToken
   - Đăng xuất tài khoản khách hàng : get --> http://localhost:5000/customer/logout
   - Xem thông tin tài khoản khách hàng đang đăng nhập : get --> http://localhost:5000/customer/profile
   - Chỉnh sửa thông tin tài khoản khách hàng : patch --> http://localhost:5000/customer/updateProfile
   - Đổi mật khẩu tài khoản khách hàng : patch --> http://localhost:5000/customer/changePassword
   - quên mật khẩu tài khoản khách hàng : post --> http://localhost:5000/customer/forgotPassword
   - đăng nhập bằng google : get --> http://localhost:5000/auth/google

   Cart :

   - Thêm sản phẩm vào giỏ hàng : post --> http://localhost:5000/cart/addCartItem/id_sp
   - Xem giỏ hàng của tài khoản khách hàng đang đăng nhập : get --> http://localhost:5000/cart
   - Xem chi tiết giỏ hàng : get --> http://localhost:5000/cart/item/id_cart
   - Chỉnh sửa số lượng sản phẩm trong giỏ hàng : patch --> http://localhost:5000/cart/updateQuantityProduct/id_cart
   - Xóa chi tiết giỏ hàng : delete --> http://localhost:5000/cart/delete/id_cart
   - Xóa toàn bộ chi tiết giỏ hàng : delete --> http://localhost:5000/cart/deleteAll
   - Hiển thị tổng số lượng sản phẩm và tổng tiền của giỏ hàng : get --> http://localhost:5000/cart/getAllQuantityAndPriceOfCart

   Address :

   - lấy ra chi tiết địa chỉ: get --> http://localhost:5000/address/id_diachi
   - thêm mới địa chỉ: post --> http://localhost:5000/address/add
   - lấy ra danh sách địa chỉ : get --> http://localhost:5000/address/
   - chỉnh sửa địa chỉ : patch --> http://localhost:5000/address/id_diachi
   - xóa địa chỉ : delete --> http://localhost:5000/address/id_diachi

   Bill :

   - Tạo hóa đơn sau khi thêm sản phẩm vào giỏ hàng (-> lấy chi tiết giỏ hàng để tạo chi tiết hóa đơn, tạo hóa đơn xong thì xóa giỏ hàng) : post --> http://localhost:5000/bill/create
   - Xem lịch sử đặt hàng của tài khoản khách hàng đang đăng nhập : get --> http://localhost:5000/bill/history
   - Xem hóa đơn : get --> http://localhost:5000/bill/detail/id_hd -
   - Hủy bill (khi hóa đơn của khách hàng chưa thanh toán ) : patch --> http://localhost:5000/bill/cancel/id_hd
   - Kiểm tra mã voucher hợp lệ hay không : get --> http://localhost:5000/voucher/check/id_voucher

   Bill Detail :

   - Xem từng chi tiết hóa đơn : get --> http://localhost:5000/billDetail/id_cthd

   Rating :

   - Đánh giá hóa đơn : post --> http://localhost:5000/rating/add/id_hd
   - Lịch sử đánh giá của tài khoản đang đăng nhập : get --> http://localhost:5000/rating/history
   - Chỉnh sửa đánh giá : patch --> http://localhost:5000/rating/update/id_danhgia

   Upload :

   - Upload ảnh người dùng đang đăng nhập (ảnh lưu trong thư mục users) : post --> http://localhost:5000/cloud/uploadUserImage/customer
   - Xóa ảnh trên cloud (xóa bằng public_id) : post --> http://localhost:5000/cloud/destroy/customer

3. API không có phân quyền
   Category :

   - Xem toàn bộ danh mục : get --> http://localhost:5000/category/
   - Lấy ra sản phẩm phân loại theo id danh mục: get --> http://localhost:5000/category/id_dm

   Product:

   - Xem toàn bộ sản phẩm : get --> http://localhost:5000/product
   - Xem chi tiết sản phẩm : get --> http://localhost:5000/product/id_sp
   - sắp xếp sản phẩm tăng dần theo giá --> http://localhost:5000/product/sort/asc
   - sắp xếp sản phẩm giảm dần theo giá --> http://localhost:5000/product/sort/desc

   App info:

   - Xem toàn bộ thông tin ứng dụng : get --> http://localhost:5000/appInfo/
   - Xem chi tiết thông tin ứng dụng : get --> http://localhost:5000/appInfo/id

   Payment :

   - Xem toàn bộ hình thức thanh toán : get --> http://localhost:5000/payment/
   - Xem chi tiết hình thức thanh toán : get --> http://localhost:5000/payment/id
