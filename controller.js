function layThongTin() {
    var taiKhoang = document.getElementById("tknv").value;
    var ten = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var matKhau = document.getElementById("password").value;
    var ngayLam = document.getElementById("datepicker").value;
    var luongCB = document.getElementById("luongCB").value;
    var chucVu = document.getElementById("chucvu").value;
    var gioLam = document.getElementById("gioLam").value;
    var nhanVien = new NhanVien(
      taiKhoang,
      ten,
      email,
      matKhau,
      ngayLam,
      luongCB,
      chucVu,
      gioLam
    );
    return nhanVien;
  }
  
  function hienThiThongTin(data) {
    document.getElementById("tknv").value = data.taiKhoang;
    document.getElementById("name").value = data.ten;
    document.getElementById("email").value = data.email;
    document.getElementById("password").value = data.matKhau;
    document.getElementById("datepicker").value = data.ngayLam;
    document.getElementById("luongCB").value = data.luongCB;
    document.getElementById("chucvu").value = data.chucVu;
    document.getElementById("gioLam").value = data.gioLam;
  }
  
  function renderDSNV(dsnv) {
    var contenHTML = "";
    for (var i = 0; i < dsnv.length; i++) {
      var nhanVien = dsnv[i];
      var trString = ` <tr> 
              <td>${nhanVien.taiKhoang}</td>
              <td>${nhanVien.ten}</td>
              <td>${nhanVien.email}</td>
              <td>${nhanVien.ngayLam}</td>
              <td>${nhanVien.chucVu}</td>
              <td>${nhanVien.tinhLuong()}</td>
              <td>${nhanVien.xepLoai()}</td>
              <td onclick=xoaNguoiDung("${
                nhanVien.taiKhoang
              }") class="btn btn-danger" >Xóa</td>
              <td onclick=suaNguoiDung("${
                nhanVien.taiKhoang
              }") class="btn btn-info">Sửa</td>
          </tr>`;
      contenHTML += trString;
    }
    document.getElementById("tableDanhSach").innerHTML = contenHTML;
  }
  