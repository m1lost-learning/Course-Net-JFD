var score = [100,50,75,80,90];
console.log(score[0]);
console.log(score[1]);
console.log(score[2]);
console.log(score[3]);
console.log(score[4]);

console.log(score.length);
score.push("mouse");
console.log(score);
score.pop();
console.log(score);

//array multidimensi

var score = [
    [10,20,30],
    [15,25,5],
    [1,3,5]
];  
console.log(score[0][0]);
console.log(score[0][1]);

var murid = [
    [1,"Vincent", 3.5],
    [2,"Udin", 3.0],
    [3,"Siti", 2.1]
];


for (var i = 0; i < murid.length; i++) {

    var statuskelulusan = (murid[i][2] >= 3.0) ? "Lulus" : "Gagal";

    console.log((murid[i][0]) + ". " + murid[i][1] + ", IPK = " + murid[i][2] + ", " + statuskelulusan);

    
    onsole.log(`${murid[i][0]}. ${murid[i][1]}, IPK = ${murid[i][2]}, ${statuskelulusan} `);
}