//1.object literal
// let mahasiswa1 = {
//     name : 'Rio',
//     energy : 10,
//     makan : function (porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Halo ${this.name}, selamat makan!`);
//     }
// }

// let mahasiswa2 = {
//     name : 'edy',
//     energy : 15,
//     makan : function (porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Halo ${this.name}, selamat makan!`);
//     }
// }





//2.fuction declaration
// const methodMahasiswa = {
//     makan : function (porsi) {
//         this.energy += porsi;
//         console.log(`Halo ${this.name}, selamat makan!`);
//     },
//     main : function (jam) {
//         this.energy -= jam;
//         console.log(`Halo ${this.name}, selamat bermain!`);
//     }
// };

// function mahasiswa (name, energy){
//     let mahasiswa = {};
//     mahasiswa.name = name;
//     mahasiswa.energy = energy;
//     mahasiswa.makan = methodMahasiswa.makan;
//     mahasiswa.main = methodMahasiswa.main;

//     return mahasiswa;
// }
// let rio= mahasiswa('Rio Permana', 10);
// let dody = mahasiswa('Dody', 15);




//3.constructor function
// function Mahasiswa(name, energy){
//     this.name = name;
//     this.energy = energy;
//     this.makan = function (porsi) {
//         this.energy += porsi;
//         console.log(`Halo ${this.name}, selamat makan!`);
//     }
//     this.main = function (jam) {
//         this.energy -= jam;
//         console.log(`Halo ${this.name}, selamat bermain!`);
//     }
// }
// let rio = new Mahasiswa('Rio Permana', 10);










//4.object.create()

const methodMahasiswa = {
    makan : function (porsi) {
        this.energy += porsi;
        console.log(`Halo ${this.name}, selamat makan!`);
    },
    main : function (jam) {
        this.energy -= jam;
        console.log(`Halo ${this.name}, selamat bermain!`);
    },
    tidur : function (jam) {
        this.energy += jam *2;
        console.log(`Halo ${this.name}, selamat tidur!`);
    }
};

function mahasiswa (name, energy){
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.name = name;
    mahasiswa.energy = energy;

    return mahasiswa;
}
let rio= mahasiswa('Rio Permana', 10);
let dody = mahasiswa('Dody', 15);