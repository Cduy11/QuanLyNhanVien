var DSNV = [];
var dataJson = localStorage.getItem("DSNV_JSON");
if (dataJson != null) {
  var dataArray = JSON.parse(dataJson);
  DSNV = dataArray.map(function (item) {
    var nhanVien = new NhanVien(
      item.taiKhoang,
      item.ten,
      item.email,
      item.matKhau,
      item.ngayLam,
      item.luongCB,
      item.chucVu,
      item.gioLam
    );
    return nhanVien;
  });
  renderDSNV(DSNV);
}

// thêm người dùng
function themNguoiDung() {
  var nhanVien = layThongTin();

  var isValid =
    // kiểm tra tài khoảng
    (kiemTraRong(nhanVien.taiKhoang, "tbTKNV") &&
      kiemTraKySo(nhanVien.taiKhoang, "tbTKNV")) &
    // kiểm tra tên
    (kiemTraRong(nhanVien.ten, "tbTen") && kiemTraTen(nhanVien.ten, "tbTen")) &
    // kiểm tra email
    (kiemTraRong(nhanVien.email, "tbEmail") &&
      kiemTraEmail(nhanVien.email, "tbEmail")) &
    // kiểm tra mật khẩu
    (kiemTraRong(nhanVien.matKhau, "tbMatKhau") &&
      kiemTraMatKhau(nhanVien.matKhau, "tbMatKhau")) &
    // kiểm tra ngày
    (kiemTraRong(nhanVien.ngayLam, "tbNgay") &&
      kiemTraNgay(nhanVien.ngayLam, "tbNgay")) &
    // kiểm tra lương
    (kiemTraRong(nhanVien.luongCB, "tbLuongCB") &&
      kiemTraLuong(nhanVien.luongCB, "tbLuongCB")) &
    // kiểm tra chức vụ
    (kiemTraRong(nhanVien.chucVu, "tbChucVu") &&
      kiemTraChucVu(nhanVien.chucVu, "tbChucVu")) &
    // kiểm tra giờ làm
    (kiemTraRong(nhanVien.gioLam, "tbGiolam") &&
      kiemTraGio(nhanVien.gioLam, "tbGiolam"));
  if (isValid) {
    DSNV.push(nhanVien);
    var dataJson = JSON.stringify(DSNV);
    localStorage.setItem("DSNV_JSON", dataJson);
    renderDSNV(DSNV);
    resetFrom();
  }
}

// Xóa người dùng
function xoaNguoiDung(id) {
  var index = DSNV.findIndex(function (item) {
    return item.taiKhoang == id;
  });
  DSNV.splice(index, 1);
  var dataJson = JSON.stringify(DSNV);
  localStorage.setItem("DSNV_JSON", dataJson);
  renderDSNV(DSNV);
}

// sửa người dùng
function suaNguoiDung(id) {
  var index = DSNV.findIndex(function (item) {
    return item.taiKhoang == id;
  });
  var nhanVien = DSNV[index];
  hienThiThongTin(nhanVien);
  document.getElementById("tknv").disabled = true;
  $("#myModal").modal("show");
}

// hàm cập nhật
function capNhatNhanVien() {
  var nhanVien = layThongTin();
  var isValid =
    // kiểm tra tài khoảng
    (kiemTraRong(nhanVien.taiKhoang, "tbTKNV") &&
      kiemTraKySo(nhanVien.taiKhoang, "tbTKNV")) &
    // kiểm tra tên
    (kiemTraRong(nhanVien.ten, "tbTen") && kiemTraTen(nhanVien.ten, "tbTen")) &
    // kiểm tra email
    (kiemTraRong(nhanVien.email, "tbEmail") &&
      kiemTraEmail(nhanVien.email, "tbEmail")) &
    // kiểm tra mật khẩu
    (kiemTraRong(nhanVien.matKhau, "tbMatKhau") &&
      kiemTraMatKhau(nhanVien.matKhau, "tbMatKhau")) &
    // kiểm tra ngày
    (kiemTraRong(nhanVien.ngayLam, "tbNgay") &&
      kiemTraNgay(nhanVien.ngayLam, "tbNgay")) &
    // kiểm tra lương
    (kiemTraRong(nhanVien.luongCB, "tbLuongCB") &&
      kiemTraLuong(nhanVien.luongCB, "tbLuongCB")) &
    // kiểm tra chức vụ
    (kiemTraRong(nhanVien.chucVu, "tbChucVu") &&
      kiemTraChucVu(nhanVien.chucVu, "tbChucVu")) &
    // kiểm tra giờ làm
    (kiemTraRong(nhanVien.gioLam, "tbGiolam") &&
      kiemTraGio(nhanVien.gioLam, "tbGiolam"));

  if (isValid) {
    var index = DSNV.findIndex(function (item) {
      return item.taiKhoang === nhanVien.taiKhoang;
    });
    DSNV[index] = nhanVien;
    renderDSNV(DSNV);
    var dataJson = JSON.stringify(DSNV);
    localStorage.setItem("DSNV_JSON", dataJson);
    resetFrom();
  }
}

// hàm filter
function timKiem() {
  var search = document.getElementById("searchName").value.trim().toLowerCase();
  var index = DSNV.filter(function (item) {
    return item.xepLoai().toLowerCase().includes(search);
  });
  renderDSNV(index);
}

// hàm reset
function resetFrom() {
  document.getElementById("tknv").disabled = false;
  document.getElementById("myForm").reset();
}
