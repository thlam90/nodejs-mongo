
const mongoose = require('mongoose');
const { Schema } = mongoose;

const banks = [
  "Ngân hàng Ngoại thương Việt Nam (Vietcombank)",
  "Ngân hàng Công thương Việt Nam (VietinBank)",
  "Ngân hàng Đầu tư và Phát triển Việt Nam (BIDV)",
  "Ngân hàng Quân đội (MBBank)",
  "Ngân hàng Thương mại Cổ phần Á Châu (ACB)",
  "Ngân hàng Sài Gòn Thương Tín (Sacombank)",
  "Ngân hàng Tiên Phong (TPBank)",
  "Ngân hàng Kỹ thương Việt Nam (Techcombank)",
  "Ngân hàng TMCP Xuất Nhập khẩu (Eximbank)",
  "Ngân hàng TMCP Đông Á (DongA Bank)",
  "Ngân hàng TMCP Việt Nam Thịnh Vượng (VPBank)",
  "Ngân hàng TMCP Bắc Á (BacABank)",
  "Ngân hàng TMCP Đông Nam Á (SeABank)",
  "Ngân hàng TMCP Kiên Long (KienLongBank)",
  "Ngân hàng TMCP An Bình (ABBank)",
  "Ngân hàng TMCP Việt Nam Thương Tín (Vietbank)",
  "Ngân hàng TMCP Sài Gòn Công Thương (Saigonbank)",
  "Ngân hàng TMCP Bưu điện Liên Việt (LienVietPostBank)",
  "Ngân hàng TMCP Ngoại thương Việt Nam (Vietnam Export Import Bank - Eximbank)",
  "Ngân hàng TMCP Phát triển TP.HCM (HDBank)",
  "Ngân hàng TMCP Đại Chúng Việt Nam (PVcomBank)",
  "Ngân hàng TMCP Quốc Dân (NCB)",
  "Ngân hàng TMCP Việt Nam Thái Bình Dương (Vietnam Asia Commercial Joint Stock Bank - VAB)",
  "Ngân hàng TMCP Đại Tín (Dai Tin Bank)",
  "Ngân hàng TMCP Xăng dầu Petrolimex (PGBank)",
  "Ngân hàng TMCP Bản Việt (VietCapitalBank)",
  "Ngân hàng TMCP Phương Đông (OCB)",
  "Ngân hàng TMCP Nam Á (Nam A Bank)",
  "Ngân hàng TMCP Sài Gòn-Hà Nội (SHB)",
  "Ngân hàng TMCP Việt Nam Thái Sơn (Vietnam ThaiSon Bank)",
  "Ngân hàng TMCP Hàng Hải (Maritime Bank)",
  "Ngân hàng TMCP Công Thương Việt Nam (Vietnam Maritime Commercial Joint Stock Bank - Maritime Bank)",
  "Ngân hàng TMCP Phương Tây (Western Bank - WB)",
  "Ngân hàng TMCP Đại Việt (Dai Viet Bank)",
  "Ngân hàng TMCP Sài Gòn Công nghiệp (Saigon Industry Bank - SGBank)",
  "Ngân hàng TMCP Đông Dương (Indovina Bank)",
  "Ngân hàng TMCP Việt Nam Thái Bình Dương (Vietnam Asia Commercial Bank - VACB)",
  "Ngân hàng Thương mại Cổ phần Bưu điện Liên Việt (LienVietPostBank)",
  "Ngân hàng TMCP Hàng Hải Việt Nam (Vietnam Maritime Commercial Joint Stock Bank - Maritime Bank)",
  "Ngân hàng TMCP Đại Dương (OceanBank)",
  "Ngân hàng TMCP Bắc Á (BacABank)",
  "Ngân hàng TMCP Đông Nam Á (SeABank)",
  "Ngân hàng TMCP Kiên Long (KienLongBank)",
  "Ngân hàng TMCP An Bình (ABBank)",
  "Ngân hàng TMCP Việt Nam Thương Tín (Vietbank)",
  "Ngân hàng TMCP Sài Gòn Công Thương (Saigonbank)",
  "Ngân hàng TMCP Công thương (Vietnam Export Import Bank - Eximbank)",
  "VPBank Finance Company Limited (FE Credit)",
  "Ngân hàng Thương mại Cổ phần Quốc tế (VIB)",
  "Ngân hàng Công thương Á Âu (CIMB)",
  "Home Credit Group(Home)",
  "Ngân hàng TMCP Bảo Việt (BaoViet Bank)",
  "Ngân hàng TNHH MTV Shinhan Việt Nam (Shinhan Bank Vietnam)",
  "Ngân hàng TNHH MTV HSBC Việt Nam (HSBC Vietnam)",
  "Ngân hàng TNHH MTV Standard Chartered (Standard Chartered Vietnam)",
  "Ngân hàng TMCP Sài Gòn (SCB)",
  "Ngân hàng TNHH MTV Woori Việt Nam (Woori Bank Vietnam)",
  "Ngân hàng TNHH MTV Public Bank Việt Nam (Public Bank Vietnam)",
  "Ngân hàng TNHH MTV ANZ Việt Nam (ANZ Bank Vietnam)",
  "Ngân hàng TNHH MTV Citibank Việt Nam (Citibank Vietnam)",
  "Ngân hàng TNHH MTV Deutsche Bank Việt Nam (Deutsche Bank Vietnam)",
  "Ngân hàng TNHH MTV UOB Việt Nam (UOB Vietnam)",
  "Ngân hàng TNHH MTV Maybank Việt Nam (Maybank Vietnam)",
  "Ngân hàng TMCP Xây dựng Việt Nam (CBBank)",
  "Ngân hàng TNHH MTV J.P. Morgan Chase Bank, N.A. - Chi nhánh TP.HCM (J.P. Morgan Vietnam)",
  "Ngân hàng TNHH MTV Bangkok Bank Public Company Limited - Chi nhánh TP.HCM (Bangkok Bank Vietnam)",
  "Ngân hàng TNHH MTV Bank of China Limited - Chi nhánh TP.HCM (Bank of China Vietnam)",
  "Ngân hàng TNHH MTV Industrial and Commercial Bank of China Limited - Chi nhánh Hà Nội (ICBC Vietnam)",
  "Ngân hàng TNHH MTV Mizuho Bank, Ltd. - Chi nhánh TP.HCM (Mizuho Bank Vietnam)",
  "Ngân hàng TNHH MTV Sumitomo Mitsui Banking Corporation - Chi nhánh TP.HCM (SMBC Vietnam)",
  "Ngân hàng TNHH MTV Bank of Tokyo-Mitsubishi UFJ, Ltd. - Chi nhánh TP.HCM (MUFG Bank Vietnam)",
  "Ngân hàng TNHH MTV Crédit Agricole Corporate and Investment Bank - Chi nhánh TP.HCM (Crédit Agricole CIB Vietnam)",
  "Ngân hàng TNHH MTV BNP Paribas - Chi nhánh TP.HCM (BNP Paribas Vietnam)",
];
const creditCardSchema = new Schema({
  cardNumber: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /\d{16}/.test(v);
      },
      message: props => `${props.value} không phải là số thẻ hợp lệ!`
    },
    unique: false
  },
  cardHolderName: {
    type: String,
    required: true,
    uppercase: true // Chuyển tên thành chữ hoa
  },
  amount: { // thêm trường mới
    type: Number,
    required: true
  },
  bankName: {
    type: String,
    required: true,
    enum: banks,
  },
  customerName: {
    type: String,
  },
  dueDate: {
    type: Date,
    required: true
  },
});



const CreditCard = mongoose.model('CreditCard', creditCardSchema);
module.exports = CreditCard;
