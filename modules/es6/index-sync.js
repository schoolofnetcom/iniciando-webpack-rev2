import liquidos from './es6';
import obj from './teste';
import obj1 from '../teste';

window.$ = window.jQuery = require('jquery');
//window.$ = window.jQuery = require('node_modules/jquery/dist/jquery.min');
//window.$ = window.jQuery = require('./amd');
//import obj1 from '../../../../teste';
// import module1 from './module1';
// import module2 from './module2';
// import module3 from './module3';

console.log(liquidos);
console.log('teste watch');
console.log(obj);
console.log(obj1);
console.log($);
$.each(liquidos, (index, value) => {
    console.log(index, value);
})
// function funcao(){
//     var variavel = require('module')
//
// }