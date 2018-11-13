Promise.all([
    import('./es6'),
    import('./es6'),
]).then(function(modules){
    var module1 = console.log(modules[0], modules[1]);
});

// import('./es6')
//     .then(function (liquidos) {
//         console.log(liquidos.default);
//     });
//
// import('./modulo')
//     .then(function (modulo) {
//         console.log(liquidos.default);
//     });
//

//import algumacoisa from 'module';

//async e await