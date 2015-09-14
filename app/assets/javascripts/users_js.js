$(document).ready(function(){
    this_in_js();

    myJs = {};
    myJs.name = 'this is a object';
    myJs.func = this_in_js;
    myJs.func();
});
function this_in_js(){
    console.log('this is this in function\n')
    console.log(this)
}
