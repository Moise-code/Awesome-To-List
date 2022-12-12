import { Alert } from 'bootstrap';
import './style.css';
const form = document.querySelector('.add');
const list = document.querySelector('.list-group')
const search = document.querySelector('.search input') 
const clock = document.querySelector('.clock')

const tickClock = () =>{
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth()
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const clockSection = `
    
    <span>Date</span> :
    <span>${year}</span> /
    <span>${month}</span>
    <span>Time</span> :
    <span>${hours}</span> :
    <span>${minutes}</span> :
    <span>${seconds}</span>
    
    `
    clock.innerHTML = clockSection;

}
setInterval(tickClock, 1000);


// secondly, we are going to create a function which will get the html format of a new todo list and append it to ui
// we pass the input value as the parameter since is the variable contains the value of input.
const addHtml = (inputValue) =>{
    // to get the entered input
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center text-light">
    <div>
    <input type="checkbox" class=" m-0 checking" name="check">
    <span class ="spanning">${inputValue}</span>
    </div>
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

// then lets target the checkbox and one clicked the delete button will work and put under line 

// we are going to do the search method by using filter to find the filtered element//

// what we do first we are going first to target the class of the list in the ul


//now that we targeted the onevalue in the input of the form we are now going to use the function to be called on key pressed;

const filterTodos = (term) => {
    Array.from(list.children)// this takes the html collection of the ul and turns it into the array.
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'))

    // then we are going to test in case we have the filtered element containing the actual value of the one intered in the input value.

    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(item))
    .forEach((todo) => todo.classList.remove('filtered'));

// now lets add fnctionality to take the entered value and filter it the once filtered we add the class to remove unwanted ones

};


 
// what we did here we just targeted added the event listerner to the input
search.addEventListener('keyup', () =>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
} )


