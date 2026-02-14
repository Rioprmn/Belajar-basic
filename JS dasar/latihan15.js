//object literal
var mahasiswa = {
    mahasiswa : "Rizki Adam Kurniawan",
    umur : 20,
    ips : [3.00, 3.10, 3.20, 3.30],
    alamat : {
        jalan : "Jl. Mawar",
        kota : "Bandung",
        provinsi : "Jawa Barat"
    }
};


//function declaration
function namaMahasiswa(nama, umur) {
    var mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.umur = umur;
    return mahasiswa; 
}

var mahasiswa1 = namaMahasiswa("rio", 20);


//constructor function
function Mahasiswa(nama, umur) {
    this.nama = nama;
    this.umur = umur;
}

var mahasiswa2 = new Mahasiswa("Rizki", 20);  