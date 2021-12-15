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