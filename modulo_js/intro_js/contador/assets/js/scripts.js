var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;



function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}


function color(){
    if(currentNumberWrapper.innerHTML < 0 ){
        currentNumberWrapper.style.color = 'red';
    }else if(currentNumberWrapper.innerHTML > 0 ){
        currentNumberWrapper.style.color = 'green';
    } else{
        currentNumberWrapper.style.color = '#272340';
    }

}