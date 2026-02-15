//membuat object
//cara ke 1 fusction declaration
// function hallo(){
//     console.log("hallo");
// }
// hallo();


//cara ke 2 object literal
// var object= {};
// object.halo = function(){
//     console.log("hallo");
// } 
// object.halo();



// cara ke 3 constructor function
// function hallo (){
//     console.log("hallo");
// }
// new hallo();



// konsep this
// var a = 10;
// console.log(this.a);



// function hallo(){
//     console.log(this);
//     console.log("hallo");
// }
// this.hallo();



// var object= {a : 10, nama : 'Rio'};
// object.halo = function(){
//     console.log(this);
//     console.log("hallo");
// } 
// object.halo();





function hallo (){
    console.log(this);
    console.log("hallo");
}
var obj1 =new hallo();
var obj2 = new hallo();