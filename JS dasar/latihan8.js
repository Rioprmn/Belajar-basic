for(var i = 0;  i < 5; i++){
    console.log('*');
}

var s = '';


for (var i = 0; i < 10; i++){
    for (var j = 0; j < 5; j++){
        s += '*';
    }
    s += '\n';
}
 s += '\n';


for (var i = 0; i < 10; i++){
    for (var j = 0; j <= i; j++){
        s += '*';
    }
    s += '\n';
}
 s += '\n';


for (var i = 10; i > 0; i--){
    for (var j = 0; j < i; j++){
        s += '*';
    }
    s += '\n';
}
 s += '\n';

for (var i = 10; i > 0; i--){
    for (var j = 0; j < 10 - i; j++){
        s += ' ';
    }
    for (var k = 0; k < i; k++){
        s += '*';

    }
    s += '\n';
}
s += '\n';


for (var i = 0; i < 10; i++){
    for (var j = 0; j < 10 - i; j++){
        s += ' ';
    }
    for (var k = 0; k < i + 1; k++){
        s += '*';

    }
    s += '\n';
}
s += '\n';



for (var i = 0; i < 10; i++){
    for (var j = 0; j < 10 - i; j++){
        s += ' ';
    }
    for (var k = 0; k < i + 1; k++){
        s += '*';

    }
    for (var l = 0; l < i ; l++){
        s += '*';
    }
    s += '\n';
}
s += '\n';



for (var i = 10; i > 0; i--){
    for (var j = 0; j < 10 - i; j++){
        s += ' ';
    }
    for (var k = 0; k > i + 1; k++){
        s += '*';

    }
    for (var l = i; l > 0 ; l--){
        s += '*';
    }
    s += '\n';
}


console.log(s);