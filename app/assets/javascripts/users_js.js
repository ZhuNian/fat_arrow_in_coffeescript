$(document).ready(function(){
});
function click_button(){
    $('#click_button').click(function(){
        this_in_js();
        _this = this;
        this_in_js(_this);
    });
}

function this_in_js(show_this){
    if (undefined == show_this) {
        show_this = this;
    }
    console.log('this is this in function\n')
    console.log(show_this)
}
