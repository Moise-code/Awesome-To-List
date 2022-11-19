import { Alert } from 'bootstrap';
import './style.css';
const form = document.querySelector('.add');
const list = document.querySelector('.list-group')

// secondly, we are going to create a function which will get the html format of a new todo list and append it to ui
// we pass the input value as the parameter since is the variable contains the value of input.
const addHtml = (inputValue) =>{
    // to get the entered input
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center text-light">
    <span>${inputValue}</span>
    <i class="far fa-trash-alt delete"></i>
</li>`;
// then we are going to add the input to the first form which in our case is to append html variable

list.innerHTML += html

}


// first of all we are adding the eventlisterner submit to the form so that it gets the value of in put and call the function which will append the text to UI

form.addEventListener('submit', e =>{
    e.preventDefault();
    const inputValue = form.add.value.trim();
    form.add.value = '';
    // we are going to do some validations includes not adding an empty activity
    // also not exceeding a given length
    if(inputValue.length){
        addHtml(inputValue)
    }
   
});

// delete todo with call back function

list.addEventListener('click', (e) =>{

    // we are going  to check if the item clicked is a trash can
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
// what we did above we targeted the ul(list) container
// then we checked to see if it contains class called delete
// after that we then targeted the parent or container of that element which has class of delete.
// then we added remove method to delete the element.
});