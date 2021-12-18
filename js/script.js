// const RS = 'rs'; console.log('css', RS, 'js');



// const name = "John";

// let greeting = 'Hello ${name}';


// let greeting = 'Hello ', name;



// let greeting = 'Hello name';
// 

// let greeting = 'Hello ' + name;


// let greeting = `Hello ${name}`;



// console.log(greeting);

// let i = 10;

// while (i < 10) {
//     console.log('jj');
// }



// const showRS = (year, quarter) => {return year, quarter}
// console.log('RSSchool ' + showRS('2021', 'Q3'));

// console.log(1/0);

// let name = 'Vasia'; name[3] = 'y'; console.log(name);

// let first = 1; let second = 2;

// let first = 1; first = 2;

// let first = 1; let first = 2;

// const first = 1; first = 2;

// const first = 1, second = 2;

// console.log(typeof('1' + 2));

// let a; console.log(a)

// console.log(8 / 2 + 5 - -3 / 2)



// const a = 1;
// const b = 50;


// const max = (a, b) => (a == b ? a : b);

// const max = (a, b) => (a > b ? a : b);

// const max = (a, b) => (a + b > a - b ? a : b);

// const max = (a, b) => (a + b < a - b ? a : b);


// console.log(max);


// console.log(typeof('Hey'));

// console.log(typeof(''));

// console.log(typeof('undefined'));

// console.log(typeof("Hello"));

// console.log(typeof(' '));

// console.log(typeof(" "));

// console.log(typeof(""));

// console.log(typeof('Vasia'.toUpperCase().length.toString()));

/* let i = 0; let c = 0; const str = 'Rolling Scopes School'; while (i < str.length) { if (str[i] === 'o') { c++; } i++; } console.log(c); */

(function() {
    console.log('start');
    for (var i=0; i < 100; i++) {
        ((i) => setTimeout(() => console.log(i), 2000))(i);
    }
    console.log('end');
})();
// start end 0...99

(function() {
    var f = [];
    for (var i = 0; i < 100; i++) {
        f[i] = () => console.log(i); 
    }
    f[9]();
    f[8]();
})();
// 100 100
