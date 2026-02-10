// Membuat array
// var binatang = [];
// var binatang = ["kucing", "anjing", "kelinci", "hamster"];
// console.log (binatang[2]);

// var angka = [1,2,3,[4,5]];

// console.log(angka[3][1]);

// Menambah isi array
// var arr = [];
// arr[0] = "satu";
// arr[1] = "dua";
// arr[2] = "tiga";

// console.log(arr);



// Menghapus isi array
// var arr = ["satu", "dua", "tiga"];
// arr [1] = undefined;

// console.log(arr);


// Menampilkan isi array dengan perulangan
// var arr = ["Rio", "Budi", "Ani", "Siti"];
//  for ( var i =0 ; i < arr.length; i++){
//     console.log ('mahasiswa ke '+ (i+1) + ' adalah ' + arr[i]);
//  }


// Methods pada array
// var arr = ["Rio", "Budi", "Ani", "Siti", "Lina"];
// console.log(arr.join(' - '));

// arr.push ("Agus", "Lina");
// arr.pop ();
// console.log(arr.join(' - '));


// arr.unshift("Agus");
// arr.shift();


// arr.splice (1,2);


// var arr2= arr.slice (1,3); 

// console.log(arr.join(' - '));


// forEach
// var angka = [1,2,3,4,5,6,7,8,9,10];
// var nama = ["Rio", "Budi", "Ani", "Siti"];

// angka.forEach(function(e){
//     console.log(e);
// });
// var cetak = function(e){
//     console.log(e);
// }
// angka.forEach(cetak);

// nama.forEach(function(e, i){
//     console.log('Mahasiswa ke ' + (i+1) + ' adalah ' + e);
// });


// map
// var angka = [1,2,5,,3,6,8,4];
// var angka2 = angka.map(function(e){
//    return e * 2;
// });

// console.log(angka2.join(' - '));


// sorting
// var angka = [1,2,5,7,3,19,11,26,8,4];
// console.log(angka.join(' - '));
// angka.sort(function(a,b){
//     return a - b;
// });
// console.log(angka.join(' - '));




// filter & find
// var angka = [1,2,5,7,3,19,11,26,8,4];
// var angka2 = angka.filter(function(e){
//    return e > 5;
// });

// console.log(angka2.join(' - '));



var angka = [1,2,5,7,3,19,11,26,8,4];
var angka2 = angka.find(function(e){
   return e > 5;
    });
    console.log(angka2);