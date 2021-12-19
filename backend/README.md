1. API dành cho admin
   User : - xem danh sách toàn bộ tài khoản : get -->http://localhost:5000/admin/users - đăng ký tài khoản admin : post --> http://localhost:5000/admin/register - đăng nhập tài khoản admin : post --> http://localhost:5000/admin/login - refresh token admin : get --> http://localhost:5000/admin/refreshToken - đăng xuất tài khoản admin : get --> http://localhost:5000/admin/logout - xem thông tin tài khoản admin đang đăng nhập : get --> http://localhost:5000/admin/profile - chỉnh sửa toàn bộ tài khoản : patch --> http://localhost:5000/admin/users/id_nd - đổi mật khẩu tài khoản admin đang đăng nhập : patch --> http://localhost:5000/admin/changePassword - xóa tài khoản : delete --> http://localhost:5000/admin/users/delete/id_nd

   Category : - Thêm mới danh mục : post --> http://localhost:5000/category/ - chỉnh sửa tên danh mục : patch --> http://localhost:5000/category/id_dm - Xóa danh mục : http://localhost:5000/category/delete/id

   Product : - Thêm mới sản phẩm : post --> http://localhost:5000/product - chỉnh sửa sản phẩm : patch --> http://localhost:5000/product/id_sp - xóa sản phẩm : delete --> http://localhost:5000/product/delete/id

   Upload : - upload ảnh về sản phẩm (ảnh được lưu trong thư mục sản phẩm) : post --> http://localhost:5000/cloud/uploadProduct - upload ảnh về hình thức thanh toán (ảnh được lưu trong thư mục payment) : post --> http://localhost:5000/cloud/uploadPayment - xóa ảnh trên cloud (xóa bằng public_id) : post --> http://localhost:5000/cloud/destroy

   App info : - thêm thông tin ứng dụng: post --> http://localhost:5000/appInfo/add - chỉnh sửa thông tin ứng dụng : patch --> http://localhost:5000/appInfo/id - xóa thông tin ứng dụng : delete --> http://localhost:5000/appInfo/id

   Payment : - thêm hình thức thanh toán : post --> http://localhost:5000/payment/add - chỉnh sửa hình thức thanh toán : patch --> http://localhost:5000/payment/id - xóa hình thức thanh toán : delete --> http://localhost:5000/payment/delete/id

   Bill : - chỉnh sửa tình trạng hóa đơn : patch --> http://localhost:5000/bill/update/id_hd - xóa hóa đơn -> xóa toàn bộ chi tiết hóa đơn theo id hóa đơn : delete --> http://localhost:5000/bill/delete/id_hd

   Rating : - xem toàn bộ đánh giá của khách hàng : get --> http://localhost:5000/rating/all - xóa đánh giá : http://localhost:5000/rating/delete/id_danhgia

2. API dành cho khách hàng
   User : - đăng ký tài khoản khách hàng : post --> http://localhost:5000/customer/register - đăng nhập tài khoản khách hàng : post --> http://localhost:5000/customer/login - refresh token khách hàng : get --> http://localhost:5000/customer/refreshToken - đăng xuất tài khoản khách hàng : get --> http://localhost:5000/customer/logout - xem thông tin tài khoản khách hàng đang đăng nhập : get --> http://localhost:5000/customer/profile - chỉnh sửa thông tin tài khoản khách hàng : patch --> http://localhost:5000/customer/updateProfile - đổi mật khẩu tài khoản khách hàng : patch --> http://localhost:5000/customer/changePassword

   Cart : - Thêm sản phẩm vào giỏ hàng : post --> http://localhost:5000/cart/addCartItem/id_sp - Xem giỏ hàng của tài khoản khách hàng đang đăng nhập : get --> http://localhost:5000/cart - Xem chi tiết giỏ hàng : get --> http://localhost:5000/cart/item/id_cart - chỉnh sửa số lượng sản phẩm trong giỏ hàng : patch --> http://localhost:5000/cart/updateQuantityProduct/id_cart - xóa chi tiết giỏ hàng : delete --> http://localhost:5000/cart/delete/id_cart - xóa toàn bộ chi tiết giỏ hàng : delete --> http://localhost:5000/cart/deleteAll

   Address : - lấy ra chi tiết địa chỉ: get --> http://localhost:5000/address/id_diachi - thêm mới địa chỉ: post --> http://localhost:5000/address/add - lấy ra danh sách địa chỉ : get --> http://localhost:5000/address/ - chỉnh sửa địa chỉ : patch --> http://localhost:5000/address/id_diachi - xóa địa chỉ : delete --> http://localhost:5000/address/id_diachi

   Bill : - tạo hóa đơn sau khi thêm sản phẩm vào giỏ hàng (-> lấy chi tiết giỏ hàng để tạo chi tiết hóa đơn, tạo hóa đơn xong thì xóa giỏ hàng) : post --> http://localhost:5000/bill/create - xem lịch sử đặt hàng của tài khoản khách hàng đang đăng nhập : get --> http://localhost:5000/bill/history - xem hóa đơn : get --> http://localhost:5000/bill/detail/id_hd - hủy bill (khi hóa đơn của khách hàng chưa thanh toán ) : patch --> http://localhost:5000/bill/cancel/id_hd

   Bill Detail : - xem từng chi tiết hóa đơn : get --> http://localhost:5000/billDetail/id_cthd

   Rating : - đánh giá hóa đơn : post --> http://localhost:5000/rating/add/id_hd - lịch sử đánh giá của tài khoản đang đăng nhập : get --> http://localhost:5000/rating/history - chỉnh sửa đánh giá : patch --> http://localhost:5000/rating/update/id_danhgia

3. API không có phân quyền
   Category : - xem toàn bộ danh mục : get --> http://localhost:5000/category/ - Lấy ra sản phẩm phân loại theo id danh mục: get --> http://localhost:5000/category/id_dm

   Product: - Xem toàn bộ sản phẩm : get --> http://localhost:5000/product - xem chi tiết sản phẩm : get --> http://localhost:5000/product/id_sp

   App info: - xem toàn bộ thông tin ứng dụng : get --> http://localhost:5000/appInfo/ - xem chi tiết thông tin ứng dụng : get --> http://localhost:5000/appInfo/id

   Payment : - xem toàn bộ hình thức thanh toán : get --> http://localhost:5000/payment/ - xem chi tiết hình thức thanh toán : get --> http://localhost:5000/payment/id
