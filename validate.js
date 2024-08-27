function kiemTraRong(value, idErr) {
    if (value.length == 0 || value === 0) {
      document.getElementById(idErr).innerHTML = "Không được bỏ trống";
      return false;
    }
    document.getElementById(idErr).innerHTML = "";
    return true;
  }
  
  function kiemTraKySo(value, idErr) {
    var regexKySo = /^\d{4,6}$/;
  
    var isCheckKySo = regexKySo.test(value);
    if (isCheckKySo) {
      document.getElementById(idErr).innerHTML = "";
      return true;
    } else {
      document.getElementById(idErr).innerHTML = "Tài khoản tối đa 4 - 6 ký số";
      return false;
    }
  }
  
  function kiemTraEmail(value, idErr) {
    var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var isCheckEmail = regexEmail.test(value);
    if (isCheckEmail) {
      document.getElementById(idErr).innerHTML = "";
      return true;
    } else {
      document.getElementById(idErr).innerHTML = "Email chưa đúng định dạng!";
      return false;
    }
  }
  
  function kiemTraTen(value, idErr) {
    var regexTen = /^[A-ZÀ-Ỹ][a-zà-ỹ]*(\s[A-ZÀ-Ỹ][a-zà-ỹ]*)*$/;
  
    var isCheckTen = regexTen.test(value);
    if (isCheckTen) {
      document.getElementById(idErr).innerHTML = "";
      return true;
    } else {
      document.getElementById(idErr).innerHTML = "Tên chưa đúng định dạng!";
      return false;
    }
  }
  
  function kiemTraMatKhau(value, idErr) {
    var regexMatKhau = /^(?=.*\d)(?=.*[A-Z])(?=.*[\W_]).{6,10}$/;
    var isCheckMatKhau = regexMatKhau.test(value);
    if (isCheckMatKhau) {
      document.getElementById(idErr).innerHTML = "";
      return true;
    } else {
      document.getElementById(idErr).innerHTML =
        "mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống";
      return false;
    }
  }
  
  function kiemTraNgay(value, idErr) {
    var regexNgay = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    var isCheckNgay = regexNgay.test(value);
    if (isCheckNgay) {
      document.getElementById(idErr).innerHTML = "";
      return true;
    } else {
      document.getElementById(idErr).innerHTML = "định dạng mm/dd/yyyy";
      return false;
    }
  }
  
  function kiemTraLuong(value, idErr) {
    var regexLuong =
      /^((1[0-9]{6}|20[0]{6}|[1-9][0-9]{6})|([1-9] [0-9]{3} [0-9]{3})|(20 000 000))$/;
    var isCheckLuong = regexLuong.test(value);
    if (isCheckLuong) {
      document.getElementById(idErr).innerHTML = "";
      return true;
    } else {
      document.getElementById(idErr).innerHTML =
        "Nhập lương từ  1 000 000 - 20 000 000";
      return false;
    }
  }
  
  function kiemTraChucVu(value, idErr) {
    var regexChucVu =/^(Sếp|Trưởng phòng|Nhân viên)$/;
    var isCheckChucVu = regexChucVu.test(value.trim());
    if (isCheckChucVu) {
      document.getElementById(idErr).innerHTML = "";
      return true;
    } else {
      document.getElementById(idErr).innerHTML =
        "Chức vụ phải là Sếp, Trưởng Phòng, hoặc Nhân Viên";
      return false;
    }
  }
  
  
  function kiemTraGio(value, idErr) {
    var regexGio = /^(8[0-9]|9[0-9]|1[0-9]{2}|200)$/;
    var isCheckGio = regexGio.test(value);
    if (isCheckGio) {
      document.getElementById(idErr).innerHTML = "";
      return true;
    } else {
      document.getElementById(idErr).innerHTML =
        "Số giờ làm phải từ 80 đến 200 giờ";
      return false;
    }
  }
  