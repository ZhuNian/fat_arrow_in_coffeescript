$(document).ready(function(){
    $('#click_button').click(function(){
        console.log('this is this in click function\n');
        console.log(this);
    });
});
function this_in_js(show_this){
    if (show_this == undefined){
        show_this = this;
    }
    console.log('this is this in function\n')
    console.log(show_this)
}
