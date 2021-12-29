/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
Pada javascript terdapat dua jenis variable scope yaitu variable local dan variable global 
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
Untuk variabel scope yang pertama yaitu local scope variabel merupakan suatu variabel yang berada di dalam fungsi
sehingga variabel ini hanya dapat berfungsi di dalam function tempat ia di deklarasikan oleh karena itu variabel local
tidak dapat dijangkau di dalam function lainnya. Dan untuk yang kedua yaitu global scope variable variabel ini dideklarasikan
di luar function sehingga variabel ini dapat di akses di seluruh function.
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript
1. Local scope
function halloScope(){
  var ini_local_scope_variable = "halo aku local scope variable";
}
2. global scope
var ini_global_scope_variable;
function halloScope(){
  ini_global_scope_variable = "halo aku global scope variable"
}
/// WRITE YOUR ANALYSIS HERE

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
///
- Ketika console log dijalankan maka akan muncul output berupa "Mariah"
- Penyebab dari hasil console bukan dari variable name adalah karena pada saat console log dirun kita mempassing string "Mariah Carey" yang
  yang kemudian diterima oleh parameter name (bukan variabel) pada fungsi printFirstName oleh karena itu yang diproses oleh function ini
  adalah Mariah Carey bukan John Watson.

  
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));