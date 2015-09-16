$(document).ready(function(){
    this_in_js();
});
function this_in_js(show_this){
    if (show_this == undefined){
        show_this = this;
    }
    console.log('this is this in function\n')
    console.log(show_this)
}
