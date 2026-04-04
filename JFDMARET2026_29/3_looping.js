//perulangan sudah di ketahun berapa jumlah perulangan yang di lakukan
for (var i = 1; i <= 10; i++) {
        console.log(i);
}

//perulangan tidak di ketahui berapa jumlah perulangan yang di lakukan
var x= 1;
while (x <= 10) {
        console.log(x);
        x++;
}

// perulangan bersararang
// dengan data sebagai berikut :
// 1
// 12
// 123
// 1234
// 12345
// 123456
// 1234567

var top = 5;
for (var i = 1; i <= top; i++) {
    var baris = "";
    for (var j = 1; j <= i; j++) {
        baris += j;
    }
    console.log(baris);
}