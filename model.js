function NhanVien(
  taiKhoang,
  _ten,
  _email,
  _matKhau,
  _ngayLam,
  _luongCB,
  _chucVu,
  _gioLam
) {
  (this.taiKhoang = taiKhoang),
    (this.ten = _ten),
    (this.email = _email),
    (this.matKhau = _matKhau),
    (this.ngayLam = _ngayLam),
    (this.luongCB = _luongCB),
    (this.chucVu = _chucVu),
    (this.gioLam = _gioLam);

  this.tinhLuong = function () {
    var tongLuong = 0;
    if (this.chucVu === "Sếp") {
      tongLuong = this.luongCB * 3;
    } else if (this.chucVu === "Trưởng phòng") {
      tongLuong = this.luongCB * 2;
    } else if (this.chucVu === "Nhân viên") {
      tongLuong = this.luongCB * 1;
    }
    return tongLuong;
  };

  this.xepLoai = function () {
    if (this.gioLam >= 192) {
      return "Nhân viên xuất sắc";
    } else if (this.gioLam >= 176) {
      return "Nhân viên giỏi";
    } else if (this.gioLam >= 160) {
      return "Nhân viên khá";
    } else {
      return "Nhân viên trung bình";
    }
  };
}
