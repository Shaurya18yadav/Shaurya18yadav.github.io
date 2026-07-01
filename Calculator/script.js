
const display = document.getElementById('display');
const history = document.getElementById('history');

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = '';
    history.innerText = '';
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
        history.innerText = display.value;
        display.value = eval(display.value);
    }
    catch{
        display.value = 'Error';
    }
}

function toggleTheme(){
    document.body.classList.toggle('light');
}

document.addEventListener('keydown',(e)=>{
    const allowed="0123456789+-*/.%";

    if(allowed.includes(e.key)){
        append(e.key);
    }

    if(e.key==="Enter"){
        calculate();
    }

    if(e.key==="Backspace"){
        deleteLast();
    }

    if(e.key==="Escape"){
        clearDisplay();
    }
});