1. API dành cho admin
   User : 
   - Xem danh sách toàn bộ tài khoản : get -->http://localhost:5000/admin/users 
   - Đăng ký tài khoản admin : post --> http://localhost:5000/admin/register 
   - Đăng nhập tài khoản admin : post --> http://localhost:5000/admin/login 
   - Refresh token admin : get --> http://localhost:5000/admin/refreshToken 
   - Đăng xuất tài khoản admin : get --> http://localhost:5000/admin/logout 
   - Xem thông tin tài khoản admin đang đăng nhập : get --> http://localhost:5000/admin/profile 
   - Chỉnh sửa toàn bộ tài khoản : patch --> http://localhost:5000/admin/users/id_nd 
   - Đổi mật khẩu tài khoản admin đang đăng nhập : patch --> http://localhost:5000/admin/changePassword 
   - Xóa tài khoản : delete --> http://localhost:5000/admin/users/delete/id_nd

   Category : 
   - Thêm mới danh mục : post --> http://localhost:5000/category/ 
   - Chỉnh sửa tên danh mục : patch --> http://localhost:5000/category/id_dm 
   - Xóa danh mục : http://localhost:5000/category/delete/id

   Product :
   - Thêm mới sản phẩm : post --> http://localhost:5000/product 
   - Chỉnh sửa sản phẩm : patch --> http://localhost:5000/product/id_sp 
   - Xóa sản phẩm : delete --> http://localhost:5000/product/delete/id

   Upload : 
   - Upload ảnh về sản phẩm (ảnh được lưu trong thư mục sản phẩm) : post --> http://localhost:5000/cloud/uploadProduct 
   - Upload ảnh về hình thức thanh toán (ảnh được lưu trong thư mục payment) : post --> http://localhost:5000/cloud/uploadPayment 
   - Xóa ảnh trên cloud (xóa bằng public_id) : post --> http://localhost:5000/cloud/destroy

   App info : 
   - Thêm thông tin ứng dụng: post --> http://localhost:5000/appInfo/add 
   - Chỉnh sửa thông tin ứng dụng : patch --> http://localhost:5000/appInfo/id 
   - Xóa thông tin ứng dụng : delete --> http://localhost:5000/appInfo/id

   Payment : 
   - Thêm hình thức thanh toán : post --> http://localhost:5000/payment/add 
   - Chỉnh sửa hình thức thanh toán : patch --> http://localhost:5000/payment/id 
   - Xóa hình thức thanh toán : delete --> http://localhost:5000/payment/delete/id

   Bill : 
   - Chỉnh sửa tình trạng hóa đơn : patch --> http://localhost:5000/bill/update/id_hd 
   - Xóa hóa đơn -> xóa toàn bộ chi tiết hóa đơn theo id hóa đơn : delete --> http://localhost:5000/bill/delete/id_hd

   Rating : 
   - Xem toàn bộ đánh giá của khách hàng : get --> http://localhost:5000/rating/all 
   - Xóa đánh giá : http://localhost:5000/rating/delete/id_danhgia

2. API dành cho khách hàng
   User :
   - Đăng ký tài khoản khách hàng : post --> http://localhost:5000/customer/register 
   - Đăng nhập tài khoản khách hàng : post --> http://localhost:5000/customer/login 
   - Refresh token khách hàng : get --> http://localhost:5000/customer/refreshToken 
   - Đăng xuất tài khoản khách hàng : get --> http://localhost:5000/customer/logout 
   - Xem thông tin tài khoản khách hàng đang đăng nhập : get --> http://localhost:5000/customer/profile 
   - Chỉnh sửa thông tin tài khoản khách hàng : patch --> http://localhost:5000/customer/updateProfile 
   - Đổi mật khẩu tài khoản khách hàng : patch --> http://localhost:5000/customer/changePassword

   Cart : 
   - Thêm sản phẩm vào giỏ hàng : post --> http://localhost:5000/cart/addCartItem/id_sp 
   - Xem giỏ hàng của tài khoản khách hàng đang đăng nhập : get --> http://localhost:5000/cart
   - Xem chi tiết giỏ hàng : get --> http://localhost:5000/cart/item/id_cart 
   - Chỉnh sửa số lượng sản phẩm trong giỏ hàng : patch --> http://localhost:5000/cart/updateQuantityProduct/id_cart 
   - Xóa chi tiết giỏ hàng : delete --> http://localhost:5000/cart/delete/id_cart 
   - Xóa toàn bộ chi tiết giỏ hàng : delete --> http://localhost:5000/cart/deleteAll

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

   Bill Detail :
   - Xem từng chi tiết hóa đơn : get --> http://localhost:5000/billDetail/id_cthd

   Rating : 
   - Đánh giá hóa đơn : post --> http://localhost:5000/rating/add/id_hd 
   - Lịch sử đánh giá của tài khoản đang đăng nhập : get --> http://localhost:5000/rating/history 
   - Chỉnh sửa đánh giá : patch --> http://localhost:5000/rating/update/id_danhgia

3. API không có phân quyền
   Category : 
   - Xem toàn bộ danh mục : get --> http://localhost:5000/category/ 
   - Lấy ra sản phẩm phân loại theo id danh mục: get --> http://localhost:5000/category/id_dm

   Product:
   - Xem toàn bộ sản phẩm : get --> http://localhost:5000/product -
   - Xem chi tiết sản phẩm : get --> http://localhost:5000/product/id_sp

   App info: 
   - Xem toàn bộ thông tin ứng dụng : get --> http://localhost:5000/appInfo/ 
   - Xem chi tiết thông tin ứng dụng : get --> http://localhost:5000/appInfo/id

   Payment : - xem toàn bộ hình thức thanh toán : get --> http://localhost:5000/payment/
   - Xem chi tiết hình thức thanh toán : get --> http://localhost:5000/payment/id
