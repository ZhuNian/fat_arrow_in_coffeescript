$(document).ready(function(){
    myJs = {};
    myJs.name = 'this is a object';
    myJs.func = this_in_js;
    myJs.func();
});
function this_in_js(show_this){
    if (show_this == undefined){
        show_this = this;
    }
    console.log('this is this in function\n')
    console.log(show_this)
}
