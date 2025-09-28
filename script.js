var display = document.getElementById('display');

function getvalue(value){
    display.disabled = true
    display.value = display.value + value;   
}

function clearall(){
    display.value = '';
}
function delchar(){
    display.value = display.value.slice(0,-1);
}
function square(){
    display.value = display.value * display.value;
}
function isequal(){
    display.value = eval(display.value);
}