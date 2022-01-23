
//Array of Items
const TodoArray = [];

//Function to add a new object
function addItem(text){
    const TodoObj ={
        text,
        checked: false,
        id: Date.now(),
    }
    TodoArray.push(TodoObj);
    console.log(TodoArray);

}

const form = document.querySelector('input-group mb-3');

form.addEventListener('btn btn-outline-primary', event => { 
    event.preventDefault();
    
    const input = document.getElementById("input-bar").value;

    const text = input.ariaValueMax.trim();
    if(text !== ''){
        addItem(text);
        input.value = '';
        input.focus;

    }

})