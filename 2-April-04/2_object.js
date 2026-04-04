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

// Methode Object

let mobil = {
    name : "Civic",
    cc : 5000,

    //add method
    StartEngine : function() {
        console.log("Mesin menyala");
    }
}

console.log(mobil);
mobil.StartEngine();

let caca = {
    Nama : "Caca",
    Berat : "45 Kg",
    Tinggi : "155 Cm",
    Hobby : ["Nonton", "Makan"],

        //add method
        SebutkanHobby : function() {
            console.log("Hobby caca :\n" + "1."+ this.Hobby[0] + "\n2." + this.Hobby[1]);
        }
}

console.log(caca);
caca.SebutkanHobby();