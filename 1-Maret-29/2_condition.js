var angka = 1;
if (angka == 1) {
    console.log("Angka 1");
}else{
    console.log("Angka bukan 1");
}

var umur = 17;
if (umur >= 17) {
    console.log("Bisa bikin KTP");
}else{
    console.log("Belum bisa bikin KTP");
}   


var minuman = "Kopi";
switch (minuman) {
    case "Kopi":
        console.log("Pilih Kopi");
        break;
    case "Teh":
        console.log("Pilih Teh");
        break;
    default:
        console.log("Kondisi tidak Memilih");
        break;
}

var umur = 17;
var tinggi = 150;
if (umur >= 17) {
    if (tinggi >= 150) {
        console.log("Boleh Masuk");
    }else{
        console.log("Tidak boleh masuk");
    }
}else{
    console.log("Tidak boleh masuk");
}