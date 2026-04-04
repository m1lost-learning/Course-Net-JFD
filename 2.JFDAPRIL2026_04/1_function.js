function hello() {
  console.log("Hello, Selamat Pagi!");
}

hello();


/**
buat 2 fungsi yg
kalimat jd larik(array) 
element dlm  "Hello selamat pagi" dan memberi hasil 3
*/

function TextToArray(text) {
    let array = text.split(" ");
    return array;
}

let contohText = TextToArray("Hello selamat pagi");
console.log(contohText);
console.log(contohText.length);


function jumlahKata(text) {
    let array = TextToArray(text);
    return array.length;
}
let jumlah = jumlahKata("Hello selamat pagi");
console.log(jumlah);

