let buah = ["Durian", 7500, true];
/**
 * buat functin
 * Menjadi object
 * {
 * Jenis : "Durian",
 * Harga : 7500,
 * Enak  : true
 * }
 */

function buahObject(array) {
    let result = {};
    result.Jenis = array[0];
    result.Harga = array[1];
    result.Enak = array[2];
    return result;
}

console.log(buahObject(buah));